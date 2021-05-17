"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepClone = void 0;
exports.deepClone = function (obj) {
    var res = {};
    var keys = Object.keys(obj);
    keys.map(function (item) {
        var descriptor = Object.getOwnPropertyDescriptor(obj, item);
        Object.defineProperty(res, item, descriptor);
    });
    return res;
};
