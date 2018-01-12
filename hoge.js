const time = require('./');
const today = new Date();
const tomorrow = new Date(today.getTime() + time('1day'));
const yesterday = new Date(today.getTime() - time('1day'));
const one_and_a_half_hours_later = new Date(today.getTime() + time('1hour 30minutes'));
const ramen_timer = new Date(today.getTime() + time('3min'));
console.log(time.hour(5).toExponential());
