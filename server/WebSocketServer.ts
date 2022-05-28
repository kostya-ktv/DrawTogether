import WS from "express-ws"
import { App } from "./app";
import RouterWS from "express-ws";
import { Router } from "express"


export class WebSocketServer {
   private _WSServer: WS.Application = WS(App.getInstance()._app).app
   static wsRouter: RouterWS.Router = Router()

   private constructor(){
      WebSocketServer.wsRouter.ws('/', (ws, req) => {
         ws.on('message', (msg: String) => {
             ws.send(msg);
         });
     });
   }

}

