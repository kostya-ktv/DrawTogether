import { makeAutoObservable } from "mobx";
import { DEFAULT_COLOR } from "../../constants";
import { Instrument } from "../../Instruments/instrument.type";
import { IToolsState } from "./tools.interface";

class ToolState implements IToolsState{
   instrument: Instrument | undefined
   currentColor: string = DEFAULT_COLOR

   constructor(){
      makeAutoObservable(this)
   }
   setColor(color: string) {
      this.currentColor = color
   }
   setTool(tool: Instrument) {
      this.instrument = tool
   }
}

export default new ToolState()

