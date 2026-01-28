/**
 * tooltip block
 * Based on USWDS usa-tooltip component
 *
 * @see https://designsystem.digital.gov/components/tooltip/
 */

import tooltip from '/libs/uswds/usa-tooltip.js';

export default function decorate(block) {
  // Initialize USWDS component
  tooltip.on(block);

  // Optional: Add EDS-specific enhancements here

  // Return cleanup function
  return () => {
    tooltip.off(block);
  };
}
