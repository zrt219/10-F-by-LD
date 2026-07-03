import { QuestionnaireState, FScore, FCategory, ResultSummary, ProfileType } from '../types';
import { questionnaireQuestions } from '../data/questionnaire';

const CATEGORIES: FCategory[] = [
  'Faith', 'Fitness', 'Food', 'Friends', 'Family', 
  'Finance', 'Fashion', 'Fun', 'Future', 'Finish Strong'
];

export function calculateResults(state: QuestionnaireState): ResultSummary {
  const { initialAnswers, coreAnswers } = state;
  const fScores: FScore[] = [];

  // Calculate raw scores and base probabilities
  CATEGORIES.forEach(category => {
    const categoryQuestions = questionnaireQuestions.filter(q => q.category === category);
    let rawScore = 0;
    
    categoryQuestions.forEach(q => {
      rawScore += coreAnswers[q.id] || 3; // default to 3 if somehow missed
    });

    const readinessPercentage = (rawScore / 25) * 100;
    
    // Base probabilities based on score
    let growthNeed = 100 - readinessPercentage;
    let confidence = readinessPercentage;
    let futureRisk = (100 - readinessPercentage) * 0.8;
    let recommendedSupport = growthNeed;

    // Apply modifiers based on initial answers
    if (category === 'Faith' && initialAnswers.biggestPressure) {
      growthNeed += 15; // Increased need if under high pressure
    }
    
    if (category === 'Future' && initialAnswers.currentStatus === 'transitioning out of sport') {
      recommendedSupport += 25;
    }
    
    if (category === 'Finance' && (initialAnswers.helpTopics.includes('NIL/sponsorship') || initialAnswers.biggestPressure === 'money')) {
      recommendedSupport += 20;
    }

    if (category === 'Fashion' && (initialAnswers.helpTopics.includes('personal brand') || initialAnswers.biggestPressure === 'social media')) {
      recommendedSupport += 20;
    }

    if (category === 'Finish Strong' && (initialAnswers.helpTopics.includes('digital reputation') || initialAnswers.usedAIBefore === 'yes')) {
      recommendedSupport += 15;
    }

    // Normalize probabilities to 0-100
    fScores.push({
      category,
      rawScore,
      readinessPercentage,
      growthNeedProbability: Math.min(100, Math.max(0, growthNeed)),
      confidenceProbability: Math.min(100, Math.max(0, confidence)),
      futureRiskProbability: Math.min(100, Math.max(0, futureRisk)),
      recommendedSupportProbability: Math.min(100, Math.max(0, recommendedSupport))
    });
  });

  // Sort by strongest and weakest
  const sortedByReadiness = [...fScores].sort((a, b) => b.readinessPercentage - a.readinessPercentage);
  const top3Strongest = sortedByReadiness.slice(0, 3).map(s => s.category);
  const top3Growth = [...fScores].sort((a, b) => b.growthNeedProbability - a.growthNeedProbability).slice(0, 3).map(s => s.category);

  // Determine Profiles probabilistically
  const profileScores: Record<ProfileType, number> = {
    'The Rebuilder': 0,
    'The Career-Ready Athlete': 0,
    'The Brand Builder': 0,
    'The Whole Athlete': 0,
    'The Transitioning Athlete': 0,
    'The Pressure Performer': 0,
    'The AI-Ready Athlete': 0,
  };

  // The Rebuilder: Needs support with identity, confidence, wellness (Faith, Fitness, Fun low)
  profileScores['The Rebuilder'] = 
    fScores.find(f => f.category === 'Faith')!.growthNeedProbability + 
    fScores.find(f => f.category === 'Fun')!.growthNeedProbability +
    (initialAnswers.biggestPressure === 'mental health' ? 50 : 0);

  // The Career-Ready Athlete: Future, Finish Strong high, seeking career help
  profileScores['The Career-Ready Athlete'] = 
    fScores.find(f => f.category === 'Future')!.readinessPercentage + 
    (initialAnswers.helpTopics.includes('career planning') ? 30 : 0);

  // The Brand Builder: Fashion, Finance growth need, looking for NIL/brand
  profileScores['The Brand Builder'] = 
    fScores.find(f => f.category === 'Fashion')!.growthNeedProbability + 
    fScores.find(f => f.category === 'Finance')!.growthNeedProbability +
    (initialAnswers.helpTopics.includes('personal brand') ? 40 : 0);

  // The Whole Athlete: Balanced, high scores across the board
  profileScores['The Whole Athlete'] = 
    (fScores.reduce((acc, curr) => acc + curr.readinessPercentage, 0) / 10) +
    (initialAnswers.currentStatus === 'in-season' ? 20 : 0);

  // The Transitioning Athlete: Future growth need, transitioning status
  profileScores['The Transitioning Athlete'] = 
    fScores.find(f => f.category === 'Future')!.growthNeedProbability + 
    (initialAnswers.currentStatus === 'transitioning out of sport' ? 80 : 0);

  // The Pressure Performer: High performance but high pressure (Fitness high, Fun low)
  profileScores['The Pressure Performer'] = 
    fScores.find(f => f.category === 'Fitness')!.readinessPercentage + 
    fScores.find(f => f.category === 'Fun')!.growthNeedProbability +
    (initialAnswers.biggestPressure === 'performance' ? 40 : 0);

  // The AI-Ready Athlete: Finish Strong, Future, AI user
  profileScores['The AI-Ready Athlete'] = 
    fScores.find(f => f.category === 'Finish Strong')!.readinessPercentage + 
    (initialAnswers.usedAIBefore === 'yes' ? 60 : 0);

  // Sort profiles by score to find primary and secondary
  const sortedProfiles = Object.entries(profileScores).sort((a, b) => b[1] - a[1]) as [ProfileType, number][];
  const primaryProfile = sortedProfiles[0][0];
  const secondaryProfile = sortedProfiles[1][0];

  // Determine readiness levels
  const getLevel = (score: number) => score > 75 ? 'High' : score > 50 ? 'Medium' : 'Low';
  
  const aiReadinessLevel = getLevel(fScores.find(f => f.category === 'Finish Strong')!.readinessPercentage);
  const personalBrandReadinessLevel = getLevel(fScores.find(f => f.category === 'Fashion')!.readinessPercentage);
  const lifeAfterSportReadinessLevel = getLevel(fScores.find(f => f.category === 'Future')!.readinessPercentage);
  const digitalReputationRiskLevel = getLevel(fScores.find(f => f.category === 'Finish Strong')!.futureRiskProbability);

  // Determine recommendations
  let recommendedProgramPathway = "The 10 F's Core Athlete Development Program";
  let recommendedProductIds = ['10-finish-strong-action-planner', '01-athlete-devotional'];

  if (primaryProfile === 'The Brand Builder') {
    recommendedProgramPathway = "The Personal Brand & NIL Pathway";
    recommendedProductIds = ['08-personal-brand-workbook', '09-nil-digital-reputation'];
  } else if (primaryProfile === 'The Transitioning Athlete' || primaryProfile === 'The Career-Ready Athlete') {
    recommendedProgramPathway = "Life After Sport & Career Readiness Pathway";
    recommendedProductIds = ['07-career-readiness-workbook', '06-responsible-ai-guide'];
  } else if (primaryProfile === 'The Rebuilder' || primaryProfile === 'The Pressure Performer') {
    recommendedProgramPathway = "Mental Wellness & Identity Support Pathway";
    recommendedProductIds = ['04-mental-wellness-reset', '05-gratitude-journal', '03-speak-life-affirmations'];
  }

  return {
    primaryProfile,
    secondaryProfile,
    top3Strongest,
    top3Growth,
    fScores,
    sportSpecificInsight: `As a ${initialAnswers.competitionLevel} handling ${initialAnswers.biggestPressure} pressure, focusing on ${top3Growth[0]} will unlock your next level of performance.`,
    aiReadinessLevel,
    personalBrandReadinessLevel,
    lifeAfterSportReadinessLevel,
    digitalReputationRiskLevel,
    recommendedProgramPathway,
    recommendedProductIds
  };
}
