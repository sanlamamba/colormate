"use strict";
// HexToRgb.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.HexToRgb = void 0;
const ColorValidator_1 = require("@validators/ColorValidator");
const ColorConverter_1 = require("@helpers/ColorConverter");
class HexToRgb extends ColorConverter_1.ColorConverter {
    static convertHexToRgb(hex) {
        return new HexToRgb().convert(hex);
    }
    convert(hex) {
        if (!ColorValidator_1.ColorValidator.isValidHex(hex)) {
            throw new Error('Invalid HEX format');
        }
        const cachedResult = this.getCachedResult(hex);
        if (cachedResult)
            return cachedResult;
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
exports.HexToRgb = HexToRgb;
