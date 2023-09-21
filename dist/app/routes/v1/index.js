"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexV1Index = void 0;
const validate_1 = require("../../common/utils/validate");
class IndexV1Index {
    constructor() {
        //private logger: winstone.Logger = Logger.getInstance().getLogger();
        this.validate = new validate_1.Validate();
    }
    init(app, urlTag) {
        app.use(`${urlTag}`);
    }
}
exports.IndexV1Index = IndexV1Index;
