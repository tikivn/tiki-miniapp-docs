---
order: 31
category: Global style
title: Colors
---

## The Tiny color theme

The color theme includes default colors for:

- Primary color (your brand color) for button, navigation bar.
- Additional UI colors, such as colors for backgrounds, surfaces, errors, typography, and iconography. 

All of these colors can be customized for your app.

```__react
import {Color} from '../../../theme/template/Design';
import vi from '../../../theme/template/Design/Color/global-vi';
import en from '../../../theme/template/Design/Color/global-en';
ReactDOM.render(<Color color={{ name: 'gray', count: 13 }} en={en} vi={vi} direction="horizontal" />, mountNode);
```

## Accessibility

Using various forms of contrast is the most important consideration when making user-friendly color and interface choices. Awareness of standards and best practices is the key to accessible color selection.

The color families in each palette contain ten values from 10 to 100. White and Black sit outside those values.

Meet WCAG AA accessibility requirements for minimum contrast.

Black text is WCAG AA accessible on colors ranging from 10 to 50. White text is accessible on colors from 60 to 100.

- Small text is any size below 24px and requires a 4.5:1 contrast ratio
- Large text is anything above 24px and requires a 3:1 contrast ratio

## Color tokens

Our color tokens are a foundational part of our design system. We use color to visually communicate information, functions in our experiences.

### Text

```__react
import {Color} from '../../../theme/template/Design';
import vi from '../../../theme/template/Design/Color/text-vi';
import en from '../../../theme/template/Design/Color/text-en';
ReactDOM.render(<Color color={{ name: 'gray', count: 13 }} en={en} vi={vi} direction="horizontal" />, mountNode);
```

### Icon

```__react
import {Color} from '../../../theme/template/Design';
import vi from '../../../theme/template/Design/Color/icon-vi';
import en from '../../../theme/template/Design/Color/icon-en';
ReactDOM.render(<Color color={{ name: 'gray', count: 13 }} en={en} vi={vi} direction="horizontal" />, mountNode);
```

### Border

```__react
import {Color} from '../../../theme/template/Design';
import vi from '../../../theme/template/Design/Color/border-vi';
import en from '../../../theme/template/Design/Color/border-en';
ReactDOM.render(<Color color={{ name: 'gray', count: 13 }} en={en} vi={vi} direction="horizontal" />, mountNode);
```

### Background

```__react
import {Color} from '../../../theme/template/Design';
import vi from '../../../theme/template/Design/Color/background-vi';
import en from '../../../theme/template/Design/Color/background-en';
ReactDOM.render(<Color color={{ name: 'gray', count: 13 }} en={en} vi={vi} direction="horizontal" />, mountNode);
```

