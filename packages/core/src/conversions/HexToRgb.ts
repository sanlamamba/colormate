// HexToRgb.ts

import { Rgb } from '@types_interfaces/ColorTypes';
import { ColorValidator } from '@validators/ColorValidator';
import { ColorConverter } from '@helpers/ColorConverter';

export class HexToRgb extends ColorConverter<string, Rgb> {
  public static convertHexToRgb(hex: string): Rgb {
    return new HexToRgb().convert(hex);
  }

  protected convert(hex: string): Rgb {
    if (!ColorValidator.isValidHex(hex)) {
      throw new Error('Invalid HEX format');
    }

    const cachedResult = this.getCachedResult(hex);
    if (cachedResult) return cachedResult;

    hex = hex.replace(/^#/, '');
    const bigint = parseInt(hex, 16);
    const result = {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255,
    };

    this.cacheResult(hex, result);
    return result;
  }
}
