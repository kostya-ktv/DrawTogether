import React from 'react';
import './toolbar.style.scss';
import brush from '../../Assets/Icons/brush.svg';
import erase from '../../Assets/Icons/erase.svg';
import palette from '../../Assets/Icons/palette.svg';
import undo from '../../Assets/Icons/undo.svg';
import redo from '../../Assets/Icons/redo.svg';
import save from '../../Assets/Icons/save.svg';
import ToolBarService from './toolbar.service'

const ToolBar = () => {
  return (
    <div className='toolBar'>
      <div style={{ display: 'flex' }}>
        <img 
         className='icon brush' 
         alt='brush' 
         src={brush}
         onClick={() => ToolBarService.pickTool('brush')} 
        />
        <img 
         className='icon erase' 
         alt='erase' 
         src={erase} 
         onClick={() => ToolBarService.pickTool('eraser')} 
        />
        <input type={'color'} id='color-picker' />
        <img className='icon palette' alt='palette' src={palette} onClick={ToolBarService.callPalette}/>
      </div>

      <div>
        <img className='icon undo' alt='undo' src={undo} />
        <img
          className='icon redo'
          alt='redo'
          src={redo}
        />
        <img className='icon save' alt='save' src={save} />
      </div>
    </div>
  );
};

export default ToolBar;
