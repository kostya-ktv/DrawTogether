export abstract class BaseInstrument {
   protected canvas: HTMLCanvasElement;
   protected ctx: CanvasRenderingContext2D | null

   constructor(canvas: HTMLCanvasElement){
      this.canvas = canvas
      this.ctx = canvas.getContext("2d")
      this.deleteListeners()
   }
   deleteListeners() { 
      this.canvas.onmousemove = null
      this.canvas.onmouseup = null
      this.canvas.onmousedown = null
   }
}