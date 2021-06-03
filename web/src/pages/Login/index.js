import React from 'react'

import api from '../../services/api';

import PrincipalButton from '../../components/Buttons/PrincipalButton/PrincipalButton'
import SecondButton from '../../components/Buttons/SecondButton/SecondButton'

import './styles.css'

export const Login = () => {

  const teste = () => {
    api.get('/login').then(response => {
      const data = response.data;
      console.log(data[0].name)
    }).catch(err => {
      if(err) {
        console.log(err)
      }
    })
  }

  return (
    <div className="wrapper login-page">
      {teste()}
      <form method="post">
        <div className="login">
          <legend className="title-login">Fazer login</legend>
          <input type="text" placeholder="Nome da banca" name="banca"></input>
          <input type="password" placeholder="Senha" name="psw"></input>
          <label className="remember">
            <input type="checkbox" name="remember"/> <p>Lembrar acesso</p>
          </label>
          <div className="button-login">
            <PrincipalButton className="button-login" to="/home" text="Acessar"></PrincipalButton>
          </div>
          <p>ou</p>
          <div className="button-contact">
            <SecondButton className="button-login" to="/home" text="Entrar em contato"></SecondButton>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login;
