export interface ClientQuote {
  id?: string;
  companyName: string;
  contractorName: string;
  customerName: string;
  customerEmail: string;
  project: string;
  scope: string[];
  materials: string[];
  labourHours: number;
  price: string;
  timeline: string;
  status:
    | "Draft"
    | "Sent"
    | "Declined";
  follow_up_date?: string;
  createdAt?: string;
}
