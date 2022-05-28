import express, { urlencoded } from 'express'
import { URL_API } from './global.constants'
import { RootRouter } from './src/Router/root.router'
import { Logger } from './src/Service/Logger/logger.service'
import { WebSocketServer } from './WebSocketServer'

export class App {
   private static _instance: App
   public _app = express()
   private _root_router = new RootRouter().getRouter()
   private _port = process.env.SERVER_PORT
   private _log = Logger.getInstance()
 
   private constructor(){}

   public static getInstance(): App {
      if (!App._instance)  App._instance = new App();
      return App._instance;
  }

   public run() {
      this._toUse()
      this._app.listen( this._port, () => this._log.success(`server running on port: ${this._port}`))
   }

   private _toUse() {
      this._app.use(urlencoded())
      this._app.use(URL_API, this._root_router)
      this._app.use("/ws-server", WebSocketServer.wsRouter);
   }
}