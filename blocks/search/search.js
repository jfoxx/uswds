/**
 * search block
 * Based on USWDS usa-search component
 *
 * @see https://designsystem.digital.gov/components/search/
 */

import search from '/libs/uswds/usa-search.js';

export default function decorate(block) {
  // Initialize USWDS component
  search.on(block);

  // Optional: Add EDS-specific enhancements here

  // Return cleanup function
  return () => {
    search.off(block);
  };
}
