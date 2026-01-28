/**
 * date-range-picker block
 * Based on USWDS usa-date-range-picker component
 * 
 * @see https://designsystem.digital.gov/components/date-range-picker/
 */

import dateRangePicker from '@uswds/uswds/js/usa-date-range-picker';

export default function decorate(block) {
  // Initialize USWDS component
  dateRangePicker.on(block);
  
  // Optional: Add EDS-specific enhancements here
  
  // Return cleanup function
  return () => {
    dateRangePicker.off(block);
  };
}
