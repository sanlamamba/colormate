"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmykToRgb = void 0;
const ColorValidator_1 = require("validators/ColorValidator");
class CmykToRgb {
    static convert(cmyk) {
        if (!ColorValidator_1.ColorValidator.isValidCmyk(cmyk)) {
            throw new Error('Invalid CMYK format');
        }
        const r = 255 * (1 - cmyk.c / 100) * (1 - cmyk.k / 100);
        const g = 255 * (1 - cmyk.m / 100) * (1 - cmyk.k / 100);
        const b = 255 * (1 - cmyk.y / 100) * (1 - cmyk.k / 100);
        return { r: Math.round(r), g: Math.round(g), b: Math.round(b) };
    }
}
exports.CmykToRgb = CmykToRgb;
