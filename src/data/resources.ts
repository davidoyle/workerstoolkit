export type ResourceItem = {
  id: string;
  title: string;
  description: string;
  filePath: string;
  category: 'template' | 'checklist' | 'guide';
};

export const resources: ResourceItem[] = [
  {
    id: 'handoff-doc',
    title: 'Handoff Documentation Guide',
    description: 'Practical worksheet for capturing claim handoff details.',
    filePath: '/Handoff%20Doc.pdf',
    category: 'template',
  },
  {
    id: 'fippa-request',
    title: 'FIPPA Request Template',
    description: 'Request template for obtaining records under BC FIPPA.',
    filePath: '/fippa%20request%20templates.pdf',
    category: 'template',
  },
  {
    id: 'email-strategies',
    title: 'Email Templates and Key Strategies',
    description: 'Reference pack for escalation and accountability emails.',
    filePath: '/Email%20Templates%20and%20Key%20Strategies.pdf',
    category: 'guide',
  },
  {
    id: 'wcat-toolkit',
    title: 'WCAT Toolkit and Strategies',
    description: 'Appeal-focused toolkit with strategy examples.',
    filePath: '/WCAT%20TOOLKIT%20AND%20STRATEGIES.pdf',
    category: 'guide',
  },
  {
    id: 'evidence-docs',
    title: 'Evidence and Documentation Workbook',
    description: 'Organize records and evidence for submissions and appeals.',
    filePath: '/Evidence%20%26%20Documentation.pdf',
    category: 'checklist',
  },
];

export const quickStartResourceIds = ['handoff-doc', 'fippa-request', 'evidence-docs', 'email-strategies'];
