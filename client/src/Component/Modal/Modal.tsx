import React, { useRef, useState } from 'react'
import userState from '../../Store/UserState/user.state'
import './modal.style.scss'

type Props = {}

const Modal = (props: Props) => {
   const [show, setShow] = useState<boolean>(true)
   const inputName = useRef(null)

   const clickHandler = () => {
      setShow(false)
      //@ts-ignore
      userState.setUserName(inputName.current.value)
   }

  return show ? (
    <div className='blur'>
       <div className='modal'>
          <span>Your name</span>
          <input type="text" ref={inputName}/>
          <button onClick={clickHandler}>ENTER</button>
       </div>
    </div>
  ) : null
}

export default Modal