const strategy = require('./strategy');

const supportMap = {
    'B': '1024',
    'GB': '1024',
    'MB': '1024',
    'bps': '1024'
};

module.exports = function converter(basicData, basicUnits) {
    // if (basicUnits == null) {
    //
    // }
    return humanConverter(basicData, basicUnits);
};

function customConverter(basicData) {
    return {
        fromTo: function (basicUnits, toUnits) {

        }
    }
}

function humanConverter(basicData, basicUnits) {
    basicData = parseFloat(basicData);
    let transitionObj = {
        value: basicData,
        units: basicUnits
    };
    if (isNaN(basicData)) {
        console.warn('You have passed a NaN number or string');
        return transitionObj;
    }
    const strategyName = supportMap[basicUnits];
    if (!basicUnits || !strategyName) {
        console.warn('You have passed a unsupport units');
        return transitionObj;
    }
    switch (strategyName) {
        case '1024':
            transitionObj = strategy.normalConverter(basicData, basicUnits);
            break;
    }
    return transitionObj;
}