/**
 * validation block
 * Based on USWDS usa-validation component
 * 
 * @see https://designsystem.digital.gov/components/validation/
 */

import validation from '@uswds/uswds/js/usa-validation';

export default function decorate(block) {
  // Initialize USWDS component
  validation.on(block);
  
  // Optional: Add EDS-specific enhancements here
  
  // Return cleanup function
  return () => {
    validation.off(block);
  };
}
