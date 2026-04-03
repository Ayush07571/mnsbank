export interface ProductFeature {
  title: string;
  desc: string;
}

export interface ProductProcessStep {
  title: string;
  desc: string;
}

export interface MoratoriumDetails {
  course: string[];
  postCourse: string[];
}

export interface EducationExpense {
  title: string;
  desc: string;
}

export interface ConstructionStage {
  title: string;
  desc: string;
}

export interface ProductEligibility {
  individuals?: string[];
  businesses?: string[];
  salaried?: string[];
  selfEmployed?: string[];
  coApplicants?: string[];
  requirements?: string[];
  student?: string[];
  parent?: string[];
  property?: string[];
}

export interface ProductDocuments {
  salaried?: string[];
  selfEmployed?: string[];
  required?: string[];
  student?: string[];
  parent?: string[];
  personal?: string[];
  property?: string[];
}

export interface Product {
  title: string;
  description: string;
  features: ProductFeature[];
  details: string[];
  benefits: string[];
  eligibility: ProductEligibility;
  documents: ProductDocuments;
  process?: ProductProcessStep[];
  moratorium?: MoratoriumDetails;
  expenses?: EducationExpense[];
  stages?: ConstructionStage[];
}

export interface ProductTranslations {
  carLoan: Product;
  homeLoan: Product;
  personalLoan: Product;
  goldLoan: Product;
  educationLoan: Product;
  constructionLoan: Product;
  emi: Record<string, string>;
  deposit: Record<string, string>;
  hero: Record<string, string>;
  sections: Record<string, string>;
  loans: Record<string, string>;
}
