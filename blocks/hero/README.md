# Hero Block

A USWDS hero component that displays a prominent call-to-action with an optional background image.

Based on: [USWDS Hero Component](https://designsystem.digital.gov/components/hero/)

## Content Structure

The hero block expects content in the following order:

### Option 1: With Background Image

| Hero |
|------|
| ![Alt text](image.jpg) |
| Hero callout:Bring attention to a project priority |
| Support the callout with some short explanatory text. You don't need more than a couple of sentences. |
| [Call to action](#) |

### Option 2: Without Background Image

| Hero |
|------|
| Hero callout:Bring attention to a project priority |
| Support the callout with some short explanatory text. You don't need more than a couple of sentences. |
| [Call to action](#) |

## Authoring Guidelines

### Heading
- Use the format `Hero callout:Main heading text` to create a heading with styled prefix
- Or just use normal heading text without the colon
- The text before the colon will be styled in white
- The text after the colon will be styled in accent color

### Description Text
- Keep to 1-2 sentences
- Appears below the heading in the callout box

### Call-to-Action
- Add as a link in the last row
- Will be styled as a USWDS button

### Background Image
- Optional - place in the first row if needed
- Image will be positioned as a full-width background
- Recommended minimum size: 1600x400px
- The dark callout box will overlay the image

## CSS Classes Applied

- `.usa-hero` - Main hero section
- `.usa-hero__callout` - Dark content box
- `.usa-hero__heading` - Main heading
- `.usa-hero__heading--alt` - Prefix text (before colon)
- `.usa-button` - Call-to-action button

## Example Output

```html
<section class="usa-hero">
  <picture class="usa-hero__image">
    <img src="hero-image.jpg" alt="Hero background">
  </picture>
  <div class="grid-container">
    <div class="usa-hero__callout">
      <h1 class="usa-hero__heading">
        <span class="usa-hero__heading--alt">Hero callout:</span>
        Bring attention to a project priority
      </h1>
      <p>Support the callout with some short explanatory text.</p>
      <a class="usa-button" href="#">Call to action</a>
    </div>
  </div>
</section>
```

## Customization

### Background Images
Always provide a background image via the authored content (using a picture element). The default USWDS background image reference has been removed to prevent 404 errors.

### Callout Position
By default, the callout box appears on the left side of the hero. This is controlled by USWDS CSS and adjusts responsively.
