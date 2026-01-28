/**
 * in-page-nav block
 * Based on USWDS usa-in-page-navigation component
 * 
 * @see https://designsystem.digital.gov/components/in-page-navigation/
 */

import inPageNavigation from '@uswds/uswds/js/usa-in-page-navigation';

export default function decorate(block) {
  // Initialize USWDS component
  inPageNavigation.on(block);
  
  // Optional: Add EDS-specific enhancements here
  
  // Return cleanup function
  return () => {
    inPageNavigation.off(block);
  };
}
