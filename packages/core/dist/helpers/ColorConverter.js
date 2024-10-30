"use strict";
// ColorConverter.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorConverter = void 0;
class ColorConverter {
    constructor() {
        this.cache = new Map();
    }
    getCachedResult(key) {
        return this.cache.get(key);
    }
    cacheResult(key, value) {
        this.cache.set(key, value);
    }
}
exports.ColorConverter = ColorConverter;
