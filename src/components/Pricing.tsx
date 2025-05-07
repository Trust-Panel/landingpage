import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Check, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { pricingPlans } from '../data/pricing';

const Pricing = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      id="pricing"
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
            Planos
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
            Escolha o plano ideal para o seu negócio
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
              fontSize: '1.1rem',
              lineHeight: 1.7,
            }}
          >
            Oferecemos diferentes planos para atender às necessidades específicas 
            do seu negócio, desde empresas iniciantes até grandes corporações.
          </Typography>
        </Box>

        <Grid 
          container 
          spacing={4} 
          alignItems="stretch"
          sx={{
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'center', sm: 'stretch' },
          }}
        >
          {pricingPlans.map((plan, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4} 
              key={index}
              sx={{
                width: { xs: '100%', sm: 'auto' },
                maxWidth: { xs: '400px', sm: 'none' },
              }}
            >
              <Card
                elevation={plan.highlighted ? 10 : 2}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'visible',
                  border: plan.highlighted ? `2px solid ${theme.palette.secondary.main}` : 'none',
                  transform: plan.highlighted ? { sm: 'scale(1.05)' } : 'none',
                  zIndex: plan.highlighted ? 2 : 1,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: plan.highlighted 
                      ? { xs: 'translateY(-8px) scale(1.05)', sm: 'translateY(-8px) scale(1.05)' }
                      : 'translateY(-8px)',
                  },
                }}
              >
                {plan.highlighted && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '-15px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      bgcolor: 'secondary.main',
                      color: 'white',
                      py: 0.5,
                      px: 2,
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    }}
                  >
                    Mais Popular
                  </Box>
                )}
                <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ mb: 4 }}>
                    <Typography 
                      variant="h4" 
                      component="div" 
                      gutterBottom 
                      sx={{ 
                        fontWeight: 700,
                        color: plan.highlighted ? 'secondary.main' : 'primary.main',
                      }}
                    >
                      {plan.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      sx={{ 
                        mb: 3,
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      {plan.description}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 1 }}>
                      <Typography 
                        variant="h3" 
                        component="span" 
                        sx={{ 
                          fontWeight: 700,
                          color: plan.highlighted ? 'secondary.main' : 'primary.main',
                        }}
                      >
                        R$ {plan.price.toFixed(2)}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        component="span" 
                        sx={{ ml: 1, color: 'text.secondary' }}
                      >
                        /mês
                      </Typography>
                    </Box>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'success.main',
                        fontWeight: 500,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 2,
                      }}
                    >
                      <CheckCircle2 size={16} style={{ marginRight: '4px' }} />
                      {plan.certificateRange}
                    </Typography>
                  </Box>

                  <Divider sx={{ my: 2 }} />

                  <List sx={{ mb: 4, flexGrow: 1 }}>
                    {plan.features.map((feature, idx) => (
                      <ListItem 
                        key={idx} 
                        sx={{ 
                          py: 1, 
                          px: 0,
                        }}
                      >
                        <ListItemIcon sx={{ minWidth: '30px' }}>
                          <Check size={18} color={theme.palette.secondary.main} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={feature} 
                          primaryTypographyProps={{ 
                            variant: 'body2',
                            fontWeight: 500,
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>

                  <Button
                    variant={plan.highlighted ? "contained" : "outlined"}
                    color={plan.highlighted ? "secondary" : "primary"}
                    size="large"
                    fullWidth
                    href="#contact"
                    sx={{
                      py: 1.5,
                      fontWeight: 600,
                      mt: 'auto',
                    }}
                    endIcon={<ArrowUpRight size={18} />}
                  >
                    {plan.ctaText}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Precisa de uma solução personalizada?
          </Typography>
          <Button
            variant="text"
            color="primary"
            size="large"
            href="#contact"
            sx={{
              fontWeight: 600,
              textDecoration: 'underline',
              '&:hover': {
                textDecoration: 'none',
              },
            }}
          >
            Entre em contato para um plano sob medida
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Pricing;