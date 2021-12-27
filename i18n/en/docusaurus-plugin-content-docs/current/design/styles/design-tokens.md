---
title: Tokens
---

## What are design tokens?

Design tokens are the shared language between designers and developers. All the visual styles that are being used across all platforms or products such as colors, font, spacing etc... are organized into a system of small pieces of data called design tokens. They're not only represent all the visual decisions but also reflect their relationships.

<img src="/img/foundation/1-token-1.png" width="560px"/>

## Token types

### Global

Global tokens are the first layer of the design tokens, they represent all the fundamental visual decisions in our design system, including colors, typography, spacing, effects, etc.

<img src="/img/foundation/1-token-2.png" width="560px"/>

### Alias

Alias tokens communicate the contexts, usages or purposes when using them. Alias tokens are inherited from Global tokens.

<img src="/img/foundation/1-token-3.png" width="560px"/>

### Component specific

Component specific tokens are the values of elements that comprise a component. Component specific tokens are inherited from Alias tokens whenever possible, but not a must.

<img src="/img/foundation/1-token-4.png" width="560px"/>

## Why using tokens?

### Consistency

Design tokens help make the design system become the single source of truth across all products or all platforms. Moreover, design tokens make maintenance and update easier.

<img src="/img/foundation/1-token-5.png" width="560px"/>

### Scalability

Design tokens are reusable and not hard-coding, they help scale our products by separating design decisions from specific platforms & technologies.

### Flexibility

Tokens can point to different values based on different contexts such as theme, brand, level of contrast, etc... So they help make our design system flexible.

<img src="/img/foundation/1-token-6.png" width="560px"/>

## Usage guidelines

### Don't use component specific tokens interchangeably with other components

<img src="/img/foundation/1-token-7.png" width="720px"/>

### Use alias tokens with their associated contexts whenever possible.

<img src="/img/foundation/1-token-8.png" width="720px"/>

### Use global tokens when there're no alias tokens available

<img src="/img/foundation/1-token-9.png" width="720px"/>

## Specs

### General

<img src="/img/foundation/1-token-10.png" width="560x"/>

1: Visual elements. The design building blocks that the token regulates, e.g., color, space, font.

2: Token's description. Token's description is various, depending on type of token.

### Colors

#### Global token

<img src="/img/foundation/1-token-11.png" width="360x"/>

1: Type of token

2: Color name

#### Alias token

<img src="/img/foundation/1-token-12.png" width="560x"/>

1: Type of token

2: Context

#### Component specific token

<img src="/img/foundation/1-token-13.png" width="560x"/>

1: Component name

2: Component's properties. Component's properties include: type, hierarchy, attributes, states, etc..

### Font

All font tokens are global tokens

<img src="/img/foundation/1-token-14.png" width="360x"/>

1: Font property

2: Value name

### Space

All space tokens are global tokens

<img src="/img/foundation/1-token-15.png" width="360x"/>

1: Type of spacing

2: Unit

### Border radius

All radius tokens are global tokens

<img src="/img/foundation/1-token-16.png" width="360x"/>

1: Type of radius

2: Value name (optional)

### Effects

All effect tokens are global tokens

#### Dop shadow

<img src="/img/foundation/1-token-17.png" width="360x"/>

1: Index (bigger number, higher index)
