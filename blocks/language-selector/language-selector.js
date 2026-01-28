/**
 * language-selector block
 * Based on USWDS usa-language-selector component
 *
 * @see https://designsystem.digital.gov/components/language-selector/
 */

import languageSelector from '/libs/uswds/usa-language-selector.js';

export default function decorate(block) {
  // Initialize USWDS component
  languageSelector.on(block);

  // Optional: Add EDS-specific enhancements here

  // Return cleanup function
  return () => {
    languageSelector.off(block);
  };
}
