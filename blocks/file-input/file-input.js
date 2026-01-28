/**
 * file-input block
 * Based on USWDS usa-file-input component
 *
 * @see https://designsystem.digital.gov/components/file-input/
 */

import fileInput from '/libs/uswds/usa-file-input.js';

export default function decorate(block) {
  // Initialize USWDS component
  fileInput.on(block);

  // Optional: Add EDS-specific enhancements here

  // Return cleanup function
  return () => {
    fileInput.off(block);
  };
}
