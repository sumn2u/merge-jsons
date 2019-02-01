// 'use strict';

// JSON constructor for checking an object is JSON or not
let jsonC = {}.constructor;

const isJSON = function (json) {
    if (json && json.constructor === jsonC) {
        return true;
    } else {
        return false;
    }
};
const removeDuplicatesJSON = function (arr) {
    var hashTable = {};

    return arr.filter(function (el) {
        var key = JSON.stringify(el);
        var match = Boolean(hashTable[key]);

        return (match ? false : hashTable[key] = true);
    });
}
export { removeDuplicatesJSON }
export { isJSON };

let cloneJSON = function (data) {
    return mergeJSON({}, data);
};

const mergeJSON = function (json1, json2) {
    let result = null;
    if (isJSON(json2)) {
        result = {};
        if (isJSON(json1)) {
            for (let key in json1) {
                if (isJSON(json1[key]) || Array.isArray(json1[key])) {
                    result[key] = cloneJSON(json1[key]);
                } else {
                    result[key] = json1[key];
                }
            }
        }

        for (let key in json2) {
            if (isJSON(json2[key]) || Array.isArray(json2[key])) {
                result[key] = mergeJSON(result[key], json2[key]);
            } else {
                result[key] = json2[key];
            }
        }
    } else if (Array.isArray(json1) && Array.isArray(json2)) {
        let mergedJson = json1.concat(json2)
        result = removeDuplicatesJSON(mergedJson)
      
    } else {
        result = json2;
    }

    return result;
};

export { mergeJSON }