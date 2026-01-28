/**
 * time-picker block
 * Based on USWDS usa-time-picker component
 *
 * @see https://designsystem.digital.gov/components/time-picker/
 */

import timePicker from '@uswds/uswds/js/usa-time-picker';

export default function decorate(block) {
  // Initialize USWDS component
  timePicker.on(block);

  // Optional: Add EDS-specific enhancements here

  // Return cleanup function
  return () => {
    timePicker.off(block);
  };
}
