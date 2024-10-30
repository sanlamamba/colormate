"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RgbToCmyk = void 0;
const ColorValidator_1 = require("validators/ColorValidator");
const ColorConverter_1 = require("@helpers/ColorConverter");
class RgbToCmyk extends ColorConverter_1.ColorConverter {
    convert(rgb) {
        if (!ColorValidator_1.ColorValidator.isValidRgb(rgb)) {
            throw new Error('Invalid RGB format');
        }
        const cacheKey = `${rgb.r},${rgb.g},${rgb.b}`;
        const cachedResult = this.getCachedResult(cacheKey);
        if (cachedResult)
            return cachedResult;
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
exports.RgbToCmyk = RgbToCmyk;
