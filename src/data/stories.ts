export type Story = {
  title: string;
  category: string;
  preview: string;
  fullStory: string;
  outcome: string;
  date: string;
};

export const storyFilters = ['All', 'Delays', 'Mental health', 'Retaliation', 'Return to work', 'WCAT win'];

export const stories: Story[] = [
  {
    title: "They said it was 'just stress.'",
    category: 'Mental health',
    preview: 'My doctor diagnosed work-related anxiety. WorkSafeBC said it was pre-existing. It took 8 months and a specialist report to be acknowledged.',
    fullStory: 'I worked in a high-pressure environment for years. My doctor linked anxiety to workplace bullying. The claim was denied as pre-existing despite specialist evidence. After Review Division and additional records, the claim was accepted.',
    outcome: 'Claim accepted after appeal. Wage loss benefits paid retroactively.',
    date: '2024',
  },
  {
    title: 'My employer changed their story.',
    category: 'Retaliation',
    preview: 'First they said I remained job-attached, then claimed I resigned. The contradiction went unchallenged.',
    fullStory: 'After a back injury, my employer promised accommodations then reversed course. WorkSafeBC accepted the revised employer statement without reconciling conflicting records. I documented all calls and emails and challenged credibility on review.',
    outcome: 'Review ordered reconsideration with proper evidence weighing.',
    date: '2023',
  },
  {
    title: 'The delay did the damage.',
    category: 'Delays',
    preview: 'Months of delayed treatment approvals worsened my condition and finances.',
    fullStory: 'My treatment was delayed pending repeated information requests. While waiting, symptoms worsened and I lost housing stability. A detailed timeline and medical notes helped show harm from administrative delay.',
    outcome: 'Escalation led to expedited treatment authorization.',
    date: '2025',
  },
];
