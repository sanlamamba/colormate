"use strict";
// ColorComplementary.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorComplementary = void 0;
const RgbToHex_1 = require("@conversions/RgbToHex");
const HexToRgb_1 = require("@conversions/HexToRgb");
class ColorComplementary {
    static getComplementary(hex) {
        const rgb = HexToRgb_1.HexToRgb.convertHexToRgb(hex);
        const compRgb = { r: 255 - rgb.r, g: 255 - rgb.g, b: 255 - rgb.b };
        return RgbToHex_1.RgbToHex.convertRgbToHex(compRgb);
    }
}
exports.ColorComplementary = ColorComplementary;
