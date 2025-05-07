import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  useMediaQuery, 
  Grid,
  Stack 
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      id="home"
      sx={{
        background: 'linear-gradient(135deg, #E5EAF0 0%, #FFFFFF 100%)',
        pt: { xs: 4, sm: 6, md: 10 },
        pb: { xs: 6, sm: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        minHeight: { xs: 'calc(100vh - 64px)', md: 'auto' },
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          opacity: 0.05,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231F2A44' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
            <Box sx={{ 
              maxWidth: 600, 
              mx: 'auto', 
              textAlign: { xs: 'center', md: 'left' },
              px: { xs: 2, sm: 0 }
            }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                  fontWeight: 800,
                  mb: 2,
                  background: 'linear-gradient(90deg, #1F2A44 0%, #6fe2b4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                }}
              >
                TrustPanel
              </Typography>
              
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 500,
                  color: 'primary.main',
                  mb: 3,
                  fontStyle: 'italic',
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                }}
              >
                Confiança Digital. Controle Total.
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                  color: 'text.secondary',
                  mb: 4,
                  lineHeight: 1.7,
                }}
              >
                Simplifique a gestão de certificados digitais e garanta a segurança 
                da sua infraestrutura com nossa plataforma all-in-one. Automatize processos, 
                evite expiração de certificados e mantenha controle total da sua segurança digital.
              </Typography>
              
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 2, sm: 3 }}
                justifyContent={{ xs: 'center', md: 'flex-start' }}
              >
                <Button
                  variant="contained"
                  size="large"
                  color="secondary"
                  endIcon={<ArrowRight />}
                  sx={{
                    py: { xs: 1.25, sm: 1.5 },
                    px: { xs: 2.5, sm: 3 },
                    fontWeight: 600,
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    width: { xs: '100%', sm: 'auto' }
                  }}
                  href="#contact"
                >
                  Solicitar Demonstração
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    py: { xs: 1.25, sm: 1.5 },
                    px: { xs: 2.5, sm: 3 },
                    fontWeight: 600,
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    width: { xs: '100%', sm: 'auto' },
                    '&:hover': {
                      borderColor: 'primary.dark',
                      backgroundColor: 'rgba(31, 42, 68, 0.04)',
                    },
                  }}
                  href="#pricing"
                >
                  Ver Planos
                </Button>
              </Stack>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: { xs: '250px', sm: '300px', md: '500px' },
                position: 'relative',
                mt: { xs: 4, md: 0 }
              }}
            >
              <Box
                sx={{
                  width: { xs: '200px', sm: '250px', md: '350px' },
                  height: { xs: '200px', sm: '250px', md: '350px' },
                  backgroundColor: 'secondary.main',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow: '0 20px 40px rgba(111, 226, 180, 0.25)',
                  animation: 'pulse 3s infinite',
                  '@keyframes pulse': {
                    '0%': {
                      transform: 'scale(1)',
                      boxShadow: '0 20px 40px rgba(111, 226, 180, 0.25)',
                    },
                    '50%': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 25px 50px rgba(111, 226, 180, 0.3)',
                    },
                    '100%': {
                      transform: 'scale(1)',
                      boxShadow: '0 20px 40px rgba(111, 226, 180, 0.25)',
                    },
                  },
                }}
              >
                <ShieldCheck 
                  size={isMobile ? 100 : 180} 
                  color="#FFFFFF" 
                />
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: { xs: '220px', sm: '280px', md: '400px' },
                  height: { xs: '220px', sm: '280px', md: '400px' },
                  borderRadius: '50%',
                  border: '2px dashed #6fe2b4',
                  animation: 'spin 20s linear infinite',
                  '@keyframes spin': {
                    '0%': {
                      transform: 'translate(-50%, -50%) rotate(0deg)',
                    },
                    '100%': {
                      transform: 'translate(-50%, -50%) rotate(360deg)',
                    },
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;