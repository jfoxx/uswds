/**
 * time-picker block
 * Based on USWDS usa-time-picker component
 *
 * @see https://designsystem.digital.gov/components/time-picker/
 */

import timePicker from '/libs/uswds/usa-time-picker.js';

export default function decorate(block) {
  // Initialize USWDS component
  timePicker.on(block);

  // Optional: Add EDS-specific enhancements here

  // Return cleanup function
  return () => {
    timePicker.off(block);
  };
}
