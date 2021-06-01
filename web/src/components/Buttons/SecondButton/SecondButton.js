import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export const SecondButton = (props) => {
  return (
    <div>
      <Link to={props.to}>
        <button className="second-button">{props.text}</button>
      </Link>
    </div>
  )
}

export default SecondButton;
