import { Response } from "express";
export abstract class BaseController {

   constructor(){}

   protected ok<T>(response: Response, data?: T) {
      return this.send(response, 200, data)
   }
   protected send<T>(response: Response, code: number, data?: T) {
      return data ? response.status(code).json(data) : response.status(code).json({ok: code})
   }
}