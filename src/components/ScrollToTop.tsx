import React, { useState, useEffect } from 'react';
import { Fab, Zoom, useScrollTrigger } from '@mui/material';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 300,
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={trigger}>
      <Fab
        color="secondary"
        size="medium"
        aria-label="scroll back to top"
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 999,
          boxShadow: '0 4px 12px rgba(74, 144, 226, 0.25)',
        }}
      >
        <ArrowUp size={20} />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;