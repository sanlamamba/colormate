// ColorComplementary.ts

import { Rgb } from '@types_interfaces/ColorTypes';
import { RgbToHex } from '@conversions/RgbToHex';
import { HexToRgb } from '@conversions/HexToRgb';

export class ColorComplementary {
  static getComplementary(hex: string): string {
    const rgb = HexToRgb.convertHexToRgb(hex);
    const compRgb: Rgb = { r: 255 - rgb.r, g: 255 - rgb.g, b: 255 - rgb.b };
    return RgbToHex.convertRgbToHex(compRgb);
  }
}
