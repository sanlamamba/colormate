export declare abstract class ColorConverter<TInput, TOutput> {
    private cache;
    protected getCachedResult(key: string): TOutput | undefined;
    protected cacheResult(key: string, value: TOutput): void;
    protected abstract convert(input: TInput): TOutput;
}
