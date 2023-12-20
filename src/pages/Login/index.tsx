import React from 'react';
import { useLogin } from '../../store/contexts/loginContext';
import { LoginContainer } from './styles';
import { Header } from '../../components/Header';

export function Login() {
  const { email, setEmail, password, setPassword, errorMessage, login } = useLogin();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await login();
  };

  return (
    <LoginContainer>
      <Header />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Entrar</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </LoginContainer>
  );
}

