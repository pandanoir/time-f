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

For example, `time()` can be used in `setInterval()` and `time()` helps with Date calculation.

```javascript
setInterval(f, time('5sec'));
const today = new Date();
const tomorrow = new Date(today.getTime() + time('1day'));
const yesterday = new Date(today.getTime() - time('1day'));
const one_and_a_half_hours_later = new Date(today.getTime() + time('1hour 30minutes'));
const ramen_timer = new Date(today.getTime() + time('3min'));
```

Even `time('1day')` is more human-readable than `8.64e+7`. It goes without saying that `time('7days')` is easier to understand than `6.048e+8`!
