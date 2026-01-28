/**
 * banner block
 * Based on USWDS usa-banner component
 *
 * @see https://designsystem.digital.gov/components/banner/
 */

import banner from '/libs/uswds/usa-banner.js';

export default function decorate(block) {
  // Initialize USWDS component
  banner.on(block);

  // Optional: Add EDS-specific enhancements here

  // Return cleanup function
  return () => {
    banner.off(block);
  };
}
