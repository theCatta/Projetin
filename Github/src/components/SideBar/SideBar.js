import React, { useState } from 'react'
import Combate from '../Combate/Combate'
import './SideBar.css'

const SideBar = () => {
  const [sid, setsid] = useState(false)
  const showsid = () => setsid(!sid)

  return (
    <div className="sideBar">
      <div className={sid ? 'sideBarA' : 'sideBarB'}>
        <button className="hide" onClick={showsid}></button>
        <div className="menu">
          <button href="#">Personagens</button>
          <button href="#">itens</button>
          <button href="#">Pactos</button>
          <Combate />
        </div>
        <button href="#">Seletor</button>
      </div>
    </div>
  )
}

export default SideBar
