import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Typography, 
  Button, 
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  Slide
} from '@mui/material';
import { Menu, X, ShieldCheck } from 'lucide-react';

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const navItems = [
  { name: 'Início', href: '#home' },
  { name: 'Recursos', href: '#features' },
  { name: 'Screenshots', href: '#screenshots' },
  { name: 'Preços', href: '#pricing' },
  { name: 'Contato', href: '#contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Typography variant="h6" sx={{ fontFamily: 'Montserrat', fontWeight: 700 }}>
          <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
            <ShieldCheck size={24} color="#4A90E2" />
            <Box component="span" sx={{ ml: 1 }}>TrustPanel</Box>
          </Box>
        </Typography>
        <IconButton 
          edge="start" 
          color="inherit" 
          aria-label="close-menu"
          onClick={handleDrawerToggle}
        >
          <X />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              onClick={() => scrollToSection(item.href)}
              sx={{ textAlign: 'center' }}
            >
              <ListItemText 
                primary={item.name} 
                primaryTypographyProps={{
                  fontFamily: 'Montserrat',
                  fontWeight: 600,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar 
          position="fixed" 
          elevation={scrolled ? 4 : 0}
          sx={{
            backgroundColor: scrolled ? 'primary.main' : 'transparent',
            transition: 'background-color 0.3s ease',
            boxShadow: scrolled ? 4 : 0,
          }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6" component="div" sx={{ 
                fontFamily: 'Montserrat', 
                fontWeight: 700,
                color: scrolled ? 'white' : 'primary.main',
                display: 'flex',
                alignItems: 'center'
              }}>
                <ShieldCheck size={28} color={scrolled ? '#FFFFFF' : '#1F2A44'} />
                <Box component="span" sx={{ ml: 1 }}>TrustPanel</Box>
              </Typography>
              
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                {navItems.map((item) => (
                  <Button 
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    sx={{ 
                      color: scrolled ? 'white' : 'primary.main',
                      ml: 2,
                      fontFamily: 'Montserrat',
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(31, 42, 68, 0.1)',
                      }
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>
              
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ 
                  display: { md: 'none' },
                  color: scrolled ? 'white' : 'primary.main',
                }}
              >
                <Menu />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar /> {/* Spacer for fixed AppBar */}
      
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;