export type SituationOption = {
  id: string;
  label: string;
  nextSteps: string[];
};

export const situationOptions: SituationOption[] = [
  {
    id: 'new-injury',
    label: 'I was recently injured at work',
    nextSteps: [
      'Document the incident in writing immediately.',
      'Get a medical report and keep a copy.',
      'Submit your claim and start a timeline log.',
    ],
  },
  {
    id: 'claim-denial',
    label: 'My claim was denied',
    nextSteps: [
      'Request detailed written reasons for denial.',
      'Request your full claim file under s.151.',
      'Prepare Review Division submission before deadline.',
    ],
  },
  {
    id: 'appeal-stage',
    label: 'I am preparing for review/appeal',
    nextSteps: [
      'Organize evidence chronologically.',
      'Map facts to specific Act sections.',
      'Use precedents to structure arguments.',
    ],
  },
];

export const first30MinutesChecklist = [
  'Write down what happened, with date/time and witnesses.',
  'Save photos, texts, and call logs in one folder.',
  'Book a medical assessment and mention work causation clearly.',
  'Notify employer in writing and keep proof.',
  'Start a claim timeline immediately.',
];
