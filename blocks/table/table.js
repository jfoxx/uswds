/**
 * table block
 * Based on USWDS usa-table component
 *
 * @see https://designsystem.digital.gov/components/table/
 */

import table from '/libs/uswds/usa-table.js';

export default function decorate(block) {
  // Initialize USWDS component
  table.on(block);

  // Optional: Add EDS-specific enhancements here

  // Return cleanup function
  return () => {
    table.off(block);
  };
}
