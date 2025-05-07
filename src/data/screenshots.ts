import dashboardImg from '/assets/system-screens/dashboard.png';
import newCertificateImg from '/assets/system-screens/new-certificate.png';
import myCertificatesImg from '/assets/system-screens/my-certificates.png';
import managementUsersImg from '/assets/system-screens/managment-users.png';
import detailsCertifyImg from '/assets/system-screens/details-certify.png';
import { ScreenshotItem } from '../types';

export const screenshots: ScreenshotItem[] = [
  {
    id: 1,
    image: dashboardImg,
    title: "Dashboard Principal",
    description: "Visualize todos os seus certificados digitais em um só lugar, com status de validade e alertas importantes."
  },
  {
    id: 2,
    image: newCertificateImg,
    title: "Adicionar Certificado",
    description: "Interface intuitiva para carregar e validar novos certificados digitais, com suporte para formatos .pfx e .p12."
  },
  {
    id: 3,
    image: myCertificatesImg,
    title: "Gestão de Certificados",
    description: "Gerencie todos os seus certificados com facilidade, visualizando informações importantes como status, emissor e data de validade."
  },
  {
    id: 4,
    image: managementUsersImg,
    title: "Gestão de Usuários",
    description: "Adicione, edite ou remova usuários com facilidade, garantindo que apenas pessoas autorizadas tenham acesso aos certificados."
  },
  {
    id: 5,
    image: detailsCertifyImg,
    title: "Detalhes do Certificado",
    description: "Acesse informações detalhadas de cada certificado, incluindo histórico de alterações e dados do titular."
  }
];
