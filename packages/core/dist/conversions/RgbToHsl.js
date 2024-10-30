"use strict";
// RgbToHsl.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.RgbToHsl = void 0;
const ColorValidator_1 = require("@validators/ColorValidator");
const ColorConverter_1 = require("@helpers/ColorConverter");
class RgbToHsl extends ColorConverter_1.ColorConverter {
    convert(rgb) {
        if (!ColorValidator_1.ColorValidator.isValidRgb(rgb)) {
            throw new Error('Invalid RGB format');
        }
        const cacheKey = `${rgb.r},${rgb.g},${rgb.b}`;
        const cachedResult = this.getCachedResult(cacheKey);
        if (cachedResult)
            return cachedResult;
        const r = rgb.r / 255;
        const g = rgb.g / 255;
        const b = rgb.b / 255;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const l = (max + min) / 2;
        let h = 0, s = 0;
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
exports.RgbToHsl = RgbToHsl;
