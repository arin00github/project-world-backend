export namespace ErrorDefine {
  export enum ErrorCode {
    /**
     * @apiDefine Success
     */
    Success = 200,
    PartialSuccess = 206,
    InvalidRequestFormat = 250,
    InvalidValue = 260,
    InvalidFileType = 261,
    DatabaseError = 300,
    BadRequest = 400,
    Unauthorized,
    PermissionDenied,
    NotAllowed,
    NotFound,
    MethodNotAllowed,
    AlreadyExists,
    fileTooLarge,
    RequestTimeout,
    SearchNotKey,
    GroupIncludeUser,
    UserIsExists,
    UserIsNotExists,
    NoAccessAuthorization,
    CodeIsNotExists,
    CodeAlreadyExists,
    InternalServerError = 500,
    ExternalServerError,
  }

  export enum ErrorMessage {
    // 200
    Success = "success",
    PartialSuccess = "success",
    // 250
    InvalidRequestFormat = "invalid request format",
    // 260
    InvalidValue = "invalid value",
    InvalidFileType = "invalid file type",
    // 300
    DatabaseError = "database error",
    // 400
    BadRequest = "bad request",
    Unauthorized = "unauthorized",
    PermissionDenined = "permission denied",
    NotAllowed = "not allowed",
    NotFound = "not found",
    RequestTimeout = "request timeout",
    AlreadyExists = "already exists",
    fileTooLarge = "file too large",
    fileIsNotExists = "file is not exists",
    SearchNotKey = "key not found",
    GroupIncludeUser = "group includes users",
    UserIsExists = "user is exists",
    UserIsNotExists = "user is not exists",
    NoAccessAuthorization = "could not access",
    CodeIsNotExists = "code is not exists",
    CodeAlreadyExists = "code already exists",
    // 500
    InternalServerError = "server internal error",
    ExternalServerError = "server external error",
  }
}
