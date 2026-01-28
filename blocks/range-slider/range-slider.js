/**
 * range-slider block
 * Based on USWDS usa-range component
 *
 * @see https://designsystem.digital.gov/components/range/
 */

import range from '@uswds/uswds/js/usa-range';

export default function decorate(block) {
  // Initialize USWDS component
  range.on(block);

  // Optional: Add EDS-specific enhancements here

  // Return cleanup function
  return () => {
    range.off(block);
  };
}
