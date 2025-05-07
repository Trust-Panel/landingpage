export interface PricingPlan {
  title: string;
  price: number;
  description: string;
  features: string[];
  certificateRange: string;
  ctaText: string;
  highlighted?: boolean;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface ScreenshotItem {
  id: number;
  image: string;
  title: string;
  description: string;
}