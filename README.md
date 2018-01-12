# time-f

[![Build Status](https://travis-ci.org/pandanoir/time-f.svg?branch=master)](https://travis-ci.org/pandanoir/time-f)

This library provides a function.The function, `time()`, converts arguments into a time based value.

# Usage

```javascript
const time = require('time-f');
const str = '1h 15m';
const time1 = time(str);
const time2 = time(1, 15, 0);
console.log(time1); // 4.5e+6 milliseconds
console.log(time2); // 4.5e+6 milliseconds
```

For example, `time()` can be used in `setInterval()`.

```javascript
setInterval(f, time('5sec'));
```

Compared with `5000`, `time('5sec')` is human-readable.
