class LRUCache {
  private map: Map<number, number>;
  private cap: number;
  constructor(capacity: number) {
    this.map = new Map();
    this.cap = capacity;
  }
  hit(key: number, value?: number): void {
    if (value === undefined) {
      value = this.map.get(key) as number;
    }
    this.map.delete(key);
    this.map.set(key, value);
  }

  get(key: number): number {
    if (!this.map.has(key)) {
      return -1;
    }
    this.hit(key);
    return this.map.get(key) as number;
  }

  put(key: number, value: number): void {
    if (this.map.size === this.cap && !this.map.has(key)) {
      this.map.delete(this.map.keys().next().value);
    }
    this.hit(key, value);
  }
}
