/**
 * validation block
 * Based on USWDS usa-validation component
 *
 * @see https://designsystem.digital.gov/components/validation/
 */

import validation from '/libs/uswds/usa-validation.js';

export default function decorate(block) {
  // Initialize USWDS component
  validation.on(block);

  // Optional: Add EDS-specific enhancements here

  // Return cleanup function
  return () => {
    validation.off(block);
  };
}
