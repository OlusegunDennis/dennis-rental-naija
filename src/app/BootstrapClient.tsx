'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    bootstrap: {
      Tooltip: new (element: Element) => {
        dispose?: () => void;
      };
    };
  }
}

export default function BootstrapClient() {
  useEffect(() => {
    if (window.bootstrap && window.bootstrap.Tooltip) {
      const tooltipTriggerList = Array.from(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
      );
      tooltipTriggerList.forEach((tooltipTriggerEl) => {
        new window.bootstrap.Tooltip(tooltipTriggerEl);
      });
    } else {
      console.warn('Bootstrap JS not loaded or Tooltip not available');
    }

    // Optional cleanup: not strictly needed
    // return () => {
    //   tooltipTriggerList.forEach(tooltip => tooltip.dispose());
    // };
  }, []);

  return null;
}