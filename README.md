# time-f

[![Build Status](https://travis-ci.org/pandanoir/time-f.svg?branch=master)](https://travis-ci.org/pandanoir/time-f)

This library provides a function.The function, `time()`, converts arguments into a time based value.

# Usage

```javascript
const time = require('time-f');
const str = '1h 15m';
const time1 = time(str);
const time2 = time(1, 15, 0);
assert.equal(time1, 4.5e+6);
assert.equal(time2, 4.5e+6);
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

# time()
`time()` takes 1 to 3 arguments.

## time(string)
`time(string)` will return parsed value.

example string:

```
"1hour 2minutes 3seconds"
"1h 2m 3s"
"1hour 2min 3sec"
"    1Hour     2MIN      3seC"
```

## time(number)
`time()` will treat `number` as second.

```javascript
assert.equal(time(5), 5000);
assert.equal(time(0.5), 500);
```

`time.sec()` and `time.second()` is alias of this.

```javascript
assert.equal(time.sec(5), 5000);
```

## time(number, number)
`time()` will treat first `number` as minute and second `number` as second.

```javascript
assert.equal(time(1, 30), 90000);
```

`time.min()` and `time.minute()` is alias of this except that these functions take only one argument.

```javascript
assert.equal(time.min(5), 3.0e+5);
```

## time(number, number, number)
`time()` will treat first `number` as minute and second `number` as second.

```javascript
assert.equal(time(1, 30, 0), 5.4e+6);
```

`time.hour()` is alias of this except that this function takes only one argument.

```javascript
assert.equal(time.hour(5), 1.8e+7);
```
