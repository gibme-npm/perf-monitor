# Simple Performance Monitoring

## Documentation

[https://gibme-npm.github.io/perf-monitor/](https://gibme-npm.github.io/perf-monitor/)

## Sample Code

```typescript
import PerformanceMonitor from './perf-monitor';

const timer = new PerformanceMonitor();

for (let i = 0; i < 1000; i++) {
    console.log(timer.measure());
}
```
