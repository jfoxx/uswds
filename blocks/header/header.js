/**
 * header block
 * Based on USWDS usa-header component
 * 
 * @see https://designsystem.digital.gov/components/header/
 */

import header from '@uswds/uswds/js/usa-header';

export default function decorate(block) {
  // Initialize USWDS component
  header.on(block);
  
  // Optional: Add EDS-specific enhancements here
  
  // Return cleanup function
  return () => {
    header.off(block);
  };
}
