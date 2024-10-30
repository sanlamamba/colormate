// RgbToHex.ts

import { Rgb } from '@types_interfaces/ColorTypes';
import { ColorValidator } from '@validators/ColorValidator';
import { ColorConverter } from '@helpers/ColorConverter';

export class RgbToHex extends ColorConverter<Rgb, string> {
  public static convertRgbToHex(rgb: Rgb): string {
    return new RgbToHex().convert(rgb);
  }

  protected convert(rgb: Rgb): string {
    if (!ColorValidator.isValidRgb(rgb)) {
      throw new Error('Invalid RGB format');
    }

    const cacheKey = `${rgb.r},${rgb.g},${rgb.b}`;
    const cachedResult = this.getCachedResult(cacheKey);
    if (cachedResult) return cachedResult;

    const hex =
      '#' +
      ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1);
    this.cacheResult(cacheKey, hex);
    return hex;
  }
}
