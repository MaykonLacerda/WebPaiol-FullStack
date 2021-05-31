import React from 'react'

import PrincipalButton from '../../components/PrincipalButton/PrincipalButton'

import './styles.css'

export const Login = () => {
  return (
    <div className="wrapper login-page">
      <div className="login">
        <h2 className="title-login">Fazer login</h2>
        <input type="text" size="30"></input>
        <input type="text" size="30"></input>
        <p className="remember">Lembrar login</p>
        <div className="button-login">
          <PrincipalButton className="button-login" to="/home" text="Acessar"></PrincipalButton>
        </div>
        <p>ou</p>
      </div>
    </div>
  )
}

export default Login;
