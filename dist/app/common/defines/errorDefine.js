"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorDefine = void 0;
var ErrorDefine;
(function (ErrorDefine) {
    let ErrorCode;
    (function (ErrorCode) {
        /**
         * @apiDefine Success
         */
        ErrorCode[ErrorCode["Success"] = 200] = "Success";
        ErrorCode[ErrorCode["PartialSuccess"] = 206] = "PartialSuccess";
        ErrorCode[ErrorCode["InvalidRequestFormat"] = 250] = "InvalidRequestFormat";
        ErrorCode[ErrorCode["InvalidValue"] = 260] = "InvalidValue";
        ErrorCode[ErrorCode["InvalidFileType"] = 261] = "InvalidFileType";
        ErrorCode[ErrorCode["DatabaseError"] = 300] = "DatabaseError";
        ErrorCode[ErrorCode["BadRequest"] = 400] = "BadRequest";
        ErrorCode[ErrorCode["Unauthorized"] = 401] = "Unauthorized";
        ErrorCode[ErrorCode["PermissionDenied"] = 402] = "PermissionDenied";
        ErrorCode[ErrorCode["NotAllowed"] = 403] = "NotAllowed";
        ErrorCode[ErrorCode["NotFound"] = 404] = "NotFound";
        ErrorCode[ErrorCode["MethodNotAllowed"] = 405] = "MethodNotAllowed";
        ErrorCode[ErrorCode["AlreadyExists"] = 406] = "AlreadyExists";
        ErrorCode[ErrorCode["fileTooLarge"] = 407] = "fileTooLarge";
        ErrorCode[ErrorCode["RequestTimeout"] = 408] = "RequestTimeout";
        ErrorCode[ErrorCode["SearchNotKey"] = 409] = "SearchNotKey";
        ErrorCode[ErrorCode["GroupIncludeUser"] = 410] = "GroupIncludeUser";
        ErrorCode[ErrorCode["UserIsExists"] = 411] = "UserIsExists";
        ErrorCode[ErrorCode["UserIsNotExists"] = 412] = "UserIsNotExists";
        ErrorCode[ErrorCode["NoAccessAuthorization"] = 413] = "NoAccessAuthorization";
        ErrorCode[ErrorCode["CodeIsNotExists"] = 414] = "CodeIsNotExists";
        ErrorCode[ErrorCode["CodeAlreadyExists"] = 415] = "CodeAlreadyExists";
        ErrorCode[ErrorCode["InternalServerError"] = 500] = "InternalServerError";
        ErrorCode[ErrorCode["ExternalServerError"] = 501] = "ExternalServerError";
    })(ErrorCode = ErrorDefine.ErrorCode || (ErrorDefine.ErrorCode = {}));
    let ErrorMessage;
    (function (ErrorMessage) {
        // 200
        ErrorMessage["Success"] = "success";
        ErrorMessage["PartialSuccess"] = "success";
        // 250
        ErrorMessage["InvalidRequestFormat"] = "invalid request format";
        // 260
        ErrorMessage["InvalidValue"] = "invalid value";
        ErrorMessage["InvalidFileType"] = "invalid file type";
        // 300
        ErrorMessage["DatabaseError"] = "database error";
        // 400
        ErrorMessage["BadRequest"] = "bad request";
        ErrorMessage["Unauthorized"] = "unauthorized";
        ErrorMessage["PermissionDenined"] = "permission denied";
        ErrorMessage["NotAllowed"] = "not allowed";
        ErrorMessage["NotFound"] = "not found";
        ErrorMessage["RequestTimeout"] = "request timeout";
        ErrorMessage["AlreadyExists"] = "already exists";
        ErrorMessage["fileTooLarge"] = "file too large";
        ErrorMessage["fileIsNotExists"] = "file is not exists";
        ErrorMessage["SearchNotKey"] = "key not found";
        ErrorMessage["GroupIncludeUser"] = "group includes users";
        ErrorMessage["UserIsExists"] = "user is exists";
        ErrorMessage["UserIsNotExists"] = "user is not exists";
        ErrorMessage["NoAccessAuthorization"] = "could not access";
        ErrorMessage["CodeIsNotExists"] = "code is not exists";
        ErrorMessage["CodeAlreadyExists"] = "code already exists";
        // 500
        ErrorMessage["InternalServerError"] = "server internal error";
        ErrorMessage["ExternalServerError"] = "server external error";
    })(ErrorMessage = ErrorDefine.ErrorMessage || (ErrorDefine.ErrorMessage = {}));
})(ErrorDefine || (exports.ErrorDefine = ErrorDefine = {}));
