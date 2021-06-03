import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import StoreContext from '../../components/Store/Context';

import api from '../../services/api';

import SecondButton from '../../components/Buttons/SecondButton/SecondButton';

import './styles.css';

function initialState() {
  return { banca: '', password: '' };
}

function login({ banca, password }) {
  if(banca === 'admin' && password ==='admin'){
    return { token: '12345' };
  } else {
    return { error: "Usuário ou senha inválido" };
  }

}

export const Login = () => {
  const [values, setValues] = useState(initialState);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value
    })
  }

  function onSubmit(event) {
    event.preventDefault();

    const { token } = login(values);

    if(token) {
      setToken(token);
      return history.push('/dashboard');
    }

    setValues(initialState);
  }

  return (
    <div className="wrapper login-page">
      <form onSubmit={onSubmit}>
        <div className="login">
          <legend className="title-login">Fazer login</legend>
          <input id="banca "type="text" placeholder="Nome da banca" name="banca" onChange={onChange} value={values.banca} />
          <input id="password" type="password" placeholder="Senha" name="password" onChange={onChange} value={values.password} />
          <label className="remember">
            <input type="checkbox" name="remember" /> <p>Lembrar acesso</p>
          </label>
          <div className="button-login">

              <button className="principal-button" type="submit">Acessar</button>

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
