import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api';

import SecondButton from '../../components/Buttons/SecondButton/SecondButton'

import './styles.css'

function initialState() {
  return { banca: '', password: '' };
}

export const Login = () => {
  const [values, setValues] = useState(initialState);

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value
    })
  }

  return (
    <div className="wrapper login-page">
      <form method="post">
        <div className="login">
          <legend className="title-login">Fazer login</legend>
          <input type="text" placeholder="Nome da banca" name="banca" onChange={onChange} value={values.banca} />
          <input type="password" placeholder="Senha" name="password" onChange={onChange} value={values.password} />
          <label className="remember">
            <input type="checkbox" name="remember" /> <p>Lembrar acesso</p>
          </label>
          <div className="button-login">
            <Link to='/dashboard'>
              <button className="principal-button" type="submit">Acessar</button>
            </Link>
          </div>
          <p>ou</p>
          <div className="button-contact">
            <SecondButton className="button-login" to="/" text="Entrar em contato"></SecondButton>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login;
