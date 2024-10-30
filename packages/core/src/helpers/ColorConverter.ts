// ColorConverter.ts

export abstract class ColorConverter<TInput, TOutput> {
  private cache = new Map<string, TOutput>();

  protected getCachedResult(key: string): TOutput | undefined {
    return this.cache.get(key);
  }

  protected cacheResult(key: string, value: TOutput): void {
    this.cache.set(key, value);
  }

  // eslint-disable-next-line no-unused-vars
  protected abstract convert(input: TInput): TOutput;
}
