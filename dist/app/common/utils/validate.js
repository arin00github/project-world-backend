"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validate = void 0;
const logger_1 = require("./logger");
class Validate {
    constructor() {
        this.logger = logger_1.Logger.getInstance().getLogger();
    }
    isObjectValueNull(obj) {
        const objectKeyList = Object.keys(obj);
        for (let i = 0; i < objectKeyList.length; i++) {
            if (this.isNull(obj[objectKeyList[i]])) {
                if (this.logger) {
                    this.logger.error(objectKeyList[i]);
                    return true;
                }
            }
        }
        return false;
    }
    isArray(value, isAllowEmpty = false) {
        if (isAllowEmpty === false) {
            return Array.isArray(value) && value.length > 0;
        }
        else {
            return Array.isArray(value);
        }
    }
    isNull(value) {
        if (!value || value === "undefined") {
            return true;
        }
        return false;
    }
}
exports.Validate = Validate;
