"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Index = void 0;
class Index {
    constructor() {
        this.app = undefined;
    }
    static getInstance() {
        if (!Index.instance) {
            Index.instance = new Index();
        }
        return Index.instance;
    }
    initRoute(app) {
        this.app = app;
        this.app.use((req, res, next) => {
            // CORS해결 및 모든 header 허용
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Headers", "*");
            res.setHeader("Access-Control-Allow-Methods", "*");
            next();
        });
    }
}
exports.Index = Index;
