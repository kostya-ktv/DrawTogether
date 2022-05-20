import { observer } from 'mobx-react-lite'
import React, {useEffect, useRef } from 'react'
import canvasState from '../../Store/CanvasState/canvas.state'
import toolsState from '../../Store/ToolsState/tools.state'
import Brush from '../../Tools/Brush/Brush'
import './canvas.style.scss'

const Canvas = () => {
   const canvasRef = useRef(null)

   useEffect(() => {
      canvasState.setCanvas(canvasRef.current as unknown as HTMLCanvasElement)
      toolsState.setTool(new Brush(canvasRef.current as unknown as HTMLCanvasElement))
   }, [])

   return (
      <div className='canvas-wrapper'>
         <canvas width={900} height={700} ref={canvasRef}/>
      </div>
   )

}

export default observer(Canvas) 
