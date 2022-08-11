class LRUCache {
  readonly stack: number[];
  readonly map: Map<number, number>;
  readonly capacity: number;
  constructor(capacity: number) {
    this.stack = [];
    this.map = new Map();
    this.capacity = capacity;
  }
  remove(key: number): void {
    if (!this.map.has(key)) {
      return;
    }
    this.stack.splice(this.stack.indexOf(key), 1);
    this.map.delete(key);
  }

  add(key: number, value: number): void {
    if (this.stack.length === this.capacity) {
      this.map.delete(this.stack.shift() as number);
    }
    this.stack.push(key);
    this.map.set(key, value);
  }

  get(key: number): number {
    if (!this.map.has(key)) {
      return -1;
    }
    const value = this.map.get(key) as number;
    this.put(key, value);
    return value;
  }

  put(key: number, value: number): void {
    this.remove(key);
    this.add(key, value);
  }
}
