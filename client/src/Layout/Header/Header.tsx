import React from 'react'
import SettingBar from '../../Component/SettingBar/SettingBar'
import ToolBar from '../../Component/ToolBar/ToolBar'
import "./header.style.scss"
type Props = {}

const Header = (props: Props) => {
  return (
    <div>
      <ToolBar/>
      <SettingBar/>
    </div>
  )
}

export default Header