export interface WCATCase {
  id: string;
  citation: string;
  caseNumber?: string;
  year?: number;
  bodyPart?: string;
  issueTags?: string[];
  phrasesToSteal?: string[];
  decisionLink?: string | null;
  title: string;
  description: string;
  strategyMoves?: string[];
  portableStrategy?: string;
  category: string;
  shortLabel: string;
  fullLabel: string;
  keyPoints: string[];
  facts: string[];
  howToUse: string[];
}
