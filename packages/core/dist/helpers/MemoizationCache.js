"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoizationCache = void 0;
class MemoizationCache {
    constructor() {
        this.cache = new Map();
    }
    get(key) {
        return this.cache.get(key);
    }
    set(key, value) {
        this.cache.set(key, value);
    }
    clear() {
        this.cache.clear();
    }
}
exports.MemoizationCache = MemoizationCache;
