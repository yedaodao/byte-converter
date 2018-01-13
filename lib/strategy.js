exports.storageConverter = function (value, units) {
    const step = 1024;
    let sizes = [];
    const i = Math.floor(Math.log(value) / Math.log(step));
    switch (units) {
        case 'B':
            sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB'];
            break;
        case 'GB':
            sizes = ['GB', 'TB', 'PB', 'EB'];
            break;
        case 'MB':
            sizes = ['MB', 'GB', 'TB', 'PB', 'EB'];
            break;
        case 'bps':
            sizes = ['bps', 'kbps', 'mbps'];
            break;
    }
    return {
        value: parseFloat((value / Math.pow(step, i)).toPrecision(3)),
        units: sizes[i]
    };
};

const YEAR = {data: 365 * 24 * 60 * 60, unit: '年'};
const MONTH = {data: 30 * 24 * 60 * 60, unit: '月'};
const DAY = {data: 24 * 60 * 60, unit: '天'};
const HOUR = {data: 60 * 60, unit: '小时'};

exports.timeConverter = function (value, units) {
    const timeArray = [YEAR, MONTH, DAY, HOUR];
    let timeObj = HOUR,
        resValue = null;
    timeArray.some(function (time) {
        let temp = value / time.data;
        if (temp < 0) {
            timeObj = time;
            return true;
        }
    });
    resValue = parseFloat((value / timeObj.data).toFixed(2));
    return {
        value: resValue,
        units: timeObj.unit,
    }
};