import { IDraw } from "../draw.interface";
import { BaseInstrument } from "../BaseInstrument";

export default class Brush extends BaseInstrument implements IDraw{
   mouseDown: boolean = false

   constructor(canvas: HTMLCanvasElement){
      super(canvas)
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
      if(this.ctx !== null){
         this.ctx?.lineTo(x, y)
         this.ctx?.stroke()
         this.ctx.globalAlpha = 2;
         this.ctx.lineWidth = 20;
      }
   }
}