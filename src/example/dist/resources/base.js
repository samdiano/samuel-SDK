"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const axios_1 = require("axios");
class Base {
    constructor({ apiKey, baseUrl = 'https://the-one-api.dev/v2' }) {
        this.baseUrl = baseUrl;
        this.apiKey = apiKey;
    }
    request(endpoint, params, options) {
        const url = `${this.baseUrl}/${endpoint}`;
        const _a = params !== null && params !== void 0 ? params : {}, { filters } = _a, otherOptions = __rest(_a, ["filters"]);
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.apiKey}`,
        };
        const config = Object.assign(Object.assign({}, options), { headers, params: Object.assign(Object.assign({}, filters), otherOptions) });
        return (0, axios_1.default)(url, config).then((response) => {
            if (response.status >= 200 && response.status < 300) {
                console.log(response.request.path);
                return response.data;
            }
            throw new Error(response.statusText);
        });
    }
}
exports.Base = Base;
exports.default = Base;
