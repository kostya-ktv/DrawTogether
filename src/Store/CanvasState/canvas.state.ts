import { makeAutoObservable } from "mobx";
import { ICanvasState } from "./canvas.interface";

class CanvasState implements ICanvasState{
   canvas: HTMLCanvasElement | undefined
   constructor(){
      makeAutoObservable(this)
   }
   setCanvas(canvas: HTMLCanvasElement) {
      this.canvas = canvas
   }
}

export default new CanvasState()

