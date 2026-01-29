# Header Block

USWDS header component with logo/branding, navigation, search, and mobile menu.

Based on: [USWDS Header Component](https://designsystem.digital.gov/components/header/)

## Auto-Block Behavior

The header is automatically loaded on every page. The content is fetched from `/nav/header` (or the path specified in page metadata).

## Variant Selection

Set the header variant using page metadata:

```
---
Header: basic
---
```

Or:

```
---
Header: extended
---
```

**Supported variants:**
- `basic` - Simple header with navigation
- `extended` - Header with secondary navigation and search
- `megamenu` - Header with mega menu support

**Default**: If no metadata is specified, the header uses the **basic** variant.

## Content Structure

The header expects content organized into 3 sections in `/nav/header`:

1. **Brand/Logo Section** - Optional logo image and/or site name
2. **Navigation Section** - Main navigation links
3. **Tools Section** - Search block (for extended variant)

### Logo/Brand Section (Section 1)

The brand section is **optional** and can contain:
- **Image only**: Displays as a logo image linked to `/`
- **Text only**: Displays as site name linked to `/`
- **Image + Text**: Displays image on the left, text on the right, both linked to `/`

**Example with logo and text:**
```markdown
![Agency Logo](/media/logo.png)

## Agency Name
```

**Example with text only:**
```markdown
## My Agency
```

### Navigation Section (Section 2)

Simple list of links for basic variant, or nested list with dropdowns for extended/megamenu variants.

**Basic variant example:**
```markdown
[Home](/)
[About](/about)
[Services](/services)
[Contact](/contact)
```

**Extended variant with dropdowns:**
```markdown
- [Products](/products)
  - [Product A](/products/a)
  - [Product B](/products/b)
- [Services](/services)
  - [Service 1](/services/1)
  - [Service 2](/services/2)
- [Contact](/contact)
```

### Tools Section (Section 3) - Extended Variant Only

For the extended variant, add a search block in the third section:

```markdown
Search
```

The search block will be automatically detected and integrated into the header's secondary navigation.

## Features

### All Variants Include:
- Optional logo/brand with image and/or text
- Responsive mobile menu
- USWDS accessibility standards
- Proper semantic HTML

### Extended Variant Includes:
- Secondary navigation area
- Integrated search component
- Accordion-style mobile menu

## CSS Classes Applied

### Common:
- `.usa-header` - Main header element
- `.usa-logo` - Logo/brand container
- `.usa-logo__img` - Logo image
- `.usa-logo__text` - Logo text/site name
- `.usa-navbar` - Navbar container
- `.usa-nav` - Navigation wrapper
- `.usa-nav__primary` - Primary navigation list

### Extended Variant:
- `.usa-header--extended` - Extended header modifier
- `.usa-nav__inner` - Inner container for extended nav
- `.usa-nav__secondary` - Secondary navigation area
- `.usa-nav__secondary-links` - Secondary links container

## JavaScript Interactions

USWDS JavaScript automatically handles:
- Mobile menu toggle
- Navigation accordion (extended variant)
- Dropdown menus
- Search integration

## Customization

The header content is fetched from `/nav/header` by default. To use a different path, set metadata:

```
---
Nav: /custom/header
---
```

## Related

- [USWDS Header](https://designsystem.digital.gov/components/header/)
- [USWDS Design Tokens](https://designsystem.digital.gov/design-tokens/)
