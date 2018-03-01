/**
 * get string by templates
 * @param tmpl The identity is
 * @param params
 * @returns {*}
 */
exports.template = function (tmpl, params) {
    if (!tmpl) {
        return "";
    }
    if (!params || !Object.keys(params).length) {
        return tmpl;
    }
    var re = /__([\d\w]+)__/g,
        resultStr = "",
        matchArr = [],
        lastIndex = 0;
    while ((matchArr = re.exec(tmpl)) !== null) {
        resultStr += tmpl.slice(lastIndex, matchArr.index);
        if (params.hasOwnProperty(matchArr[1])) {
            resultStr += params[matchArr[1]];
        } else {
            resultStr += matchArr[0];
        }
        lastIndex = re.lastIndex;
    }
    resultStr += tmpl.slice(lastIndex);
    return resultStr ? resultStr : tmpl;
};