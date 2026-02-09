export type EmailTemplate = {
  id: string;
  title: string;
  recipient: string;
  purpose: string;
  content: string;
};

export const emailTemplates: EmailTemplate[] = [
  {
    id: 'request-file',
    title: 'Request Your Claim File (s.151)',
    recipient: 'WorkSafeBC',
    purpose: 'Get all documents held about your claim',
    content: `Subject: Request for Complete Claim File - Section 151\n\nDear WorkSafeBC,\n\nI request a complete copy of my claim file under s.151 of the Workers Compensation Act.\n\nClaim Number: [YOUR CLAIM NUMBER]\nWorker Name: [YOUR NAME]\nDate of Injury: [DATE]\n\nPlease provide all reports, notes, correspondence, internal communications, and decisions.\n\nSincerely,\n[YOUR NAME]`,
  },
  {
    id: 'review-request',
    title: 'Review Division Request',
    recipient: 'Review Division',
    purpose: 'Request review of a WorkSafeBC decision',
    content: `Subject: Request for Review - Decision dated [DATE]\n\nI request review of the WorkSafeBC decision dated [DATE].\n\nGrounds include factual errors, legal errors, and failure to consider evidence.\n\nRelief requested: [WHAT YOU WANT CHANGED].`,
  },
];
