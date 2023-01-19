export enum SelectedLink {
  Home = 'home',
  Benefits = 'benefits',
  OurClasses = 'ourclasses',
  ContactUs = 'contactus',
}

export interface BenefitType {
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
}
