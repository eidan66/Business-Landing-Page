export interface ILead {
  id?: string;
  full_name: string;
  email: string;
  phone?: string;
  company?: string;
  job_title?: string;
  source: LeadSource;
  status: LeadStatus;
  message?: string;
  created_at?: Date;
  last_contacted?: Date;
}

export enum LeadSource {
  HERO_SECTION = 'hero_section',
  CONTACT_FORM = 'contact_form',
  FOOTER = 'footer',
  PRICING_SECTION = 'pricing_section',
  BLOG = 'blog',
  REFERRAL = 'referral'
}

export enum LeadStatus {
  NEW = 'new',
  CONTACTED = 'contacted',
  QUALIFIED = 'qualified',
  MEETING_SCHEDULED = 'meeting_scheduled',
  PROPOSAL_SENT = 'proposal_sent',
  NEGOTIATING = 'negotiating',
  CONVERTED = 'converted',
  LOST = 'lost'
}

export class Lead implements ILead {
  id?: string;
  full_name: string;
  email: string;
  phone?: string;
  company?: string;
  job_title?: string;
  source: LeadSource;
  status: LeadStatus;
  message?: string;
  created_at?: Date;
  last_contacted?: Date;

  constructor(data: Partial<ILead>) {
    this.id = data.id;
    this.full_name = data.full_name || '';
    this.email = data.email || '';
    this.phone = data.phone;
    this.company = data.company;
    this.job_title = data.job_title;
    this.source = data.source || LeadSource.CONTACT_FORM;
    this.status = data.status || LeadStatus.NEW;
    this.message = data.message;
    this.created_at = data.created_at || new Date();
    this.last_contacted = data.last_contacted;
  }

  static create(data: Partial<ILead>): Lead {
    return new Lead(data);
  }

  toJSON(): ILead {
    return {
      id: this.id,
      full_name: this.full_name,
      email: this.email,
      phone: this.phone,
      company: this.company,
      job_title: this.job_title,
      source: this.source,
      status: this.status,
      message: this.message,
      created_at: this.created_at,
      last_contacted: this.last_contacted
    };
  }
}