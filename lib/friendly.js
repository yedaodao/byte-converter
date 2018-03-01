const floatRegx = /(\d+)\.\d+/;
const util = require('./util');

/**
 * 获得格式化日期字符串
 * @param timestamp
 * @param type
 * type为'common'时，接收毫秒级时间戳
 * type为'float'时，接收秒级浮点数时间戳
 * @returns {string}
 */
exports.getFriendlyTime = function (timestamp, type) {
    type = type ? type : 'common';
    var date;
    if (typeof timestamp === 'string') {
        timestamp = parseFloat(timestamp);
    }
    switch (type) {
        case 'common':
            date = new Date(timestamp);
            return getDateString(date);
        case 'float':
            if (!floatRegx.test(timestamp.toString())) {
                return '';
            }
            if (RegExp.lastParen.length !== 10) {
                return '';
            }
            timestamp = parseInt((timestamp * 1000).toFixed(0));
            date = new Date(timestamp);
            return getDateString(date);
    }
};

function getDateString(date) {
    if (!date instanceof Date) {
        return '';
    }
    return util.template("__year__/__month__/__date__ __hours__:__minutes__:__seconds__", {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        date: date.getDate(),
        hours: leftPadString(date.getHours(), 2, '0'),
        minutes: leftPadString(date.getMinutes(), 2, '0'),
        seconds: leftPadString(date.getSeconds(), 2, '0')
    });
}


function leftPadString(str, len, fill) {
    if (typeof str !== 'string' && typeof str !== 'number') {
        return str;
    }
    str = str.toString();
    if (str.length >= len) {
        return str;
    }
    fill = fill.toString();
    return fill.repeat(len - str.length) + str;
}

exports.parseISOTimeToString = function (isoTime) {
    if (typeof isoTime !== 'string') {
        return '';
    }
    if (isoTime.indexOf('Z') === -1) {
        isoTime += 'Z';
    }
    var dateTime = new Date(Date.parse(isoTime));
    return getDateString(dateTime);
};