/**
 * modal block
 * Based on USWDS usa-modal component
 *
 * @see https://designsystem.digital.gov/components/modal/
 */

import modal from '/libs/uswds/usa-modal.js';

export default function decorate(block) {
  // Initialize USWDS component
  modal.on(block);

  // Optional: Add EDS-specific enhancements here

  // Return cleanup function
  return () => {
    modal.off(block);
  };
}
