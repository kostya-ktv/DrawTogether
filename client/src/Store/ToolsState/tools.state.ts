import { makeAutoObservable } from "mobx";
import { Instrument } from "../../Instruments/instrument.interface";
import { IToolsState } from "./tools.interface";

class ToolState implements IToolsState{
   instrument: Instrument | undefined
   constructor(){
      makeAutoObservable(this)
   }
   setTool(tool: Instrument) {
      this.instrument = tool
   }
}

export default new ToolState()

