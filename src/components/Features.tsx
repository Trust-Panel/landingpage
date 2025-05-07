import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  Divider,
} from '@mui/material';
import * as LucideIcons from 'lucide-react';
import { features } from '../data/features';

const Features = () => {
  // Function to dynamically get the icon from lucide-react
  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon size={42} color="#4A90E2" /> : null;
  };

  return (
    <Box
      id="features"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h6"
            component="p"
            sx={{
              color: 'secondary.main',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: 1,
              mb: 2,
            }}
          >
            Recursos Poderosos
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              color: 'primary.main',
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Tudo o que você precisa para gerenciar<br />
            seus certificados digitais
          </Typography>
          <Divider 
            sx={{ 
              width: '80px', 
              borderColor: 'secondary.main', 
              borderWidth: 3, 
              mx: 'auto',
              my: 3,
              borderRadius: 4
            }} 
          />
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              fontSize: '1.1rem',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.7,
            }}
          >
            O TrustPanel fornece uma plataforma completa para o gerenciamento seguro e 
            eficiente de certificados digitais, ajudando a eliminar riscos e automatizar 
            processos críticos.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  bgcolor: 'background.paper',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 25px rgba(0, 0, 0, 0.1)',
                  },
                }}
                elevation={2}
              >
                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                  <Box sx={{ mb: 3 }}>
                    {getIcon(feature.icon)}
                  </Box>
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    gutterBottom
                    sx={{ 
                      fontWeight: 600, 
                      mb: 2, 
                      color: 'primary.main',
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ 
                      lineHeight: 1.7,
                      fontSize: '0.95rem', 
                    }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;