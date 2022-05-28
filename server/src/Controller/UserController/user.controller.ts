import { Request, Response, NextFunction } from "express";
import { Logger } from "../../Service/Logger/logger.service";

import { BaseController } from "../base.controller";
import { IUserController } from "./user.controller.interface";

@Logger.LoggingOn()
export class UserController extends BaseController implements IUserController {
   constructor(){
      super()
   }

   public login(request: Request, response: Response, next: NextFunction):any {
      try {
         return this.ok(response)
      } catch (error) {
         next(error)
      }
   }

   public logout(request: Request, response: Response, next: NextFunction): any {
      try {
         return this.ok(response)
      } catch (error) {
         next(error)
      }
   }
}

