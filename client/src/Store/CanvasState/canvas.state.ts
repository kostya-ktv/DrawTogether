import { makeAutoObservable } from "mobx";
import { ICanvasState } from "./canvas.interface";

class CanvasState implements ICanvasState{
   canvas: HTMLCanvasElement | undefined
   undoList: Array<any> = []
   redoList: Array<any> = []

   constructor(){
      makeAutoObservable(this)
   }
   setCanvas(canvas: HTMLCanvasElement) {
      this.canvas = canvas
   }
   pushToRedoList(snap: any) {
      this.redoList.push(snap)
   }
   pushToUndoList(snap: any) {
      this.undoList.push(snap)
   }
   redo() {
      let ctx = this.canvas?.getContext("2d")
      if(this.redoList.length) {
         let lastSnap = this.redoList.pop()
         this.undoList.push(this.canvas?.toDataURL())
         let img = new Image()
         img.src = lastSnap
         img.onload = () => {
            ctx?.clearRect(0, 0, this.canvas!.width, this.canvas!.height)
            ctx?.drawImage(img, 0, 0, this.canvas!.width, this.canvas!.height)
         }
      }
   }
   undo() {
      let ctx = this.canvas?.getContext("2d")
      if(this.undoList.length) {
         let lastSnap = this.undoList.pop()
         this.redoList.push(this.canvas?.toDataURL())
         let img = new Image()
         img.src = lastSnap
         img.onload = () => {
            ctx?.clearRect(0, 0, this.canvas!.width, this.canvas!.height)
            ctx?.drawImage(img, 0, 0, this.canvas!.width, this.canvas!.height)
         }
      } else {
         ctx?.clearRect(0, 0, this.canvas!.width, this.canvas!.height)
      }
   }
   clearCanvas() {
      const context = this.canvas?.getContext('2d');
      context!.clearRect(0, 0, this!.canvas!.width, this!.canvas!.height);
   }
}

export default new CanvasState()

