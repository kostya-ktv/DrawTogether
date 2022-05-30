import { IDraw } from "../draw.interface";
import { BaseInstrument } from "../BaseInstrument";
import toolsState from "../../Store/ToolsState/tools.state";

export default class Brush extends BaseInstrument implements IDraw{
   mouseDown: boolean = false

   constructor(canvas: HTMLCanvasElement, socket: WebSocket, sessionID: string){
      super(canvas, socket, sessionID)
      this.listen()
   }
   listen() {
      this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
      this.canvas.onmouseup = this.mouseUpHandler.bind(this)
      this.canvas.onmousedown = this.mouseDownHandler.bind(this)
   }
   mouseUpHandler(e: any) {
      this.mouseDown = false
      this.socket.send(JSON.stringify({
         method: 'draw',
         id: this.sessionID,
         figure: {
            type: 'finish'
         }
      }))
   }
   mouseDownHandler(e: any) {
      this.mouseDown = true
      this.ctx?.beginPath()
      this.ctx?.moveTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
   }
   mouseMoveHandler(e: any) {
      if(this.mouseDown) {
         // this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
         this.socket.send(JSON.stringify({
            method: 'draw',
            id: this.sessionID,
            figure: {
               type: 'brush',
               x: e.pageX - e.target.offsetLeft,
               y: e.pageY - e.target.offsetTop
            }
         }))
      }
   }
   static draw(ctx: CanvasRenderingContext2D, x: number, y: number) {
      if(ctx !== null){
         ctx.strokeStyle = toolsState.currentColor
         ctx.shadowBlur = toolsState.shadowSize;
         ctx.shadowColor = toolsState.currentColor
         ctx?.lineTo(x, y)
         ctx?.stroke()
         ctx.globalAlpha = 2;
         ctx.lineWidth = toolsState.brushSize;
      }
   }
}