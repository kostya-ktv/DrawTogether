import React, { useState } from 'react'
import './settingBar.style.scss'
import menuIcon from "../../Assets/Icons/menu.svg"
import RangeInput from './RangeInput'
import { DEFAULT_BRUSH_SIZE_MAX, DEFAULT_BRUSH_SIZE_MIN, DEFAULT_SHADOW_SIZE_MIN } from '../../constants'

const SettingBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const openSettingsBarHandler = () => {
    setIsOpen(!isOpen)
    document.querySelector('.settingBar')?.classList.toggle('open')
  }

  return (
    <div className='settingBar'>
      <img src={menuIcon} alt="menu" onClick={openSettingsBarHandler}/>
      {isOpen && 
        <div className='content'>
          <RangeInput min={DEFAULT_BRUSH_SIZE_MIN} max={DEFAULT_BRUSH_SIZE_MAX} title="brush" type='size-brush'/>
          <RangeInput min={DEFAULT_SHADOW_SIZE_MIN} max={DEFAULT_SHADOW_SIZE_MIN} title="shadow" type='shadow-size'/>
        </div>
      }
    </div>
  )
}

export default SettingBar