"use strict";
// BrightnessAdjuster.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrightnessAdjuster = void 0;
const ColorValidator_1 = require("@validators/ColorValidator");
class BrightnessAdjuster {
    static adjust(rgb, percent) {
        if (!ColorValidator_1.ColorValidator.isValidRgb(rgb)) {
            throw new Error('Invalid RGB format');
        }
        const adjustValue = (color) => Math.min(255, Math.max(0, color + (color * percent) / 100));
        return {
            r: adjustValue(rgb.r),
            g: adjustValue(rgb.g),
            b: adjustValue(rgb.b),
        };
    }
}
exports.BrightnessAdjuster = BrightnessAdjuster;
