import { Rgb, Cmyk } from '@types_interfaces/ColorTypes';
import { ColorValidator } from 'validators/ColorValidator';
import { ColorConverter } from '@helpers/ColorConverter';

export class RgbToCmyk extends ColorConverter<Rgb, Cmyk> {
  protected convert(rgb: Rgb): Cmyk {
    if (!ColorValidator.isValidRgb(rgb)) {
      throw new Error('Invalid RGB format');
    }

    const cacheKey = `${rgb.r},${rgb.g},${rgb.b}`;
    const cachedResult = this.getCachedResult(cacheKey);
    if (cachedResult) return cachedResult;

    const c = 1 - rgb.r / 255;
    const m = 1 - rgb.g / 255;
    const y = 1 - rgb.b / 255;
    const k = Math.min(c, m, y);
    const result = {
      c: ((c - k) / (1 - k)) * 100,
      m: ((m - k) / (1 - k)) * 100,
      y: ((y - k) / (1 - k)) * 100,
      k: k * 100,
    };

    this.cacheResult(cacheKey, result);
    return result;
  }
}
