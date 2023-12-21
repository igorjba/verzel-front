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
            <LoginEmailInputLabel htmlFor="email">E-mail <span>*</span></LoginEmailInputLabel>
            <LoginEmailInput
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <LoginPasswordInputLabel htmlFor="password">Senha <span>*</span></LoginPasswordInputLabel>
            <LoginPasswordInput
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <LoginButton type="submit">Entrar</LoginButton>
        </LoginForm>
      </LoginContent>
    </LoginContainer>
  );
}