// RgbToHsl.ts

import { Rgb, Hsl } from '@types_interfaces/ColorTypes';
import { ColorValidator } from '@validators/ColorValidator';
import { ColorConverter } from '@helpers/ColorConverter';

export class RgbToHsl extends ColorConverter<Rgb, Hsl> {
  protected convert(rgb: Rgb): Hsl {
    if (!ColorValidator.isValidRgb(rgb)) {
      throw new Error('Invalid RGB format');
    }

    const cacheKey = `${rgb.r},${rgb.g},${rgb.b}`;
    const cachedResult = this.getCachedResult(cacheKey);
    if (cachedResult) return cachedResult;

    const r = rgb.r / 255;
    const g = rgb.g / 255;
    const b = rgb.b / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;
    let h = 0,
      s = 0;

    if (max !== min) {
      const delta = max - min;
      s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
      h =
        max === r
          ? (g - b) / delta + (g < b ? 6 : 0)
          : max === g
          ? (b - r) / delta + 2
          : (r - g) / delta + 4;
      h *= 60;
    }

    const result = { h, s: s * 100, l: l * 100 };
    this.cacheResult(cacheKey, result);
    return result;
  }
}
