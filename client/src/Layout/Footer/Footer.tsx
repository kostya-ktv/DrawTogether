import React from 'react'
import letsDraw from "../../Assets/Icons/logo.svg"
import { GIT_URL } from '../../constants'
import "./footer.style.scss"

const Footer = () => {
  return (
    <footer  onClick={() => window.open(GIT_URL, "_blank")}>
      <img src={letsDraw} alt="letDtw"/> ©2022 Lets Draw
    </footer>
  )
}

export default Footer