export interface Quote {
  project: string;
  client?: string;
  trade: string;
  scope: string[];
  materials: string[];
  labourHours: number;
  estimatedPrice: string;
  timeline: string;
}
