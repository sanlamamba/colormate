"use strict";
// ColorValidator.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorValidator = void 0;
class ColorValidator {
    static isValidHex(hex) {
        return /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(hex);
    }
    static isValidRgb(rgb) {
        return (rgb.r >= 0 && rgb.r <= 255 && rgb.g >= 0 && rgb.b >= 0 && rgb.b <= 255);
    }
    static isValidHsl(hsl) {
        return (hsl.h >= 0 &&
            hsl.h <= 360 &&
            hsl.s >= 0 &&
            hsl.s <= 100 &&
            hsl.l >= 0 &&
            hsl.l <= 100);
    }
    static isValidCmyk(cmyk) {
        return (cmyk.c >= 0 &&
            cmyk.c <= 100 &&
            cmyk.m >= 0 &&
            cmyk.m <= 100 &&
            cmyk.y >= 0 &&
            cmyk.y <= 100 &&
            cmyk.k >= 0 &&
            cmyk.k <= 100);
    }
}
exports.ColorValidator = ColorValidator;
