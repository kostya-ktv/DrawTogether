import { NextFunction, Request, Response } from "express";

export interface IUserController {
   login: (request: Request, response: Response, next: NextFunction) => Response
   logout: (request: Request, response: Response, next: NextFunction) => Response
}