/**
 * header block
 * Based on USWDS usa-header component
 *
 * @see https://designsystem.digital.gov/components/header/
 */

import { getMetadata, decorateBlock, loadBlock } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * Decorates the nav content into USWDS structure
 * @param {Element} header The header block element
 * @param {Element} fragment The loaded fragment
 */
async function decorateNav(header, fragment) {
  // eslint-disable-next-line no-console
  console.log('Fragment sections:', fragment.querySelectorAll(':scope > div').length, fragment.querySelectorAll(':scope > div'));

  const sections = fragment.querySelectorAll(':scope > div');
  const [brandSection, navSection, toolsSection] = sections;
  // eslint-disable-next-line no-console
  console.log('Brand:', brandSection, 'Nav:', navSection, 'Tools:', toolsSection);

  // Apply header variant from metadata
  const variant = getMetadata('header-variant') || 'basic';
  const usaHeader = document.createElement('header');
  usaHeader.className = `usa-header usa-header--${variant}`;

  // Create nav-container wrapper (for basic/megamenu variants)
  let navContainer;
  if (variant === 'basic' || variant === 'megamenu') {
    navContainer = document.createElement('div');
    navContainer.className = 'usa-nav-container';
  }

  // Create navbar (logo/brand section)
  const navbar = document.createElement('div');
  navbar.className = 'usa-navbar';

  if (brandSection) {
    const logoDiv = document.createElement('div');
    logoDiv.className = 'usa-logo';
    const brandContent = brandSection.querySelector('a, p, picture, img');
    if (brandContent) {
      if (brandContent.tagName === 'A') {
        const logoLink = document.createElement('a');
        logoLink.href = brandContent.href;
        logoLink.className = 'usa-logo__text';
        logoLink.textContent = brandContent.textContent;
        logoDiv.appendChild(logoLink);
      } else if (brandContent.tagName === 'PICTURE' || brandContent.tagName === 'IMG') {
        const logoLink = document.createElement('a');
        logoLink.href = '/';
        logoLink.appendChild(brandContent.cloneNode(true));
        logoDiv.appendChild(logoLink);
      } else {
        const logoLink = document.createElement('a');
        logoLink.href = '/';
        logoLink.className = 'usa-logo__text';
        logoLink.textContent = brandContent.textContent;
        logoDiv.appendChild(logoLink);
      }
    }
    navbar.appendChild(logoDiv);
  }

  // Create mobile menu button
  const menuBtn = document.createElement('button');
  menuBtn.type = 'button';
  menuBtn.className = 'usa-menu-btn';
  menuBtn.textContent = 'Menu';
  navbar.appendChild(menuBtn);

  // Create nav container
  const nav = document.createElement('nav');
  nav.className = 'usa-nav';

  // Create close button for mobile
  const closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.className = 'usa-nav__close';
  const closeImg = document.createElement('img');
  closeImg.src = '/icons/usa-icons/close.svg';
  closeImg.alt = 'Close';
  closeBtn.appendChild(closeImg);

  nav.appendChild(closeBtn);

  // Create primary navigation
  const primaryNav = document.createElement('ul');
  primaryNav.className = 'usa-nav__primary usa-accordion';

  if (navSection) {
    const navList = navSection.querySelector('ul');
    if (navList) {
      const navItems = navList.querySelectorAll(':scope > li');
      navItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'usa-nav__primary-item';

        // Check if item has submenu (nested ul) or is a simple link
        const submenu = item.querySelector('ul');
        const link = item.querySelector(':scope > p > a');

        if (submenu && !link) {
          // This is an accordion item with submenu
          const title = item.querySelector(':scope > p');
          const button = document.createElement('button');
          button.type = 'button';
          button.className = 'usa-accordion__button usa-nav__link';
          button.setAttribute('aria-expanded', 'false');
          button.setAttribute('aria-controls', `nav-section-${index}`);

          const span = document.createElement('span');
          span.textContent = title ? title.textContent : 'Section';
          button.appendChild(span);

          const submenuUl = document.createElement('ul');
          submenuUl.id = `nav-section-${index}`;
          submenuUl.className = 'usa-nav__submenu';
          submenuUl.setAttribute('hidden', '');

          const submenuItems = submenu.querySelectorAll(':scope > li');
          submenuItems.forEach((subitem) => {
            const subLi = document.createElement('li');
            subLi.className = 'usa-nav__submenu-item';
            const subLink = subitem.querySelector('a');
            if (subLink) {
              const newLink = document.createElement('a');
              newLink.href = subLink.href;
              const linkSpan = document.createElement('span');
              linkSpan.textContent = subLink.textContent;
              newLink.appendChild(linkSpan);
              subLi.appendChild(newLink);
            }
            submenuUl.appendChild(subLi);
          });

          li.appendChild(button);
          li.appendChild(submenuUl);

          // Note: USWDS JavaScript handles accordion interactions automatically
        } else if (link) {
          // Simple link item
          const navLink = document.createElement('a');
          navLink.href = link.href;
          navLink.className = 'usa-nav__link';
          const linkSpan = document.createElement('span');
          linkSpan.textContent = link.textContent;
          navLink.appendChild(linkSpan);
          li.appendChild(navLink);
        }

        primaryNav.appendChild(li);
      });
    }
  }

  nav.appendChild(primaryNav);

  // Add search block if present in tools section
  if (toolsSection) {
    // eslint-disable-next-line no-console
    console.log('Tools section found:', toolsSection);
    const searchBlock = toolsSection.querySelector('.search');
    // eslint-disable-next-line no-console
    console.log('Search block found:', searchBlock);
    if (searchBlock) {
      // Decorate and load the search block
      decorateBlock(searchBlock);
      // eslint-disable-next-line no-console
      console.log('Search block after decorateBlock:', searchBlock);
      await loadBlock(searchBlock);
      // eslint-disable-next-line no-console
      console.log('Search block after loadBlock:', searchBlock);

      // Wrap search in a section with aria-label
      const searchSection = document.createElement('section');
      searchSection.setAttribute('aria-label', 'Search component');
      searchSection.appendChild(searchBlock);
      nav.appendChild(searchSection);
      // eslint-disable-next-line no-console
      console.log('Search section appended to nav');
    } else {
      // eslint-disable-next-line no-console
      console.warn('No search block found in tools section');
    }
  } else {
    // eslint-disable-next-line no-console
    console.warn('No tools section found');
  }

  // Note: USWDS JavaScript handles all menu interactions automatically
  // including: mobile menu toggle, accordion dropdowns, click-outside,
  // escape key, and keyboard navigation

  // Assemble header structure (with or without container wrapper)
  if (navContainer) {
    // Basic/megamenu variants use nav-container wrapper
    navContainer.appendChild(navbar);
    navContainer.appendChild(nav);
    usaHeader.appendChild(navContainer);
  } else {
    // Extended variant adds navbar and nav directly to header
    usaHeader.appendChild(navbar);
    usaHeader.appendChild(nav);
  }

  header.appendChild(usaHeader);
}

/**
 * Decorates the header block
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  // Load the nav content from fragment
  const navPath = getMetadata('nav') || '/nav/header';
  const fragment = await loadFragment(navPath);

  // Decorate the fragment into USWDS structure
  await decorateNav(block, fragment);
}
