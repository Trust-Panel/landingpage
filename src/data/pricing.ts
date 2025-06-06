import { PricingPlan } from '../types';

export const pricingPlans: PricingPlan[] = [
  {
    title: "Start",
    price: 147.00,
    description: "Solução essencial para pequenas empresas e profissionais autônomos.",
    features: [
      "Até 5 usuários",
      "Suporte por e-mail",
      "Alertas de vencimento",
      "Interface Web simples"
    ],
    certificateRange: "1-50 certificados",
    ctaText: "Falar com consultor"
  },
  {
    title: "Pro",
    price: 397.00,
    description: "A escolha ideal para empresas em crescimento que buscam mais recursos e flexibilidade.",
    features: [
      "Até 20 usuários",
      "Auditoria básica",
      "Importação em massa",
      "Alertas e notificações avançadas",
      "Suporte via e-mail e Whatsapp"
    ],
    certificateRange: "Ilimitado",
    ctaText: "Falar com consultor",
    highlighted: true
  },
  {
    title: "Enterprise",
    price: 947.00,
    description: "Solução robusta para grandes empresas com demandas complexas e alto volume de certificados.",
    features: [
      "Single Sign-On",
      "Relatórios de conformidade",
      "API completa",
      "Suporte prioritário"
    ],
    certificateRange: "Ilimitado",
    ctaText: "Falar com consultor"
  }
];