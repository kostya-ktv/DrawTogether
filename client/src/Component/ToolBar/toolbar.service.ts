import { ChangeEvent } from "react";
import Brush from "../../Instruments/Brush/Brush";
import Eraser from "../../Instruments/Eraser/Eraser";
import { InstrumentOptions } from "../../Instruments/instrument.type";
import canvasState from "../../Store/CanvasState/canvas.state";
import toolsState from "../../Store/ToolsState/tools.state";
import userState from "../../Store/UserState/user.state";

export default class ToolBarService {
   private constructor(){}

   static pickInstrument(instrument: InstrumentOptions) {
      switch (instrument) {
         case "brush": {
            toolsState.setTool(new Brush(
               canvasState.canvas, 
               userState.socket,
               userState.sessionID
            ))
            break;
         }
         case "eraser": {
            toolsState.setTool(new Eraser(
               canvasState.canvas, 
               userState.socket,
               userState.sessionID
            ))
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
      toolsState.setTool(new Brush(
         canvasState.canvas, 
         userState.socket,
         userState.sessionID
      ))
   }
   static saveImage = () => {
      const url = canvasState.canvas.toDataURL()
      const reference = document.createElement('a')
      reference.href = url
      reference.download = 'snapshot.jpg'
      document.body.appendChild(reference)
      reference.click()
      document.body.removeChild(reference)
   }
}
