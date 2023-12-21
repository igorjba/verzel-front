import React from 'react';
import { Header } from '../../components/Header';
import { useLogin } from '../../store/contexts/loginContext';
import { ErrorMessage, LoginButton, LoginContainer, LoginContent, LoginEmailInput, LoginEmailInputLabel, LoginForm, LoginFormTitle, LoginPasswordInput, LoginPasswordInputLabel } from './styles';

export function Login() {
  const { email, setEmail, password, setPassword, errorMessage, login } = useLogin();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await login();
  };

  return (
    <LoginContainer>
      <Header />
      <LoginContent>
        <LoginForm onSubmit={handleSubmit}>
          <LoginFormTitle>Entrar</LoginFormTitle>
          <div>
            <LoginEmailInputLabel htmlFor="email">E-mail</LoginEmailInputLabel>
            <LoginEmailInput
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <LoginPasswordInputLabel htmlFor="password">Senha</LoginPasswordInputLabel>
            <LoginPasswordInput
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <LoginButton type="submit">Entrar</LoginButton>
        </LoginForm>
      </LoginContent>
    </LoginContainer>
  );
}