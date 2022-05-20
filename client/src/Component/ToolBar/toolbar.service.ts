import canvasState from "../../Store/CanvasState/canvas.state";
import toolsState from "../../Store/ToolsState/tools.state";
import Brush from "../../Tools/Brush/Brush";
import Eraser from "../../Tools/Eraser/Eraser";
import { ToolsOptions } from "../../Tools/tools.interface";

export default class ToolBarService {
   private constructor(){}

   static pickTool(tool: ToolsOptions) {
      switch (tool) {
         case "brush": {
            toolsState.setTool(new Brush(canvasState.canvas as HTMLCanvasElement))
            break;
         }
         case "eraser": {
            toolsState.setTool(new Eraser(canvasState.canvas as HTMLCanvasElement))
            break;
         }
         default: break;
      }
      
   }
   static callPalette = () => {
      const palette = document.querySelector('#color-picker') as HTMLInputElement
      palette.click()
   }
}
