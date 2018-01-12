exports.normalConverter = function (value, units) {
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