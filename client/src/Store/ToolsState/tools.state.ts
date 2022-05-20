import { makeAutoObservable } from "mobx";
import { Tool } from "../../Tools/tools.interface";
import { IToolsState } from "./tools.interface";

class ToolState implements IToolsState{
   tool: Tool | undefined
   constructor(){
      makeAutoObservable(this)
   }
   setTool(tool: Tool) {
      this.tool = tool
   }
}

export default new ToolState()

