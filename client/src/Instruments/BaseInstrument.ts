export abstract class BaseInstrument {
   protected canvas: HTMLCanvasElement;
   protected ctx: CanvasRenderingContext2D | null
   protected socket!: WebSocket
   protected sessionID!: string

   constructor(canvas: HTMLCanvasElement, socket: WebSocket, sessionID: string){
      this.canvas = canvas
      this.ctx = canvas.getContext("2d")
      this.deleteListeners()
      this.sessionID = sessionID
      this.socket = socket
   }
   deleteListeners() { 
      this.canvas.onmousemove = null
      this.canvas.onmouseup = null
      this.canvas.onmousedown = null
   }
}