import { PricingPlan } from '../types';

export const pricingPlans: PricingPlan[] = [
  {
    title: "Start",
    price: 147.00,
    description: "Solução essencial para pequenas empresas e profissionais autônomos.",
    features: [
      "Até 5 usuários",
      "Até 50 certificados",
    ],
    certificateRange: "",
    ctaText: "Falar com consultor"
  },
  {
    title: "Pro",
    price: 397.00,
    description: "A escolha ideal para empresas em crescimento que buscam mais recursos e flexibilidade.",
    features: [
      "Até 20 usuários",
      "Até 500 certificados"
    ],
    certificateRange: "Até 500 certificados",
    ctaText: "Falar com consultor",
    highlighted: true
  },
  {
    title: "Enterprise",
    price: 947.00,
    description: "Solução robusta para grandes empresas com demandas complexas e alto volume de certificados.",
    features: [
      "Até 50 usuários",
      "Certificados ilimitados"
    ],
    certificateRange: "", 
    ctaText: "Falar com consultor"
  }
];