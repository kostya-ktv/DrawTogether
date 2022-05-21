import React from 'react';
import Canvas from './Component/Canvas/Canvas';
import SettingBar from './Component/SettingBar/SettingBar';
import ToolBar from './Component/ToolBar/ToolBar';
import './Style/style.scss';

export const App = () => {
  return (
    <div className='app'>
      <div>
        <ToolBar/>
        <SettingBar/>
      </div> 
      <Canvas/>
    </div>
  );
}
