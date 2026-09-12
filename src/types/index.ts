export type ExperienceLevel = 'beginner' | 'intermediate' | 'professional';

export interface RegistrationFormData {
  name: string;
  phone: string;
  email: string;
  experienceLevel: ExperienceLevel | '';
}

export interface RegistrationPayload {
  registrationType: string;
  registrationId: string;
  submittedAt: string;
  source: string;
  data: {
    name: string;
    phone: string;
    email: string;
    experienceLevel: string;
  };
}

export interface CourseModule {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  iconName: string;
}

export interface SoftwareTool {
  id: string;
  name: string;
  role: string;
  description: string;
  tag: string;
}

export interface OutcomeItem {
  id: string;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: string;
  category: 'student' | 'instructor';
  title: string;
  subtitle: string;
  imageUrl: string;
  tags: string[];
  isPlaceholder?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  comment: string;
  avatarUrl?: string;
}

export interface ContactInfo {
  phone: string;
  formattedPhone: string;
  whatsapp: string;
  instagram: string;
  address: string;
  pricePerMonth: string;
  totalPrice: string;
  duration: string;
  schedule: string;
  groupSize: string;
  instructorName: string;
  instructorTitle: string;
  instructorExperience: string;
}
