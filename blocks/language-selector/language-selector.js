/**
 * language-selector block
 * Based on USWDS usa-language-selector component
 * 
 * @see https://designsystem.digital.gov/components/language-selector/
 */

import languageSelector from '@uswds/uswds/js/usa-language-selector';

export default function decorate(block) {
  // Initialize USWDS component
  languageSelector.on(block);
  
  // Optional: Add EDS-specific enhancements here
  
  // Return cleanup function
  return () => {
    languageSelector.off(block);
  };
}
