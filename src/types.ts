export type ServiceDomain = 'software' | 'ai' | 'digital' | 'design' | 'media';

export interface ServiceItem {
  id: string;
  domain: ServiceDomain;
  domainName: string;
  name: string;
  description: string;
  capabilities: string[];
  clientOutcome: string;
  architectureTier: string;
  status: 'ACTIVE_PRODUCTION' | 'ENTERPRISE_READY' | 'SCALING';
}

export type ProductCategory = 
  | 'SaaS'
  | 'Business Systems'
  | 'AI Automation'
  | 'Developer Tools'
  | 'Mobile Solutions';

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  status: 'ACTIVE' | 'DEPLOYED' | 'BETA' | 'IN_DEVELOPMENT';
  techStack: string[];
  integrations: string[];
  previewType: 'mobile' | 'core_system' | 'conduit' | 'analytics';
}

export interface TelemetryNode {
  id: string;
  name: string;
  region: string;
  status: 'OPTIMAL' | 'ACTIVE' | 'SYNCHRONIZED';
  latencyMs: number;
  uptime: string;
  activeWorkflows: number;
}

export interface AutomationLog {
  id: string;
  timestamp: string;
  source: string;
  pipeline: string;
  stage: 'TRIGGER' | 'PROCESS' | 'INTELLIGENCE' | 'ACTION' | 'VERIFICATION';
  status: 'COMPLETED' | 'IN_TRANSIT' | 'VERIFIED';
  payload: string;
}

export type Locale = 'en' | 'ar' | 'ur';

export interface InquiryFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  preferredRegion: 'saudi_arabia' | 'pakistan' | 'international';
  domain: ServiceDomain | 'custom_product' | 'ai_automation';
  message: string;
  estimatedTimeline: string;
}
