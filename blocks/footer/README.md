# Footer Block

USWDS footer component with support for three size variants: Big, Medium, and Slim.

Based on: [USWDS Footer Component](https://designsystem.digital.gov/components/footer/)

## Auto-Block Behavior

The footer is automatically loaded on every page. The content is fetched from `/nav/footer` (or the path specified in page metadata).

## Variant Selection

Set the footer variant using page metadata:

```
---
Footer: big
---
```

Or:

```
---
Footer: medium
---
```

Or:

```
---
Footer: slim
---
```

**Default**: If no metadata is specified, the footer uses the **medium** variant.

## Content Structure by Variant

### Big Footer

Use for complex navigation with newsletter signup.

**Content Structure (5 sections in `/nav/footer`):**

1. **Navigation Topics** - Multi-column navigation with topics and secondary links
2. **Newsletter Signup** - Heading for signup form
3. **Logo** - Agency logo image and name
4. **Social Links** - Social media links
5. **Contact Info** - Contact heading and phone/email links

**Example:**

```
Section 1 - Navigation:
- Topic 1
  - [Secondary link](#)
  - [Secondary link](#)
  - [Secondary link](#)
- Topic 2
  - [Secondary link](#)
  - [Secondary link](#)

Section 2 - Newsletter:
### Sign up

Section 3 - Logo:
![Logo](logo.png)
Agency Name

Section 4 - Social:
[Facebook](#)
[Twitter](#)
[YouTube](#)
[Instagram](#)
[RSS](#)

Section 5 - Contact:
### Agency Contact Center
[(800) 555-GOVT](tel:1-800-555-5555)
[info@agency.gov](mailto:info@agency.gov)
```

### Medium Footer (Default)

Use for simple footer with social links and contact info.

**Content Structure (4 sections):**

1. **Primary Links** - Simple list of links
2. **Logo** - Agency logo and name
3. **Social Links** - Social media links
4. **Contact Info** - Contact heading and phone/email

**Example:**

```
Section 1 - Primary Links:
[Primary link](#)
[Primary link](#)
[Primary link](#)
[Primary link](#)

Section 2 - Logo:
![Logo](logo.png)
Agency Name

Section 3 - Social:
[Facebook](#)
[Twitter](#)
[YouTube](#)

Section 4 - Contact:
### Agency Contact Center
[(800) 555-GOVT](tel:1-800-555-5555)
[info@agency.gov](mailto:info@agency.gov)
```

### Slim Footer

Use for minimal footer with just a few links and contact info.

**Content Structure (2 sections):**

1. **Primary Links** - Few essential links
2. **Logo/Contact** - Agency name and contact links

**Example:**

```
Section 1 - Primary Links:
[Primary link](#)
[Primary link](#)
[Primary link](#)
[Primary link](#)

Section 2 - Logo/Contact:
![Logo](logo.png)
Agency Contact Center
```

## Features

### All Variants Include:
- "Return to top" link
- Responsive layout
- USWDS accessibility standards
- Proper semantic HTML

### Big Footer Includes:
- Multi-column navigation (up to 4 topics)
- Collapsible navigation on mobile
- Newsletter email signup form
- Social media icons
- Full contact information

### Medium Footer Includes:
- Single-row primary links
- Social media icons
- Full contact information
- Logo and agency name

### Slim Footer Includes:
- Simple primary links
- Minimal contact information
- Logo and agency name
- No social media links

## CSS Classes Applied

### Common:
- `.usa-footer` - Main footer element
- `.usa-footer__return-to-top` - Return to top link container
- `.usa-footer__primary-section` - Primary navigation area
- `.usa-footer__secondary-section` - Logo and contact area

### Big Footer Specific:
- `.usa-footer--big` - Big footer modifier
- `.usa-footer__nav` - Navigation wrapper
- `.usa-footer__primary-content--collapsible` - Collapsible nav topics
- `.usa-sign-up` - Newsletter signup container

### Slim Footer Specific:
- `.usa-footer--slim` - Slim footer modifier
- `.usa-footer__primary-container` - Container for slim layout

## JavaScript Interactions

USWDS JavaScript automatically handles:
- Mobile navigation accordion (big footer only)
- Responsive layout adjustments
- Newsletter form interactions

## Customization

The footer content is fetched from `/nav/footer` by default. To use a different path, set metadata:

```
---
Footer Nav: /custom/footer
---
```
