import canvasState from "../../Store/CanvasState/canvas.state"

export const keepCurrentCanvasState = (e: any) => {
   canvasState.pushToUndoList(e.target.toDataURL())
} 