import { Rgb, Hsl, Cmyk, Hex } from '@types';
export declare class ColorValidator {
    static isValidHex(hex: Hex): boolean;
    static isValidRgb(rgb: Rgb): boolean;
    static isValidHsl(hsl: Hsl): boolean;
    static isValidCmyk(cmyk: Cmyk): boolean;
}