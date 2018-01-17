const strategy = require('./strategy');
const friendly = require('./friendly');

const supportMap = {
    'B': 'storage',
    'GB': 'storage',
    'MB': 'storage',
    'bps': 'storage',
    's': 'time',
};

exports.friendly = friendly;

exports.humanConverter = function (basicData, basicUnits) {
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
        return transitionObj;
    }
    switch (strategyName) {
        case 'storage':
            transitionObj = strategy.storageConverter(basicData, basicUnits);
            break;
        case 'time':
            transitionObj = strategy.timeConverter(basicData, basicUnits);
    }
    return transitionObj;
};