import { IDraw } from "../draw.interface";
import { BaseInstrument } from "../BaseInstrument";
import toolsState from "../../Store/ToolsState/tools.state";

export default class Eraser extends BaseInstrument implements IDraw{
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
   mouseUpHandler() {
      this.mouseDown = false
   }
   mouseDownHandler(e: any) {
      this.mouseDown = true
      this.ctx?.beginPath()
      this.ctx?.moveTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
   }
   mouseMoveHandler(e: any) {
      if(this.mouseDown) {
         this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
      }
   }
   draw(x: number, y: number) {
      if(this.ctx !== null) {
         this.ctx.strokeStyle = 'white'
         this.ctx.shadowBlur = toolsState.shadowSize;
         this.ctx.shadowColor = 'white'
         this.ctx?.lineTo(x, y)
         this.ctx?.stroke()
         this.ctx.globalAlpha = 2;
         this.ctx.lineWidth = toolsState.brushSize;
      }
   }
}