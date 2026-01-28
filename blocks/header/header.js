/**
 * header block
 * Based on USWDS usa-header component (CSS-only)
 *
 * @see https://designsystem.digital.gov/components/header/
 */

import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the header
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  // Load nav content as fragment from /nav/header
  const navMeta = getMetadata('nav');
  const navPath = navMeta ? new URL(navMeta, window.location).pathname : '/nav/header';
  const fragment = await loadFragment(navPath);

  // Clear block and add fragment content
  block.textContent = '';
  if (fragment) {
    while (fragment.firstElementChild) {
      block.append(fragment.firstElementChild);
    }
  }

  // USWDS header uses CSS for styling
  // JavaScript interactions can be added here as needed for EDS
}
