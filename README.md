# Colormate

![npm version](https://img.shields.io/npm/v/@colormate/core?color=blue&style=flat-square) 
![license](https://img.shields.io/badge/license-MIT-green?style=flat-square) 
![issues](https://img.shields.io/github/issues/sanlamamba/colormate?color=yellow&style=flat-square) 

**Colormate** is a flexible and powerful color management library designed for JavaScript and TypeScript applications. With separate modules for core color transformations and theme management, Colormate offers developers an optimized, modular way to handle color conversions, validations, adjustments, and theming.

---

## Table of Contents

- [About Colormate](#about-colormate)
- [Packages](#packages)
  - [@colormate/core](#colormatecore)
  - [@colormate/theming](#colormatetheme)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## About Colormate

Colormate brings together essential color utilities and a powerful theme management system, catering to modern applications that need precise color manipulation. It’s built with modularity in mind, making it easy to use and extend only what you need, whether that’s color transformations, validations, or responsive theming.

---

## Packages

### @colormate/core

The `core` package provides a set of robust utilities for handling color transformations, validations, and adjustments, including:
- Conversions between HEX, RGB, HSL, and CMYK formats.
- Validation utilities for multiple color formats.
- Brightness adjustment functions.
- Complementary color generation.
- Optimized performance with built-in caching and memoization.

For detailed usage instructions, see the [@colormate/core documentation](./packages/core/README.md).

### @colormate/theming

The `theming` package extends the core capabilities of Colormate, offering developers a comprehensive toolkit to manage color themes with ease. Key features include:
- **Dark and Light Mode Support**: Seamlessly switch between dark and light themes.
- **Tailwind and Bootstrap Color Compatibility**: Apply color classes like `text-white`, `bg-dark`, etc., in a way that integrates smoothly with existing frameworks.
- **Theme Provider and Context**: Easily manage and apply theme colors across your application using React and Next.js.
- **Color Class Utilities**: Dynamically assign color classes like `bg-light` or `text-dark` based on current theme settings.

Stay tuned for the full release of `@colormate/theming`!

---

## Installation

Install each package independently based on your requirements.

For core utilities:

```bash
npm install @colormate/core
```

For theme management (coming soon):

```bash
npm install @colormate/theming
```

---

## Usage

With Colormate, you can import only the functionality you need from each package.

### Basic Example with @colormate/core

Convert between color formats, adjust brightness, or validate color input with `@colormate/core`.

```typescript
import { HexToRgb, RgbToHex, ColorValidator } from "@colormate/core";

// Convert HEX to RGB
const rgbColor = HexToRgb.convertHexToRgb("#FF5733");

// Validate RGB color
const isValidRgb = ColorValidator.isValidRgb({ r: 255, g: 87, b: 51 });
```


## Contributing

We welcome contributions to Colormate! Please feel free to open issues, suggest features, or create pull requests. Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch with your feature or fix.
3. Submit a pull request with a detailed description of your changes.

For major changes, please open an issue first to discuss what you would like to change.

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
