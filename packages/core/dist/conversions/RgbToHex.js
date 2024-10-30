"use strict";
// RgbToHex.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.RgbToHex = void 0;
const ColorValidator_1 = require("@validators/ColorValidator");
const ColorConverter_1 = require("@helpers/ColorConverter");
class RgbToHex extends ColorConverter_1.ColorConverter {
    static convertRgbToHex(rgb) {
        return new RgbToHex().convert(rgb);
    }
    convert(rgb) {
        if (!ColorValidator_1.ColorValidator.isValidRgb(rgb)) {
            throw new Error('Invalid RGB format');
        }
        const cacheKey = `${rgb.r},${rgb.g},${rgb.b}`;
        const cachedResult = this.getCachedResult(cacheKey);
        if (cachedResult)
            return cachedResult;
        const hex = '#' +
            ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1);
        this.cacheResult(cacheKey, hex);
        return hex;
    }
}
exports.RgbToHex = RgbToHex;
