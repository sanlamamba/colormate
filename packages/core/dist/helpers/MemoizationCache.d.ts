export declare class MemoizationCache<T> {
    private cache;
    get(key: string): T | undefined;
    set(key: string, value: T): void;
    clear(): void;
}
