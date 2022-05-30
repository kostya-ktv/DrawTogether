import './toolbar.style.scss';
import brush from '../../Assets/Icons/brush.svg';
import erase from '../../Assets/Icons/erase.svg';
import palette from '../../Assets/Icons/palette.svg';
import undo from '../../Assets/Icons/undo.svg';
import redo from '../../Assets/Icons/redo.svg';
import save from '../../Assets/Icons/save.svg';
import trash from '../../Assets/Icons/trash.svg';
import features from '../../Assets/Icons/features.svg';
import ToolBarService from './toolbar.service'
import SettingBar from '../SettingBar/SettingBar';
import FeaturePopUp from './FeaturePopUp/FeaturePopUp';
import canvasState from '../../Store/CanvasState/canvas.state';
import React, { useState } from 'react';

const ToolBar = () => {
  const [showFeatures, setShowFeatures] = useState<boolean>(false)
  const FeaturePopRef = React.createRef();

  return (
    <div className='toolBar'>
      <div style={{ display: 'flex' }}>
        <img 
         className='icon brush' 
         alt='brush' 
         src={brush}
         onClick={() => ToolBarService.pickInstrument('brush')} 
        />
        {/* <div>
          <img 
          className='icon features' 
          alt='features' 
          src={features}
          onClick={() => setShowFeatures(!showFeatures)} 
          />
          {showFeatures && <FeaturePopUp ref={FeaturePopRef} closer={setShowFeatures}/>}
        </div> */}
        <img 
         className='icon erase' 
         alt='erase' 
         src={erase} 
         onClick={() => ToolBarService.pickInstrument('eraser')} 
        />
        <input 
          type={'color'} 
          id='color-picker'
          onChange={(e) => ToolBarService.setColor(e)}
        />
        <img className='icon palette' alt='palette' src={palette} onClick={() => ToolBarService.callPalette()}/>
      </div>

      <div style={{ display: 'flex' }}>
        <img 
          className='icon undo' 
          alt='undo' 
          src={undo} 
          onClick={() => canvasState.undo()}
        />
        <img
          className='icon redo'
          alt='redo'
          src={redo}
          onClick={() => canvasState.redo()}
        />
        <img className='icon save' alt='save' src={save} onClick={() => ToolBarService.saveImage()}/>
        <img className='icon trash' alt='trash' src={trash} onClick={() => canvasState.clearCanvas()}/>
      </div>
      <SettingBar/>
    </div>
  );
};

export default ToolBar;
