/**
 * footer block
 * Based on USWDS usa-footer component (CSS-only)
 *
 * @see https://designsystem.digital.gov/components/footer/
 */

import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // Load footer content as fragment from /nav/footer
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/nav/footer';
  const fragment = await loadFragment(footerPath);

  // Clear block and add fragment content
  block.textContent = '';
  if (fragment) {
    while (fragment.firstElementChild) {
      block.append(fragment.firstElementChild);
    }
  }

  // USWDS footer uses CSS for styling
  // JavaScript interactions can be added here as needed for EDS
}
