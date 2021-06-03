import React from 'react';

import PrincipalButton from '../../components/Buttons/PrincipalButton/PrincipalButton'

import logo from '../../assets/svgs/logo.svg'

import './styles.css'

export const Wellcome = () => {
    return (
        <div className="first-page">
          <div className="title"><h1>Web Paiol</h1></div>
          <img className="logo" src={logo} alt="Logo" />
          <PrincipalButton to="/login"  text="Entrar"></PrincipalButton>
        </div>
    )
}

export default Wellcome;
