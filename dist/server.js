"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = require("./app/common/utils/logger");
const routes_1 = require("./app/routes");
class ProjectServer {
    constructor() {
        this.app = (0, express_1.default)();
        //this.logger = Logger.getInstance().getLogger();
    }
    static startProject() {
        return new ProjectServer();
    }
    /**
     * 설정 정보 초기화 기능 정의
     */
    initNodeSrvConfig() {
        this.initLogger();
    }
    /**
     * Logger 초기화 기능 정의
     */
    initLogger() {
        logger_1.Logger.getInstance().init();
        this.logger = logger_1.Logger.getInstance().getLogger();
    }
    /**
     * Routes 초기화 기능 정의
     */
    initRoutes() {
        routes_1.Index.getInstance().initRoute(this.app);
    }
    createServer() {
        return __awaiter(this, void 0, void 0, function* () {
            this.initNodeSrvConfig();
            this.initRoutes();
            if (this.app) {
                this.app.set("port", 8080);
                this.app.listen(this.app.get("port"), () => {
                    if (this.logger) {
                        this.logger.info("####################");
                        this.logger.info("#### Http Server listening on port");
                    }
                });
            }
        });
    }
}
//--watch : 변경을 감지할 파일을 지정할 수 있습니다.
//--exec : 실행할 명령어를 지정할 수 있습니다.
ProjectServer.startProject().createServer().then();
