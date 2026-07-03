const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, 'digital-products');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const disclaimer = `
## Important Disclaimer
Educational and motivational only. Not therapy or mental-health treatment. Not medical advice. Not financial advice. Not legal advice. AI guidance is for responsible support, not academic dishonesty. Athletes must follow school, team, league, NIL, and academic-integrity policies.
`;

const products = [
  {
    dir: '01-athlete-devotional',
    title: 'Finish Strong Athlete Devotional',
    content: (format) => `# Finish Strong Athlete Devotional
by Lornette Daye

${disclaimer}

## Introduction
Welcome to the Finish Strong Athlete Devotional. Over the next 30 days...

## Day 1: Identity Beyond the Jersey
**Scripture:** "I am fearfully and wonderfully made."
**Devotional:** Your worth is not defined by your stat line...
**Athlete Life Lesson:** True confidence comes from within.
**Reflection:** Who are you when the cheering stops?
**Prayer:** Lord, help me see myself as You see me.
**Finish Strong Declaration:** I am more than an athlete.

*(Days 2-30 continue with themes of pressure, discipline, setbacks, confidence, resilience...)*

## Closing
Keep finishing strong in every area of your life!
[UMATTR / Lornette Daye Call to Action]
`
  },
  {
    dir: '02-motivational-reflections',
    title: 'Finish Strong Motivational Reflections for Athletes',
    content: (format) => `# Finish Strong Motivational Reflections for Athletes
by Lornette Daye

${disclaimer}

## Reflection 1: Embrace the Grind
**Message:** Champions are built in the empty gym when no one is watching.
**Coach Lornette’s Challenge:** Give 10% more effort today than yesterday.
**Reflection:** Where am I holding back?
**Action Step:** Write down one extra rep you will do today.
**Finish Strong Statement:** I embrace the process.

*(Reflections 2-30 continue...)*
`
  },
  {
    dir: '03-speak-life-affirmations',
    title: 'Speak Life: Athlete Affirmations and Declarations',
    content: (format) => `# Speak Life: Athlete Affirmations and Declarations
by Lornette Daye

${disclaimer}

## Section 1: Identity Beyond Sport
- My worth is not tied to my performance.
- I bring value to the world outside of my sport.

## Section 2: Game Day Confidence
- I am prepared for this moment.
- Pressure is a privilege that I am ready for.

*(Sections continue across all categories...)*
`
  },
  {
    dir: '04-mental-wellness-reset',
    title: 'Athlete Mental Wellness Reset Workbook',
    content: (format) => `# Athlete Mental Wellness Reset Workbook
by Lornette Daye

${disclaimer}

## 7-Day Reset Plan
### Day 1: Emotional Check-in
How are you really doing today? 
[ ${format === 'PDF' || format === 'Word' ? '________________________' : 'Reflect on this'} ]

### Support Circle Worksheet
Who are the 3 people you can call when you are overwhelmed?
1. 
2. 
3. 
`
  },
  {
    dir: '05-gratitude-journal',
    title: 'Because You Matter Student-Athlete Gratitude Journal',
    content: (format) => `# Because You Matter Student-Athlete Gratitude Journal
by Lornette Daye

${disclaimer}

## Daily Page Template (90 Days)
**Date:** _________
**Today I am grateful for:** _________________
**Today I release:** _________________
**Today I choose:** _________________
**One way I will show discipline today:** _________________
**One person I can encourage:** _________________
**One step toward my future:** _________________
**Finish Strong declaration:** _________________
`
  },
  {
    dir: '06-responsible-ai-guide',
    title: 'Responsible AI Prompt Guide for Student-Athletes',
    content: (format) => `# Responsible AI Prompt Guide for Student-Athletes
by Lornette Daye

${disclaimer}
*Important: Never use AI to cheat, plagiarize, fabricate experience, misrepresent yourself, or violate school/team policies.*

## Safe Prompt Examples
**Resume Building:** "I am a D1 basketball player looking for internships in marketing. How can I translate my athletic discipline into marketing resume bullet points?"

**Unsafe Prompt Example:** "Write my sports management essay for me." (DO NOT DO THIS)
`
  },
  {
    dir: '07-career-readiness-workbook',
    title: 'Life After Sport Career Readiness Workbook',
    content: (format) => `# Life After Sport Career Readiness Workbook
by Lornette Daye

${disclaimer}

## Transferable Skills Worksheet
Athletic Skill | Corporate Translation
--- | ---
Time Management | Consistently meets tight deadlines while balancing priorities
Teamwork | Collaborates effectively in cross-functional teams
Handling Pressure | Thrives in high-stress, fast-paced environments

## 30-Day Career Action Plan
Week 1: Audit your skills and update your resume...
`
  },
  {
    dir: '08-personal-brand-workbook',
    title: 'Student-Athlete Personal Brand Workbook',
    content: (format) => `# Student-Athlete Personal Brand Workbook
by Lornette Daye

${disclaimer}

## Social Media Audit
1. If an employer looked at your last 10 posts, what would they think of you?
2. Are your posts aligned with your core values?

## Brand Statement Builder
I am a [Descriptor] athlete who values [Value 1] and [Value 2]. I want to be known for [Legacy].
`
  },
  {
    dir: '09-nil-digital-reputation',
    title: 'NIL & Digital Reputation Decision Guide',
    content: (format) => `# NIL & Digital Reputation Decision Guide
by Lornette Daye

${disclaimer}

## The Screenshot Test
Before you post, ask yourself: "Would I be okay if this was screenshotted and sent to my coach, my grandmother, or my future boss?"

## NIL Red Flags
- Pressure to sign immediately without legal review.
- Contracts that ask for rights in perpetuity.
- Deals that conflict with your team or school sponsors.
`
  },
  {
    dir: '10-finish-strong-action-planner',
    title: '30-Day Finish Strong Action Planner',
    content: (format) => `# 30-Day Finish Strong Action Planner
by Lornette Daye

${disclaimer}

## Daily Plan
**Focus of the day:** _________
- **Athletic Habit:** _________
- **Academic/Career Habit:** _________
- **Wellness Habit:** _________
- **Relationship/Support Habit:** _________
- **Future-building step:** _________

**End of Day Reflection:** _________
**Finish Strong Declaration:** _________
`
  }
];

const formats = ['PDF', 'Word', 'Kindle'];

products.forEach(product => {
  const pDir = path.join(outputDir, product.dir);
  if (!fs.existsSync(pDir)) {
    fs.mkdirSync(pDir);
  }

  formats.forEach(format => {
    let content = product.content(format);
    
    // Add format-specific instructions
    if (format === 'PDF') {
      content = `<!-- FORMATTING INSTRUCTIONS FOR PDF: Use polished print-ready layout, branded cover, page numbers, and ensure worksheets have plenty of writing space. -->\n\n` + content;
    } else if (format === 'Word') {
      content = `<!-- FORMATTING INSTRUCTIONS FOR WORD: Use clear headings, editable worksheet sections, page breaks between major sections, and make it easy to re-brand. -->\n\n` + content;
    } else if (format === 'Kindle') {
      content = `<!-- FORMATTING INSTRUCTIONS FOR KINDLE: Use simple reflowable formatting, NO complex tables. Clickable table of contents. Convert worksheet boxes to simple text prompts. -->\n\n` + content;
    }

    fs.writeFileSync(path.join(pDir, `${format.toLowerCase()}-ready.md`), content);
  });
});

console.log('All digital products generated successfully!');
