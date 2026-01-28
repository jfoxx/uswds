/**
 * accordion block
 * Based on USWDS usa-accordion component
 *
 * @see https://designsystem.digital.gov/components/accordion/
 */

import accordion from '@uswds/uswds/js/usa-accordion';

export default function decorate(block) {
  // Initialize USWDS component
  accordion.on(block);

  // Optional: Add EDS-specific enhancements here

  // Return cleanup function
  return () => {
    accordion.off(block);
  };
}
