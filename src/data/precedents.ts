export type Precedent = {
  id: string;
  title: string;
  category: string;
  summary: string;
  fullSummary: string;
  keyHolding: string;
  outcome: string;
  year: string;
  tags: string[];
};

export const precedentCategories = ['All', 'Mental health', 'Cumulative trauma', 'Return to work', 'Delays', 'Evidence'];

export const precedents: Precedent[] = [
  {
    id: 'A1900037',
    title: 'Mental disorder + refusal to accommodate',
    category: 'Mental health',
    summary: 'Employer denial of the condition can be a significant stressor.',
    fullSummary: 'Tribunal found refusal to acknowledge and accommodate the worker condition materially contributed to mental disorder severity.',
    keyHolding: 'Employer conduct that exacerbates mental injury can be compensable.',
    outcome: 'Appeal allowed. Benefits granted.',
    year: '2019',
    tags: ['s.5.1(1)(a)', 'mental disorder', 'employer conduct'],
  },
  {
    id: 'A2101129',
    title: 'Cumulative trauma from repeated incidents',
    category: 'Cumulative trauma',
    summary: 'Repeated minor incidents can be compensable under cumulative injury provisions.',
    fullSummary: 'No single traumatic event was required where repetitive duties caused progressive injury.',
    keyHolding: 'Cumulative injuries from repetitive duties are compensable.',
    outcome: 'Appeal allowed. Medical benefits and wage loss granted.',
    year: '2021',
    tags: ['s.134(1)', 'cumulative injury', 'repetitive strain'],
  },
  {
    id: 'A2200345',
    title: 'Treating physician evidence preferred',
    category: 'Evidence',
    summary: 'Longitudinal treating relationship can outweigh a one-time IME.',
    fullSummary: 'Tribunal preferred ongoing treating physician evidence over single examination where consistency and clinical detail were stronger.',
    keyHolding: 'Longitudinal evidence can carry greater evidentiary weight.',
    outcome: 'Appeal allowed. Benefits reinstated.',
    year: '2022',
    tags: ['medical evidence', 'IME', 'credibility'],
  },
];
