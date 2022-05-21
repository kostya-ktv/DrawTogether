import { ChangeEvent } from "react";
import Brush from "../../Instruments/Brush/Brush";
import Eraser from "../../Instruments/Eraser/Eraser";
import { InstrumentOptions } from "../../Instruments/instrument.type";
import canvasState from "../../Store/CanvasState/canvas.state";
import toolsState from "../../Store/ToolsState/tools.state";

export default class ToolBarService {
   private constructor(){}

   static pickInstrument(instrument: InstrumentOptions) {
      switch (instrument) {
         case "brush": {
            toolsState.setTool(new Brush(canvasState.canvas as HTMLCanvasElement))
            break;
         }
         case "eraser": {
            toolsState.setTool(new Eraser(canvasState.canvas as HTMLCanvasElement))
            break;
         }
         case "features": {
            // toolsState.setTool(new Eraser(canvasState.canvas as HTMLCanvasElement))
            break;
         }
         default: break;
      }
      
   }
   static callPalette = () => {
      const palette = document.querySelector('#color-picker') as HTMLInputElement
      palette.click()
   }
   static setColor = (e: React.ChangeEvent<HTMLInputElement>) => {
      toolsState.setColor(e.target.value)
   }
}
