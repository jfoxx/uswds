/**
 * combo-box block
 * Based on USWDS usa-combo-box component
 *
 * @see https://designsystem.digital.gov/components/combo-box/
 */

import comboBox from '/libs/uswds/usa-combo-box.js';

export default function decorate(block) {
  // Initialize USWDS component
  comboBox.on(block);

  // Optional: Add EDS-specific enhancements here

  // Return cleanup function
  return () => {
    comboBox.off(block);
  };
}
