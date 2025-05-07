import { PricingPlan } from '../types';

export const pricingPlans: PricingPlan[] = [
  {
    title: "Básico",
    price: 39.90,
    description: "Ideal para pequenas empresas ou profissionais iniciantes.",
    features: [
      "Até 50 certificados",
      "Suporte por e-mail",
      "Alertas de vencimento",
      "1 usuário administrador",
      "Histórico básico"
    ],
    certificateRange: "0-50 certificados",
    ctaText: "Começar agora"
  },
  {
    title: "Profissional",
    price: 69.90,
    description: "Perfeito para empresas em crescimento que precisam de mais recursos.",
    features: [
      "50-200 certificados",
      "Suporte prioritário",
      "Alertas personalizados",
      "3 usuários administradores",
      "Histórico completo",
      "Automação básica"
    ],
    certificateRange: "50-200 certificados",
    ctaText: "Experimentar grátis",
    highlighted: true
  },
  {
    title: "Empresarial",
    price: 109.90,
    description: "Solução completa para grandes empresas com necessidades avançadas.",
    features: [
      "Acima de 200 certificados",
      "Suporte 24/7",
      "Alertas avançados",
      "Usuários ilimitados",
      "Histórico completo",
      "Automação avançada",
      "Gestão de equipes"
    ],
    certificateRange: "Acima de 200 certificados",
    ctaText: "Falar com consultor"
  }
];