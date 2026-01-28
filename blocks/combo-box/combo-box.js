/**
 * combo-box block
 * Based on USWDS usa-combo-box component
 * 
 * @see https://designsystem.digital.gov/components/combo-box/
 */

import comboBox from '@uswds/uswds/js/usa-combo-box';

export default function decorate(block) {
  // Initialize USWDS component
  comboBox.on(block);
  
  // Optional: Add EDS-specific enhancements here
  
  // Return cleanup function
  return () => {
    comboBox.off(block);
  };
}
