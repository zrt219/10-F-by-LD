export type CompetitionLevel = 
  | 'youth athlete' 
  | 'high school athlete' 
  | 'college/university athlete' 
  | 'club athlete' 
  | 'semi-professional athlete' 
  | 'professional athlete' 
  | 'retired athlete';

export type CurrentStatus = 
  | 'in-season' 
  | 'off-season' 
  | 'injured/recovering' 
  | 'transitioning out of sport' 
  | 'exploring career options' 
  | 'already working';

export type BiggestPressure = 
  | 'performance' 
  | 'injury' 
  | 'school' 
  | 'family' 
  | 'money' 
  | 'confidence' 
  | 'social media' 
  | 'future/career' 
  | 'mental health' 
  | 'time management';

export type HelpTopic = 
  | 'resume' 
  | 'interviews' 
  | 'personal brand' 
  | 'NIL/sponsorship' 
  | 'schoolwork support' 
  | 'career planning' 
  | 'mental wellness' 
  | 'digital reputation' 
  | 'leadership' 
  | 'finances';

export type InitialAnswers = {
  name: string;
  ageRange: string;
  sports: string;
  competitionLevel: CompetitionLevel | '';
  currentStatus: CurrentStatus | '';
  biggestPressure: BiggestPressure | '';
  usedAIBefore: 'yes' | 'no' | '';
  helpTopics: HelpTopic[];
};

export type FCategory = 'Faith' | 'Fitness' | 'Food' | 'Friends' | 'Family' | 'Finance' | 'Fashion' | 'Fun' | 'Future' | 'Finish Strong';

export interface CoreQuestion {
  id: string;
  category: FCategory;
  text: string;
}

export type CoreAnswers = Record<string, number>; // questionId -> 1-5 score

export interface QuestionnaireState {
  initialAnswers: InitialAnswers;
  coreAnswers: CoreAnswers;
}

export interface FScore {
  category: FCategory;
  rawScore: number;
  readinessPercentage: number;
  growthNeedProbability: number;
  confidenceProbability: number;
  futureRiskProbability: number;
  recommendedSupportProbability: number;
}

export type ProfileType = 
  | 'The Rebuilder'
  | 'The Career-Ready Athlete'
  | 'The Brand Builder'
  | 'The Whole Athlete'
  | 'The Transitioning Athlete'
  | 'The Pressure Performer'
  | 'The AI-Ready Athlete';

export interface ResultSummary {
  primaryProfile: ProfileType;
  secondaryProfile: ProfileType;
  top3Strongest: FCategory[];
  top3Growth: FCategory[];
  fScores: FScore[];
  sportSpecificInsight: string;
  aiReadinessLevel: 'Low' | 'Medium' | 'High';
  personalBrandReadinessLevel: 'Low' | 'Medium' | 'High';
  lifeAfterSportReadinessLevel: 'Low' | 'Medium' | 'High';
  digitalReputationRiskLevel: 'Low' | 'Medium' | 'High';
  recommendedProgramPathway: string;
  recommendedProductIds: string[];
}
