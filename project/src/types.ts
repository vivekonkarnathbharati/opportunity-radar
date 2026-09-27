export interface Opportunity {
  id: string;
  title: string;
  organization: string;
  type: string;
  requiredSkills: string[];
  matchScore: number;
  description: string;
}
