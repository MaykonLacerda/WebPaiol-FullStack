import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export const PrincipalButton = (props) => {
  return (
    <div>
      <Link to={props.to}>
        <button className="principal-button" type="submit">{props.text}</button>
      </Link>
    </div>
  )
}

export default PrincipalButton;
