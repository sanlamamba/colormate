// BrightnessAdjuster.ts

import { Rgb } from '@types_interfaces/ColorTypes';
import { ColorValidator } from '@validators/ColorValidator';

export class BrightnessAdjuster {
  static adjust(rgb: Rgb, percent: number): Rgb {
    if (!ColorValidator.isValidRgb(rgb)) {
      throw new Error('Invalid RGB format');
    }

    const adjustValue = (color: number) =>
      Math.min(255, Math.max(0, color + (color * percent) / 100));
    return {
      r: adjustValue(rgb.r),
      g: adjustValue(rgb.g),
      b: adjustValue(rgb.b),
    };
  }
}
