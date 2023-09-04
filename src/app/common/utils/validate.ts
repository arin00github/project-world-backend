import * as winston from "winston";
import { Logger } from "./logger";

export class Validate {
  private logger: winston.Logger | undefined = Logger.getInstance().getLogger();

  public isObjectValueNull(obj: any) {
    const objectKeyList: string[] = Object.keys(obj);
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

  public isArray(value: any, isAllowEmpty: boolean = false) {
    if (isAllowEmpty === false) {
      return Array.isArray(value) && value.length > 0;
    } else {
      return Array.isArray(value);
    }
  }

  public isNull(value: any) {
    if (!value || value === "undefined") {
      return true;
    }
    return false;
  }
}
