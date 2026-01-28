/**
 * date-picker block
 * Based on USWDS usa-date-picker component
 *
 * @see https://designsystem.digital.gov/components/date-picker/
 */

import datePicker from '@uswds/uswds/js/usa-date-picker';

export default function decorate(block) {
  // Initialize USWDS component
  datePicker.on(block);

  // Optional: Add EDS-specific enhancements here

  // Return cleanup function
  return () => {
    datePicker.off(block);
  };
}
