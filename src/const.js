export const typeDic = {};
for (let types = ['day', 'hour', 'minute', 'second'], i = 0, _i = types.length; i < _i; i++) {
    const type = types[i];
    typeDic[type[0]] = typeDic[type] = typeDic[type.slice(0, 3)] = typeDic[`${type}s`] = type;
}
for (let secs = ['s','sec','second','seconds'], i = 0, _i = secs.length; i < _i; i++) {
    const sec = secs[i];
    typeDic['m' + sec] = typeDic['milli' + sec] = 'millisecond';
}

export const msecPer = {
    millisecond: 1
};
msecPer.second = 1000 * msecPer.millisecond;
msecPer.minute = 60 * msecPer.second;
msecPer.hour = 60 * msecPer.minute;
msecPer.day =24 * msecPer.hour;
