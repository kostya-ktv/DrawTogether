import cors from 'cors'
import express, { urlencoded } from 'express'
import { URL_API } from './global.constants'
import { RootRouter } from './src/Router/root.router'
import { Logger } from './src/Service/Logger/logger.service'
import WS from 'express-ws'
import WebSocket from 'ws'

export class App {
   private static _instance: App
   public _application = express()
   private _root_router = new RootRouter().getRouter()
   private _port = process.env.SERVER_PORT
   private _log = Logger.getInstance()
 
   private constructor(){}

   public static getInstance(): App {
      if (!App._instance)  App._instance = new App();
      return App._instance;
  }

   public run() {
      this._runWSServer()
      this._toUse()
      this._application.listen( this._port, () => this._log.success(`server running on port: ${this._port}`))
   }

   private _toUse() {
      this._application.use(cors())
      this._application.use(urlencoded())
      this._application.use(URL_API, this._root_router)
   }

   private _runWSServer() {
      const {app, applyTo, getWss } = WS(this._application)
      app.ws('/ws', (webSocket, req) => {
         const WSS = getWss()
         
         console.log('connected')
         //sending msg to client
         webSocket.send('Successfully connection')

         webSocket.on('message', (msg: any) => {
            
            const message: MessageType = JSON.parse(msg)
            switch(message.method){
               case 'connection':
                  connectionHandler(webSocket, message, WSS)
                  break;
               case 'draw':
                  broadcastConnection(WSS, message)
                  break;
            }
         })
     })
   }
}

type MessageType = {
   id: string,
   userName: string,
   method: 'connection' | 'draw'
}
const connectionHandler = (socket: any, message: MessageType, WSS: any) => {
   socket.id = message.id
   
   broadcastConnection(WSS, message)
}
const broadcastConnection = (wss: any, msg: MessageType) => {
   wss.clients.forEach((client:any) => {
      if(client.id === msg.id){
         client.send(JSON.stringify(msg))
      }
   })
}