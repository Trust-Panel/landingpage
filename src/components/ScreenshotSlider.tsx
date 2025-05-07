import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  useTheme, 
  useMediaQuery,
  Paper,
  Grid,
  Button
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { screenshots } from '../data/screenshots';

const ScreenshotSlider = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState<any>(null);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };

  const goToSlide = (index: number) => {
    if (swiper) {
      swiper.slideTo(index);
    }
  };

  return (
    <Box
      id="screenshots"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
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
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234A90E2' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
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
            Interface Intuitiva
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
            Conheça o TrustPanel
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
              mb: 6,
              fontSize: '1.1rem',
              lineHeight: 1.7,
            }}
          >
            Veja como nossa plataforma simplifica a gestão de certificados digitais
            com uma interface moderna e recursos avançados.
          </Typography>
        </Box>
        
        <Box sx={{ position: 'relative' }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            onSlideChange={handleSlideChange}
            onSwiper={setSwiper}
            style={{ 
              paddingBottom: '60px',
              paddingTop: '20px',
            }}
          >
            {screenshots.map((screenshot) => (
              <SwiperSlide key={screenshot.id}>
                <Paper 
                  elevation={8}
                  sx={{
                    borderRadius: 4,
                    overflow: 'hidden',
                    border: '1px solid rgba(0,0,0,0.1)',
                  }}
                >
                  <Box
                    component="img"
                    src={screenshot.image}
                    alt={screenshot.title}
                    sx={{
                      width: '100%',
                      height: { xs: '250px', sm: '350px', md: '500px' },
                      objectFit: 'cover',
                    }}
                  />
                </Paper>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom navigation buttons */}
          <Button 
            className="swiper-button-prev" 
            sx={{
              position: 'absolute',
              top: '50%',
              left: { xs: '5px', md: '15px' },
              zIndex: 10,
              transform: 'translateY(-50%)',
              minWidth: '32px',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'white',
              color: 'primary.main',
              boxShadow: 2,
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.9)',
              },
              display: { xs: 'none', sm: 'flex' },
              padding: 0,
            }}
          >
            <ChevronLeft size={20} />
          </Button>
          <Button 
            className="swiper-button-next" 
            sx={{
              position: 'absolute',
              top: '50%',
              right: { xs: '5px', md: '15px' },
              zIndex: 10,
              transform: 'translateY(-50%)',
              minWidth: '32px',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'white',
              color: 'primary.main',
              boxShadow: 2,
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.9)',
              },
              display: { xs: 'none', sm: 'flex' },
              padding: 0,
            }}
          >
            <ChevronRight size={20} />
          </Button>
        </Box>
        
        <Box sx={{ mt: 6 }}>
          <Grid container spacing={4}>
            {screenshots.map((screenshot, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Box 
                  sx={{ 
                    cursor: 'pointer',
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: activeIndex === idx ? 'rgba(74, 144, 226, 0.1)' : 'transparent',
                    border: activeIndex === idx ? '1px solid rgba(74, 144, 226, 0.3)' : '1px solid transparent',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(74, 144, 226, 0.05)',
                    },
                  }}
                  onClick={() => goToSlide(idx)}
                >
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600, 
                      color: activeIndex === idx ? 'secondary.main' : 'primary.main',
                      mb: 1,
                    }}
                  >
                    {screenshot.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ fontSize: '0.9rem' }}
                  >
                    {screenshot.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ScreenshotSlider;