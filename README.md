# Simple Performance Monitoring

A lightweight, zero-dependency performance monitor for Node.js built on native `perf_hooks` for high-resolution timing.

## Requirements

- Node.js >= 22

## Installation

```bash
yarn add @gibme/perf-monitor
```

or

```bash
npm install @gibme/perf-monitor
```

## Documentation

[https://gibme-npm.github.io/perf-monitor/](https://gibme-npm.github.io/perf-monitor/)

## Usage

```typescript
import PerformanceMonitor from '@gibme/perf-monitor';

const timer = new PerformanceMonitor();

// do some work...

// measure time since creation (or last mark)
console.log(`Elapsed: ${timer.measure()}ms`);

// set a new checkpoint
timer.mark();

// do more work...

// measure since last mark AND advance the mark in one call
console.log(`Phase: ${timer.measureAndMark()}ms`);

// total time since the instance was created
console.log(`Total: ${timer.total()}ms`);
```

## API

### Properties

| Property | Type | Description |
|---|---|---|
| `genesis` | `number` | Timestamp when the instance was created |
| `current_mark` | `number` | The current checkpoint timestamp |

### Methods

| Method | Signature | Description |
|---|---|---|
| `mark()` | `(): void` | Sets a new checkpoint at the current time |
| `measure()` | `(decimals?: number): number` | Returns ms elapsed since the last mark (or creation) |
| `measureAndMark()` | `(decimals?: number): number` | Measures elapsed time and advances the mark |
| `total()` | `(decimals?: number): number` | Returns ms elapsed since instance creation |

All measurement methods accept an optional `decimals` parameter (default: `8`) to control rounding precision.

## License

MIT
