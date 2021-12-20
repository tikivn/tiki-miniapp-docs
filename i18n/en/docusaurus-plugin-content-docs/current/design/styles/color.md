---
title: Colors
---

We use colors as a tool to communicate information and functions.

## Contrast
We aim to meet WCAG AA standards for color contrast ratio.

| Element                                          | Contrast ratio  |
|:-------------------------------------------------|:----------------|
| Large text (above 18px or 24px with Light style) | 3:1             |
| Standard text                                    | 4.5:1           |

Tools to check contrast ratio:

- Web: [Webaim](https://webaim.org/resources/contrastchecker/)
- Figma: [Able - Friction free accessibility](https://www.figma.com/community/plugin/734693888346260052/Able-%E2%80%93-Friction-free-accessibility)

## Color system
We use design tokens for our color system. Read more about design tokens [here](https://developers.tiki.vn/en/docs/design/styles/design-tokens)

### Theme
Theme is a collection of colors that's used to create a color scheme which defines the overall look and feel of a product or a platform.

Tini design system has a Light theme and a Dark theme.

| Theme       | Link                                                                                             |
|:------------|:-------------------------------------------------------------------------------------------------|
| Light       | [Figma community](https://www.figma.com/community/file/958198956095698455/Tini-design-system)    |
| Dark        | *WIP*                                                                                |

### Global colors
Theme is a collection of colors that's used to create a color scheme which defines the overall look and feel of a product or a platform.

Tini design system has a Light theme and a Dark theme.

Example: Neutral color palette of Light theme

<img src="../../../img/foundation/2-color-1.png" width="360"/>

### Alias colors
Alias colors are dynamic colors with contexts (purposes, when and where to use).

Dynamic colors mean you can change the values of the alias colors depending on your context(s). For example, you can switch color-alias-brand from color-global-blue60 to color-global-red60

<img src="../../../img/foundation/1-token-6.png" width="480px"/>

#### Alias colors' contexts

| Token | Context |
|:---|:---|
| color-alias-brand | Your product brand color |
| color-alias-on-brand | Any content (text, icon, border, etc.) that sits on top of color-alias-brand  |
| color-alias-positive | Provide positive meaning (successful, affirmative) |
| color-alias-on-positive | Any content (text, icon, border, etc.) that sits on top of color-alias-positive |
| color-alias-negative | Provide negative meaning (error) |
| color-alias-on-negative | Any content (text, icon, border, etc.) that sits on top of color-alias-negative |
| color-alias-theme | The base color of the theme, usually used for backgrounds, borders |
| color-alias-theme-variant | A variant of the base color of the theme, usually a little bit darker than color-alias-theme |
| color-alias-primary-on-theme | Primary content that sits on top of color-alias-theme |
| color-alias-secondary-on-theme | Secondary content that sits on top of color-alias-theme |
| color-alias-reverse-theme | The reverse of the base color of the theme, we don't use dark or light because it may confuse with dark theme and light theme |
| color-alias-primary-on-reverse-theme | Primary content that sits on top of color-alias-reverse-theme |
| color-alias-secondary-on-reverse-theme | Secondary content that sits on top of color-alias-reverse-theme |
| color-alias-disabled | Hence the name, used for a disabled state (usually texts, icons) |
| color-alias-disabled-variant | Lighter variant of color-alias-disabled (usually used for backgrounds, borders) |
| color-alias-skeleton | Skeleton loading |
| color-alias-outline | Used for borders, lines, dividers |
| color-alias-outline-variant | Lighter variant of color-alias-outline |
| color-alias-outline-overlay | Transparent variant of color-alias-outline |

### Component specific colors
Component specific colors are the colors of elements that comprise a component. Component specific colors are inherited from Alias colors whenever possible, but not a must, if there's no suitable Alias color, they can inherit Global colors.

Example:

<img src="../../../img/foundation/2-color-2.png" width="860"/>

