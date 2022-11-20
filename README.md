# Simple Performance Monitoring

```typescript
import PerformanceMonitor from './perf-monitor';

const timer = new PerformanceMonitor();

for (let i = 0; i < 1000; i++) {
    console.log(timer.measure());
}
```
