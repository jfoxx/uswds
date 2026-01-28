/**
 * input-mask block
 * Based on USWDS usa-input-mask component
 * 
 * @see https://designsystem.digital.gov/components/input-mask/
 */

import inputMask from '@uswds/uswds/js/usa-input-mask';

export default function decorate(block) {
  // Initialize USWDS component
  inputMask.on(block);
  
  // Optional: Add EDS-specific enhancements here
  
  // Return cleanup function
  return () => {
    inputMask.off(block);
  };
}
