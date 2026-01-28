/**
 * character-count block
 * Based on USWDS usa-character-count component
 * 
 * @see https://designsystem.digital.gov/components/character-count/
 */

import characterCount from '@uswds/uswds/js/usa-character-count';

export default function decorate(block) {
  // Initialize USWDS component
  characterCount.on(block);
  
  // Optional: Add EDS-specific enhancements here
  
  // Return cleanup function
  return () => {
    characterCount.off(block);
  };
}
