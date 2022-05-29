import { WS_URL } from "../constants"
import Brush from "../Instruments/Brush/Brush"
import canvasState from "../Store/CanvasState/canvas.state"
import userState from "../Store/UserState/user.state"
import { MessageType } from "../types"
import HotKeyCaller from "../Util/EventsListeners"

export const WSConnector = (id: string) => {
   window.addEventListener('keydown', HotKeyCaller)
      const socket = new WebSocket(WS_URL)
      userState.setSocket(socket)
      userState.setSessionID(id)
      socket.onopen = () => {
         console.log('connection to server: successfully')
         socket.send(JSON.stringify({
            id: id, 
            userName: userState.name,
            method: 'connection'
         }))
      }
      socket.onmessage = (event: MessageEvent) => {
         let message: MessageType = JSON.parse(event.data)
         switch (message.method) {
            case 'connection':
               console.log(`user: ${message.userName} connected`)
               break;
            case 'draw':
               drawHandler(message)
               break;
         
            default:
               break;
         }
   }
}

const drawHandler = (msg: any) => {
   const figure = msg.figure
   const context: CanvasRenderingContext2D  = canvasState.canvas!.getContext("2d") as CanvasRenderingContext2D
   switch (figure.type) {
      case "brush":
         Brush.draw(context, figure.x, figure.y)
         break;
   
      default:
         break;
   }
}