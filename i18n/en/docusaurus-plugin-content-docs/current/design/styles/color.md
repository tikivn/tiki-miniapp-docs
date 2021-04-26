---
title: Colors
---

We use color to visually communicate information, functions in our experiences.

## The Tiny color theme

The color theme includes default colors for:

- Primary color (your brand color) for button, navigation bar.
- Additional UI colors, such as colors for backgrounds, surfaces, errors, typography, and iconography.

All of these colors can be customized for your app.

import {Color} from '@site/src/components/Design';
import vi from '@site/src/components/Design/Color/global-vi';
import en from '@site/src/components/Design/Color/global-en';
import ReactTooltip from "react-tooltip";

<Color color={{ name: 'gray', count: 13 }} en={en} vi={vi} direction="horizontal" />
<ReactTooltip />

## Accessibility

Using various forms of contrast is the most important consideration when making user-friendly color and interface choices. Awareness of standards and best practices is the key to accessible color selection.

The color families in each palette contain ten values from 10 to 100. White and Black sit outside those values.

Meet WCAG AA accessibility requirements for minimum contrast.

- Black text is WCAG AA accessible in colors ranging from 10 to 50. White text is accessible in colors from 60 to 100.
- Small text is any size below 24px and requires a 4.5:1 contrast ratio.
- Large text is anything above 24px and requires a 3:1 contrast ratio.

## Color tokens

Our color tokens are a foundational part of our design system.

### Text

import textVi from '@site/src/components/Design/Color/text-vi';
import textEn from '@site/src/components/Design/Color/text-en';

<Color color={{ name: 'gray', count: 13 }} en={textEn} vi={textVi} direction="horizontal" />

### Icon

import iconVi from '@site/src/components/Design/Color/icon-vi';
import iconEn from '@site/src/components/Design/Color/icon-en';

<Color color={{ name: 'gray', count: 13 }} en={iconEn} vi={iconVi} direction="horizontal" />

### Border

import borderVi from '@site/src/components/Design/Color/border-vi';
import borderEn from '@site/src/components/Design/Color/border-en';

<Color color={{ name: 'gray', count: 13 }} en={borderEn} vi={borderVi} direction="horizontal" />

### Background

import backgroundVi from '@site/src/components/Design/Color/background-vi';
import backgroundEn from '@site/src/components/Design/Color/background-en';

<Color color={{ name: 'gray', count: 13 }} en={backgroundEn} vi={backgroundVi} direction="horizontal" />
