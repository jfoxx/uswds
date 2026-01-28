/**
 * accordion block
 * Based on USWDS usa-accordion component
 *
 * @see https://designsystem.digital.gov/components/accordion/
 */

import accordion from '/libs/uswds/usa-accordion.js';

export default function decorate(block) {
  // Initialize USWDS component
  accordion.on(block);

  // Optional: Add EDS-specific enhancements here

  // Return cleanup function
  return () => {
    accordion.off(block);
  };
}
