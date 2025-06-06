import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  Divider,
  IconButton,
  Stack,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  Linkedin,
  ChevronUp,
  ShieldCheck,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3, display: "flex", alignItems: "center" }}>
              <ShieldCheck size={32} color="#FFFFFF" />
              <Typography
                variant="h5"
                component="div"
                sx={{
                  ml: 1.5,
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                }}
              >
                TrustPanel
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{ mb: 3, color: "rgba(255,255,255,0.7)", pr: { md: 6 } }}
            >
              O TrustPanel é uma plataforma completa para gestão de certificados
              digitais, oferecendo segurança, controle e automação para empresas
              de todos os tamanhos.
            </Typography>
            <Stack direction="row" spacing={1.5}>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  aria-label="facebook"
                  size="small"
                  sx={{
                    color: "white",
                    bgcolor: "rgba(255,255,255,0.1)",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.2)",
                    },
                  }}
                >
                  <Facebook size={18} />
                </IconButton>
              </a>
              <a
                href="https://www.instagram.com/trust.panel/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  aria-label="instagram"
                  size="small"
                  sx={{
                    color: "white",
                    bgcolor: "rgba(255,255,255,0.1)",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.2)",
                    },
                  }}
                >
                  <Instagram size={18} />
                </IconButton>
              </a>
              <a
                href="https://www.linkedin.com/company/trustpanel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  aria-label="linkedin"
                  size="small"
                  sx={{
                    color: "white",
                    bgcolor: "rgba(255,255,255,0.1)",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.2)",
                    },
                  }}
                >
                  <Linkedin size={18} />
                </IconButton>
              </a>
            </Stack>
          </Grid>

          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Empresa
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {["Sobre Nós", "Carreiras", "Blog", "Notícias"].map((item) => (
                <Box component="li" key={item} sx={{ mb: 1 }}>
                  <Link
                    href="#"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none",
                      "&:hover": {
                        color: "white",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {item}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Produto
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {["Recursos", "Planos", "Preços", "Integrações", "API"].map(
                (item) => (
                  <Box component="li" key={item} sx={{ mb: 1 }}>
                    <Link
                      href="#"
                      sx={{
                        color: "rgba(255,255,255,0.7)",
                        textDecoration: "none",
                        "&:hover": {
                          color: "white",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      {item}
                    </Link>
                  </Box>
                )
              )}
            </Box>
          </Grid>

          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Suporte
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {["Ajuda", "Contato", "FAQ", "Documentação", "Status"].map(
                (item) => (
                  <Box component="li" key={item} sx={{ mb: 1 }}>
                    <Link
                      href="#"
                      sx={{
                        color: "rgba(255,255,255,0.7)",
                        textDecoration: "none",
                        "&:hover": {
                          color: "white",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      {item}
                    </Link>
                  </Box>
                )
              )}
            </Box>
          </Grid>

          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Legal
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {[
                "Termos",
                "Privacidade",
                "Cookies",
                "Licenças",
                "Conformidade",
              ].map((item) => (
                <Box component="li" key={item} sx={{ mb: 1 }}>
                  <Link
                    href="#"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none",
                      "&:hover": {
                        color: "white",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {item}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5, borderColor: "rgba(255,255,255,0.1)" }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
            &copy; {new Date().getFullYear()} TrustPanel. Todos os direitos
            reservados.
          </Typography>
          <IconButton
            onClick={scrollToTop}
            sx={{
              color: "white",
              bgcolor: "rgba(255,255,255,0.1)",
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.2)",
              },
            }}
          >
            <ChevronUp size={20} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
