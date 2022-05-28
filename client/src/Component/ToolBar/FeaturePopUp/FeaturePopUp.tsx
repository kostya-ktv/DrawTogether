//@ts-nocheck
import React, { FC, useEffect } from 'react'
import line from "../../../Assets/Icons/line.svg"
import './featurePopUp.style.scss'

type Props = {
  closer: React.Dispatch<React.SetStateAction<boolean>>
  ref: any
}

const FeaturePopUp:FC<Props> = React.forwardRef((props, ref) => {
  const featureCloseListener = (e: MouseEvent) => {
    const popup = ref.current
    if(e.target !== popup) {
      props.closer(false)
      window.removeEventListener('mousedown', featureCloseListener)
    }
    
  }

  useEffect(() => {
    setTimeout(() => window.addEventListener('mousedown', featureCloseListener), 100)
  }, [])

  const clickHandler = () => {
    props.closer(false)
  }
  return (
    <div className='popup' ref={ref}>
      <div className='item-wrapper'>
        <img src={line} alt="line" onClick={clickHandler}/>
        <span>Line</span>
      </div>
       
   </div>
  )
})

export default FeaturePopUp
