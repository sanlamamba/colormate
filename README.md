# @colormate/core

![npm version](https://img.shields.io/npm/v/@colormate/core?color=blue&style=flat-square) 
![license](https://img.shields.io/badge/license-MIT-green?style=flat-square) 
![issues](https://img.shields.io/github/issues/sanlamamba/colormate?color=yellow&style=flat-square) 

**A modular and efficient color utility library for TypeScript and JavaScript applications**  
`@colormate/core` provides fast and flexible color conversions, validation, adjustments, and color generation utilities, with an optimized, memoized architecture to boost performance.

---

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Examples](#examples)
    - [Color Conversions](#color-conversions)
    - [Color Validation](#color-validation)
    - [Brightness Adjustments](#brightness-adjustments)
    - [Complementary Color Generation](#complementary-color-generation)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

---

## Installation

To get started with `@colormate/core`, simply install it via npm:

|||bash
npm install @colormate/core
|||

---

## Features

- **Color Conversions**: Convert between HEX, RGB, HSL, and CMYK formats.
- **Color Validation**: Validate HEX, RGB, HSL, and CMYK formats.
- **Brightness Adjustments**: Adjust the brightness of RGB colors by a given percentage.
- **Complementary Color Generation**: Generate complementary colors from HEX input.
- **Memoization**: Optimized conversion classes with built-in caching to prevent redundant calculations.
- **Modular Structure**: Organized for scalability and ease of maintenance.

---

## Getting Started

### Examples

#### 1. Color Conversions

Convert between color formats, such as HEX to RGB, RGB to HSL, etc.

|||typescript
import { HexToRgb, RgbToHex, RgbToHsl, RgbToCmyk, CmykToRgb } from "@colormate/core";

// Convert HEX to RGB
const rgbColor = HexToRgb.convertHexToRgb("#FF5733"); // { r: 255, g: 87, b: 51 }

// Convert RGB to HEX
const hexColor = RgbToHex.convertRgbToHex({ r: 255, g: 87, b: 51 }); // #FF5733
|||

#### 2. Color Validation

Validate different color formats to ensure they follow proper specifications.

|||typescript
import { ColorValidator } from "@colormate/core";

const isValidHex = ColorValidator.isValidHex("#FF5733"); // true
const isValidRgb = ColorValidator.isValidRgb({ r: 255, g: 87, b: 51 }); // true
|||

#### 3. Brightness Adjustments

Adjust brightness by a percentage for RGB colors.

|||typescript
import { BrightnessAdjuster } from "@colormate/core";

const brighterColor = BrightnessAdjuster.adjust({ r: 100, g: 100, b: 100 }, 20); // Increase brightness by 20%
|||

#### 4. Complementary Color Generation

Generate the complementary color for any given HEX color.

|||typescript
import { ColorComplementary } from "@colormate/core";

const complementaryColor = ColorComplementary.getComplementary("#FF5733"); // The complementary HEX color
|||

---

## API Reference

### Color Converters

- **HexToRgb.convertHexToRgb(hex: string): Rgb**  
  Convert HEX to RGB.

  - **hex**: `string` – HEX color value.
  - **Returns**: `Rgb` – Object with `r`, `g`, and `b` properties.

- **RgbToHex.convertRgbToHex(rgb: Rgb): string**  
  Convert RGB to HEX.

  - **rgb**: `Rgb` – Object with `r`, `g`, and `b` properties.
  - **Returns**: `string` – HEX color value.

### Color Validation

- **ColorValidator.isValidHex(hex: string): boolean**  
  Checks if a HEX color is valid.

  - **hex**: `string` – HEX color value.
  - **Returns**: `boolean` – True if valid, false otherwise.

- **ColorValidator.isValidRgb(rgb: Rgb): boolean**  
  Checks if an RGB color is valid.

  - **rgb**: `Rgb` – Object with `r`, `g`, and `b` properties.
  - **Returns**: `boolean` – True if valid, false otherwise.

### Brightness Adjustments

- **BrightnessAdjuster.adjust(rgb: Rgb, percent: number): Rgb**  
  Adjusts brightness by a percentage.

  - **rgb**: `Rgb` – Object with `r`, `g`, and `b` properties.
  - **percent**: `number` – Percentage by which to adjust brightness.
  - **Returns**: `Rgb` – Adjusted RGB color.

### Complementary Colors

- **ColorComplementary.getComplementary(hex: string): string**  
  Generates the complementary color for a given HEX value.

  - **hex**: `string` – HEX color value.
  - **Returns**: `string` – Complementary HEX color.

---

## Contributing

We welcome contributions to improve `@colormate/core`! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Submit a pull request with a detailed description.

Ensure that your code follows existing conventions and includes tests for any new functionality.

---

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/sanlamamba/colormate/blob/main/LICENSE) file for more details.

