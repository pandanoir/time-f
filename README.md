# time-f

[![Build Status](https://travis-ci.org/pandanoir/time-f.svg?branch=master)](https://travis-ci.org/pandanoir/time-f)

This library provides `time()`, converting given arguments into a time.

# Usage

```javascript
const time = require('time-f');
const str = '1h 15m';
const time1 = time(str);
const time2 = time(1, 15, 0);
assert.equal(time1, 4.5e+6);
assert.equal(time2, 4.5e+6);
```

For example, in `setInterval()` `time()` makes code more readable. Also, `time()` helps with Date calculation.

```javascript
setInterval(f, time('5sec'));
const today = new Date();
const tomorrow = new Date(today.getTime() + time('1day'));
const yesterday = new Date(today.getTime() - time('1day'));
const one_and_a_half_hours_later = new Date(today.getTime() + time('1hour 30minutes'));
const ramen_timer = new Date(today.getTime() + time('3min'));
```

`time('1day')` is more human-readable than `8.64e+7`. It goes without saying that `time('7days')` is easier to understand than `6.048e+8`!

# time()
## time(string)
`time(string)` receives string representing time.

example:

```javascript
// below values are same!
time('1hour 2minutes 3seconds');
time('1h 2m 3s');
time('1hour 2min 3sec');
time('    1Hour     2MIN      3seC');
```

## time(number)
`time()` can receive `number` as second and converts it to millisecond.

```javascript
assert.equal(time(5), 5000);
assert.equal(time(0.5), 500);
```

You can use `time.sec(number)` and `time.second(number)` instead of this.

```javascript
assert.equal(time.sec(5), 5000);
```

## time(number, number)
`time()` will treat 1st argument as minute and 2nd as second.

```javascript
assert.equal(time(1, 30), 90000);
```

`time.min(number)` and `time.minute(number)` can also convert number into minutes.

```javascript
assert.equal(time.min(5), 3.0e+5);
```

## time(number, number, number)
`time()` will treat first argument as hour, second as minute and third as second.

```javascript
assert.equal(time(1, 30, 0), 5.4e+6);
```

`time.hour(number)` also converts number into hours.

```javascript
assert.equal(time.hour(5), 1.8e+7);
```
