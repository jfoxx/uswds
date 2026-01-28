/**
 * file-input block
 * Based on USWDS usa-file-input component
 * 
 * @see https://designsystem.digital.gov/components/file-input/
 */

import fileInput from '@uswds/uswds/js/usa-file-input';

export default function decorate(block) {
  // Initialize USWDS component
  fileInput.on(block);
  
  // Optional: Add EDS-specific enhancements here
  
  // Return cleanup function
  return () => {
    fileInput.off(block);
  };
}
