export interface ICanvasState {
   canvas: HTMLCanvasElement | undefined
   undoList: Array<any>
   redoList: Array<any>
   setCanvas: (canvas: HTMLCanvasElement) => void

   pushToUndoList: Function
   pushToRedoList: Function
   undo: Function
   redo: Function

   clearCanvas: Function
}