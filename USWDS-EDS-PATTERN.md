# USWDS + EDS Integration Pattern

This project combines the U.S. Web Design System (USWDS) with Adobe Edge Delivery Services (EDS) using a content-driven development pattern.

## Architecture Overview

### Build-Time: CSS Generation Only

The `npm run build:uswds` command:
- ✅ **Generates CSS** - Compiles USWDS Sass into block-specific CSS files
- ✅ **Copies Assets** - Fonts, icons, and images to root-level directories
- ❌ **Does NOT generate JavaScript** - All block JS is custom and protected

### Runtime: EDS Content Decoration

Each block follows the EDS pattern:
1. **Simple Content** - Authors create basic HTML (headings, lists, links)
2. **Auto-blocking** - EDS automatically wraps content in `.block` divs
3. **Custom Decoration** - Block JS transforms simple content into USWDS HTML

## Block Structure

Every USWDS block has three files:

```
blocks/{block-name}/
├── {block-name}.css    # Generated from USWDS Sass
├── {block-name}.js     # Custom EDS decorator (PROTECTED)
└── README.md          # Generated documentation
```

### CSS Files (Generated)
- Compiled from USWDS Sass packages
- Uses USWDS design tokens and theme settings
- Contains responsive styles, accessibility features, etc.
- **Safe to regenerate** - Run `npm run build:uswds` anytime

### JavaScript Files (Custom, Protected)
- Custom `decorate(block)` functions
- Transform simple content into USWDS HTML structure
- **NEVER regenerated** - Protected by `.buildignore`
- Must be written manually for each block

### README Files (Generated)
- Documentation from USWDS component metadata
- Can be customized after generation
- May be overwritten on rebuild

## Protection Mechanism

The `.buildignore` file protects all block JavaScript:

```
# Protect ALL block JS files from regeneration
blocks/**/*.js
```

The build script checks this pattern and skips JS generation:

```
Skipping accordion.js (protected by .buildignore)
Skipping cards.js (protected by .buildignore)
...
```

## Development Workflow

### 1. Initial Setup (One Time)
```bash
npm install
npm run build:uswds
```

### 2. Update USWDS Styles
When USWDS releases updates or you change theme settings:
```bash
npm run build:uswds
```
This regenerates CSS only, all custom JS is safe.

### 3. Create a New Block

#### Option A: Start with Stub (Recommended for New Blocks)
```bash
# Temporarily remove .buildignore protection
echo "# Temporarily allow JS generation" > .buildignore

# Generate the block
npm run build:uswds -- --component {block-name}

# Restore protection
git checkout .buildignore

# Now customize the JS file
```

#### Option B: Manual Creation (Recommended for Experienced Developers)
```bash
# Generate CSS only (JS is already protected)
npm run build:uswds -- --component {block-name}

# Manually create custom decorator
cat > blocks/{block-name}/{block-name}.js << 'EOF'
export default function decorate(block) {
  // Transform simple content into USWDS HTML
}
EOF
```

### 4. Implement Block Decorator

Each block's `decorate(block)` function should:

1. **Read simple content structure** from the block element
2. **Clear the block** - `block.textContent = ''`
3. **Create USWDS HTML** with proper classes and ARIA attributes
4. **Append to block** - `block.appendChild(...)`
5. **Add interactivity** - Event listeners, state management, etc.

#### Example: Search Block

**Simple Content (authored):**
```html
<div class="search block">
  <!-- Empty or minimal content -->
</div>
```

**Decorator (JavaScript):**
```javascript
export default function decorate(block) {
  block.textContent = '';
  
  const form = document.createElement('form');
  form.className = 'usa-search usa-search--small';
  form.setAttribute('role', 'search');
  
  // ... create label, input, button with USWDS classes
  
  block.appendChild(form);
}
```

**Result (rendered):**
```html
<div class="search block">
  <form class="usa-search usa-search--small" role="search">
    <label class="usa-sr-only" for="search-field-small">Search</label>
    <input class="usa-input" id="search-field-small" type="search" name="search">
    <button class="usa-button" type="submit">
      <img src="/icons/usa-icons-bg/search--white.svg" class="usa-search__submit-icon" alt="Search">
    </button>
  </form>
</div>
```

#### Example: Header Block

**Simple Content (authored at `/nav/header`):**
```html
<div>Logo Image</div>
<div>
  <ul>
    <li>
      <p>Section</p>
      <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
      </ul>
    </li>
    <li><p><a href="#">Simple Link</a></p></li>
  </ul>
</div>
<div class="search"></div>
```

**Decorator (JavaScript):**
```javascript
import { loadFragment, decorateBlock, loadBlock } from '../../scripts/aem.js';

export default async function decorate(block) {
  // Load content fragment
  const fragment = await loadFragment('/nav/header');
  
  // Parse sections (logo, nav, search)
  const sections = fragment.querySelectorAll(':scope > div');
  const [brandSection, navSection, toolsSection] = sections;
  
  // Transform into USWDS header structure
  const header = document.createElement('header');
  header.className = 'usa-header usa-header--basic';
  
  // Create navbar with logo
  const navbar = document.createElement('div');
  navbar.className = 'usa-navbar';
  // ... build logo from brandSection
  
  // Create nav with menu
  const nav = document.createElement('nav');
  nav.className = 'usa-nav';
  
  // Transform simple list into USWDS accordion navigation
  const primaryNav = document.createElement('ul');
  primaryNav.className = 'usa-nav__primary usa-accordion';
  
  navSection.querySelectorAll('ul > li').forEach((item) => {
    // If has submenu -> button + accordion
    // If simple link -> just link
  });
  
  // Decorate and load search block
  const searchBlock = toolsSection.querySelector('.search');
  decorateBlock(searchBlock);
  await loadBlock(searchBlock);
  
  // ... assemble and append
  block.appendChild(header);
}
```

## Key Principles

1. **Content-Driven** - Authors work with simple, semantic HTML
2. **JavaScript Decoration** - Blocks transform content at runtime
3. **CSS from USWDS** - Styles compiled from official design system
4. **No Build Dependencies** - Blocks work directly in browser (ESM)
5. **Protected Customizations** - `.buildignore` prevents accidental overwrites
6. **Progressive Enhancement** - Content works without JS, enhanced with JS

## When to Rebuild

### ✅ Run `npm run build:uswds` When:
- Updating USWDS package version
- Changing theme settings in `uswds.config.js`
- Adding new components to `componentMap`
- Modifying Sass variables or theme tokens
- Need to regenerate CSS for all blocks

### ❌ Don't Rebuild If:
- Only changing JavaScript behavior
- Adding interactivity to blocks
- Fixing bugs in decorators
- Working on content transformation logic

## Common Patterns

### Loading Fragments
```javascript
import { loadFragment } from '../../scripts/aem.js';

const fragment = await loadFragment('/path/to/content');
```

### Nested Blocks
```javascript
import { decorateBlock, loadBlock } from '../../scripts/aem.js';

const nestedBlock = container.querySelector('.block-name');
decorateBlock(nestedBlock);
await loadBlock(nestedBlock);
```

### Reading Metadata
```javascript
import { getMetadata } from '../../scripts/aem.js';

const variant = getMetadata('header-variant') || 'basic';
header.className = `usa-header usa-header--${variant}`;
```

### ARIA and Accessibility
```javascript
// Always include proper ARIA attributes
button.setAttribute('aria-expanded', 'false');
button.setAttribute('aria-controls', `submenu-${id}`);
submenu.id = `submenu-${id}`;
submenu.setAttribute('aria-hidden', 'true');
```

## Troubleshooting

### Block not styling correctly
- Check browser console for CSS 404s
- Verify USWDS classes are applied correctly
- Run `npm run build:uswds` to regenerate CSS
- Hard refresh browser (Cmd+Shift+R) to clear cache

### Block JavaScript not running
- Check browser console for JS errors
- Verify `export default function decorate(block)` signature
- Ensure block is properly auto-blocked by EDS
- Check that block CSS/JS files exist

### Build overwrote custom JS
- Verify `.buildignore` contains `blocks/**/*.js`
- Check build output for "Skipping {block}.js" messages
- Restore from git: `git checkout blocks/{block}/{block}.js`

## Resources

- [USWDS Documentation](https://designsystem.digital.gov/)
- [USWDS Component Library](https://designsystem.digital.gov/components/)
- [EDS Block Development](https://www.aem.live/developer/block-collection)
- [EDS Anatomy of a Block](https://www.aem.live/developer/anatomy-of-a-block)
