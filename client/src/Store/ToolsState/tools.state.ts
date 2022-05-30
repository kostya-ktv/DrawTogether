import { makeAutoObservable } from "mobx";
import { DEFAULT_BRUSH_COLOR, DEFAULT_BRUSH_SIZE_MIN, DEFAULT_SHADOW_SIZE_MIN } from "../../constants";
import { Instrument } from "../../Instruments/instrument.type";
import { IToolsState } from "./tools.interface";

class ToolState implements IToolsState{
   instrument!: Instrument
   currentColor: string = DEFAULT_BRUSH_COLOR
   brushSize: number = DEFAULT_BRUSH_SIZE_MIN
   shadowSize: number = DEFAULT_SHADOW_SIZE_MIN

   constructor(){
      makeAutoObservable(this)
   }
   setColor(color: string) {
      this.currentColor = color
   }
   setTool(tool: Instrument) {
      this.instrument = tool
   }
   setBrushSize(size: number ) {
      this.brushSize = size
   }
   setShadowSize(shadow: number) {
      this.shadowSize = shadow
   }
}

export default new ToolState()

