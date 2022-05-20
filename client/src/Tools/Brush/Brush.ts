import { IDraw } from "../draw.interface";
import { Tools } from "../Tools";

export default class Brush extends Tools implements IDraw{
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
      this.ctx?.lineTo(x, y)
      this.ctx?.stroke()
   }
}