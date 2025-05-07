import React, { useEffect } from 'react';
import { ThemeProvider, CssBaseline, useMediaQuery } from '@mui/material';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import theme from './theme';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
// import ScreenshotSlider from './components/ScreenshotSlider';
import Pricing from './components/Pricing';
import Cta from './components/Cta';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "TrustPanel - Confiança Digital. Controle Total.";
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
        <Helmet>
          <title>TrustPanel - Confiança Digital. Controle Total.</title>
          <meta name="description" content="TrustPanel: gerenciamento seguro de certificados digitais para sua empresa. Automatize processos, evite expiração e mantenha o controle total." />
          <meta name="keywords" content="certificados digitais, gerenciamento de certificados, segurança digital, automação, SSL, TLS, PKI, identidade digital" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://trustpanel.com.br/" />
          <meta property="og:title" content="TrustPanel - Confiança Digital. Controle Total." />
          <meta property="og:description" content="Gerenciamento seguro e eficiente de certificados digitais para empresas de todos os tamanhos." />
          
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://trustpanel.com.br/" />
          <meta property="twitter:title" content="TrustPanel - Confiança Digital. Controle Total." />
          <meta property="twitter:description" content="Gerenciamento seguro e eficiente de certificados digitais para empresas de todos os tamanhos." />
          
          {/* Canonical URL */}
          <link rel="canonical" href="https://trustpanel.com.br/" />
          
          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
        </Helmet>

        <Navbar />
        <Hero />
        <Features />
        {/* <ScreenshotSlider /> */}
        <Pricing />
        <Cta />
        <ContactForm />
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;