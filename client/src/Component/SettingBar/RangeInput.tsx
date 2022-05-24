import React, { FC,  useState } from 'react'
import { BrushSizeChanger, ShadowSizeChanger } from './settingBar.service'

type Props = {
   min: number
   max: number
   title: string
   type: 'size-brush' | 'shadow-size'
}

const RangeInput:FC<Props> = ({max, min, title, type}) => {
   const [inputValue, setInputValue] = useState<number>(10)

   const onChangeHandler = (e: any) => {
      setInputValue(Number(e.target.value))
      type === 'shadow-size' && ShadowSizeChanger(e.target.value)
      type === 'size-brush' && BrushSizeChanger(e.target.value)
   }

  return (
   <div className='box'>
      <h6>{title}: {inputValue}px</h6>
      <input 
      type={'range'} 
      value={inputValue} 
      min={min} 
      max={max} 
      onChange={onChangeHandler}
      />
 </div>
  )
}

export default RangeInput