import React, { useState } from 'react'
import './settingBar.style.scss'
import menuIcon from "../../Assets/Icons/menu.svg"
import RangeInput from './RangeInput'

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
          <RangeInput min={10} max={30} title="brush" type='size-brush'/>
          <RangeInput min={10} max={30} title="shadow" type='shadow-size'/>
        </div>
      }
    </div>
  )
}

export default SettingBar