import React, { useState } from 'react'
import './Combate.css'

function Combate() {
  const [click, setclick] = useState(false)
  const showclick = () => setclick(!click)

  return (
    <>
      <div className="combate">
        <p>Combate</p>
        <button
          className={click ? 'miniA' : 'miniB'}
          onClick={showclick}
        ></button>
      </div>
      <div className={click ? 'dispA' : 'dispB'}></div>
    </>
  )
}

export default Combate
