import {typeDic, msecPer} from './const.js';
const time = (...args) => {
    // time(sec) returns sec * 1000.
    // time(string) returns parsed time.
    // time(min, sec) returns (min * 60 + sec) * 1000.
    // time(hour, min, sec) returns (hour * 60 + (min * 60 + sec)) * 1000.
    if (args.length == 1) {
        if (typeof args[0] == 'number')
            return args[0] * 1000;
        else if (typeof args[0] == 'string') {
            const str = args[0];
            const terms = str
                .replace(/^\s+|\s+$/g, '')
                .replace(/\s+/g, ' ')
                .toLowerCase()
                .split(' ');

            let res = 0;
            for (let i = 0, _i = terms.length; i < _i; i++) {
                // '3day' separate into [3, 'day']
                const trans = str => str[0] + '(?:' + str.slice(1,3) + '(?:' + str.slice(3) + 's?)?)?';
                const matched = terms[i].match(
                    new RegExp(
                        '(\\d+)(' + ['day','hour','minute','second'].map(trans).join('|') + '||m(?:illi)?' + trans('second') + ')'
                    ));
                const type = typeDic[matched[2]];
                const num = parseInt(matched[1], 10);

                res += num * msecPer[type];
            }
            return res;
        }
    } else if (args.length == 2) {
        if (args.every(arg => typeof arg == 'number'))
            return (args[0] * 60 + args[1]) * 1000;
    } else if (args.length == 3) {
        if (args.every(arg => typeof arg == 'number'))
            return ((args[0] * 60 + args[1]) * 60 + args[2]) * 1000;
    }
    throw new Error('an unexpected argument was given.');
};
time.second = sec => time(sec);
time.sec = time.second;
time.minute = minute => time(minute, 0);
time.min = time.minute;
time.hour = hour => time(hour, 0, 0);
export default time;
