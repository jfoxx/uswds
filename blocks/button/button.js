/**
 * button block
 * Based on USWDS usa-button component
 *
 * @see https://designsystem.digital.gov/components/button/
 */

import button from '/libs/uswds/usa-button.js';

export default function decorate(block) {
  // Initialize USWDS component
  button.on(block);

  // Optional: Add EDS-specific enhancements here

  // Return cleanup function
  return () => {
    button.off(block);
  };
}
