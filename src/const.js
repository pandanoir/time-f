export const typeDic = new Map();
for (const type of ['day', 'hour', 'minute', 'second']) {
    typeDic.set(type[0], type);
    typeDic.set(type, type);
    typeDic.set(type.slice(0, 3), type);
    typeDic.set(`${type}s`, type);
}
for (const sec of ['s','sec','second','seconds']) {
    typeDic.set(`m{sec}`, 'millisecond');
    typeDic.set(`milli{sec}`, 'millisecond');
}

export const msecPer = {
    millisecond: 1
};
msecPer.second = 1000 * msecPer.millisecond;
msecPer.minute = 60 * msecPer.second;
msecPer.hour = 60 * msecPer.minute;
msecPer.day =24 * msecPer.hour;
