import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  SelectChangeEvent,
  Alert,
  Snackbar,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Send, Mail } from 'lucide-react';

const ContactForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formState.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formState.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    }
    
    if (!formState.company.trim()) {
      newErrors.company = 'Nome da empresa é obrigatório';
    }
    
    if (!formState.interest) {
      newErrors.interest = 'Selecione seu interesse';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    
    if (errors[name as string]) {
      setErrors({
        ...errors,
        [name as string]: '',
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      setSubmitError(null);
      
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbxVaIQ2Kt4o3qbRCdigF_9fhBIakE3jBj6dDbkpl6hTbKrEu_a2C6n6BRiXpVESBQzs/exec', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formState,
            timestamp: new Date().toISOString(),
          }),
        });

        setSubmitted(true);
        setOpenSnackbar(true);
        setFormState({
          name: '',
          email: '',
          phone: '',
          company: '',
          interest: '',
          message: '',
        });
      } catch (error) {
        console.error("Erro ao enviar para Google Sheets:", error);
        setSubmitError('Falha ao enviar o formulário. Por favor, tente novamente.');
        setOpenSnackbar(true);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 6, md: 12 },
        bgcolor: 'background.paper',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={5}>
            <Box sx={{ pr: { md: 4 }, textAlign: { xs: 'center', md: 'left' } }}>
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
                Fale Conosco
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: 'primary.main',
                  fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
                }}
              >
                Quer saber mais?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                  lineHeight: 1.7,
                }}
              >
                Entre em contato conosco e descubra como o TrustPanel pode ajudar 
                sua empresa a gerenciar certificados digitais de forma segura e eficiente.
              </Typography>

              <Box sx={{ mt: 6 }}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  mb: 4,
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: { xs: 'center', md: 'flex-start' },
                }}>
                  <Box
                    sx={{
                      mr: { xs: 0, sm: 3 },
                      mb: { xs: 2, sm: 0 },
                      bgcolor: 'rgba(111, 226, 180, 0.1)',
                      borderRadius: '50%',
                      width: 48,
                      height: 48,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Mail color="#6fe2b4" size={24} />
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Email
                    </Typography>
                    <Typography variant="body1" fontWeight={500}>
                      comercial@trustpannel.com.br
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Paper
              elevation={4}
              sx={{
                p: { xs: 2, sm: 3, md: 5 },
                borderRadius: 4,
                bgcolor: 'white',
              }}
            >
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Nome Completo *"
                      variant="outlined"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      error={Boolean(errors.name)}
                      helperText={errors.name || ''}
                      size={isMobile ? "small" : "medium"}
                      disabled={isSubmitting}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email Corporativo *"
                      variant="outlined"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      error={Boolean(errors.email)}
                      helperText={errors.email || ''}
                      size={isMobile ? "small" : "medium"}
                      disabled={isSubmitting}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Telefone *"
                      variant="outlined"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      error={Boolean(errors.phone)}
                      helperText={errors.phone || ''}
                      size={isMobile ? "small" : "medium"}
                      disabled={isSubmitting}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Empresa *"
                      variant="outlined"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      error={Boolean(errors.company)}
                      helperText={errors.company || ''}
                      size={isMobile ? "small" : "medium"}
                      disabled={isSubmitting}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl 
                      fullWidth 
                      error={Boolean(errors.interest)}
                      size={isMobile ? "small" : "medium"}
                    >
                      <InputLabel id="interest-label">Interesse *</InputLabel>
                      <Select
                        labelId="interest-label"
                        id="interest"
                        name="interest"
                        value={formState.interest}
                        label="Interesse *"
                        onChange={handleSelectChange}
                        disabled={isSubmitting}
                      >
                        <MenuItem value="Plano Básico">Plano Básico (0-50 certificados)</MenuItem>
                        <MenuItem value="Plano Profissional">Plano Profissional (50-200 certificados)</MenuItem>
                        <MenuItem value="Plano Empresarial">Plano Empresarial (200+ certificados)</MenuItem>
                        <MenuItem value="Solução Personalizada">Solução Personalizada</MenuItem>
                        <MenuItem value="Apenas Informações">Apenas Informações</MenuItem>
                      </Select>
                      {errors.interest && <FormHelperText>{errors.interest}</FormHelperText>}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Mensagem *"
                      variant="outlined"
                      name="message"
                      multiline
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      error={Boolean(errors.message)}
                      helperText={errors.message || ''}
                      size={isMobile ? "small" : "medium"}
                      disabled={isSubmitting}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      size={isMobile ? "medium" : "large"}
                      endIcon={<Send />}
                      fullWidth={isMobile}
                      disabled={isSubmitting}
                      sx={{
                        py: { xs: 1.25, md: 1.5 },
                        px: { xs: 3, md: 4 },
                        fontWeight: 600,
                        fontSize: { xs: '0.9rem', md: '1rem' },
                      }}
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={submitError ? "error" : "success"}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {submitError || 'Mensagem enviada com sucesso! Entraremos em contato em breve.'}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactForm;