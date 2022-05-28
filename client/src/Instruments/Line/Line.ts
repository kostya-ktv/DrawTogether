import { IDraw } from "../draw.interface";
import { BaseInstrument } from "../BaseInstrument";
import toolsState from "../../Store/ToolsState/tools.state";

export default class Line extends BaseInstrument {
   mouseDown: boolean = false
   currentX: any
   currentY: any
   saved: any 

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
        this.currentX = e.pageX-e.target.offsetLeft
        this.currentY = e.pageY-e.target.offsetTop
        this.ctx!.beginPath()
        this.ctx!.moveTo(this.currentX, this.currentY )
        this.saved = this.canvas.toDataURL()
   }
   mouseMoveHandler(e: any) {
      if(this.mouseDown) {
         this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
      }
   }
   draw(x: any,y:any) {
      const img = new Image()
      img.src = this.saved
      img.onload = () => {
          this.ctx!.clearRect(0,0, this.canvas.width, this.canvas.height)
          this.ctx!.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
          this.ctx!.beginPath()
          this.ctx!.moveTo(this.currentX, this.currentY )
          this.ctx!.lineTo(x, y)
          this.ctx!.stroke()
      }

  }
}