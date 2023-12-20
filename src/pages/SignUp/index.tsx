import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { publicApi } from '../../lib/axios';
import { useUserSignUp } from '../../store/contexts/userSignUpContext';
import { AdminCheckboxContainer, AdminCheckboxInput, AdminCheckboxLabel, ErrorMessage, SignUpButton, SignUpContainer, SignUpContent, SignUpEmailInput, SignUpEmailInputContainer, SignUpEmailInputLabel, SignUpForm, SignUpFormContainer, SignUpFormTitle, SignUpImageContainer, SignUpNameInput, SignUpNameInputContainer, SignUpNameInputLabel, SignUpPasswordInput, SignUpPasswordInputContainer, SignUpPasswordInputLabel, SuccessMessage } from './styles';

export function SignUp() {
  const { signUpData, setSignUpData } = useUserSignUp();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowSuccessMessage(false);
    setErrorMessage('');

    try {
      const response = await publicApi.post('/register', {
        name: signUpData.name,
        email: signUpData.email,
        password: signUpData.password,
        role: signUpData.role,
      });
      setShowSuccessMessage(true);
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      setErrorMessage('Erro ao cadastrar usuário.');
    }
  };

  return (
    <SignUpContainer>
      <Header />
      <SignUpContent>
        <SignUpImageContainer />
        <SignUpFormContainer>
          <SignUpForm onSubmit={handleSubmit}>
            <SignUpFormTitle>Cadastre-se</SignUpFormTitle>
            <SignUpNameInputContainer>
              <SignUpNameInputLabel htmlFor="nome">Nome:</SignUpNameInputLabel>
              <SignUpNameInput
                id="nome"
                type="text"
                value={signUpData.name}
                required
                onChange={(e) => setSignUpData({ ...signUpData, name: e.target.value })}
                placeholder="Nome"
              />
            </SignUpNameInputContainer>

            <SignUpEmailInputContainer>
              <SignUpEmailInputLabel htmlFor="email">E-mail:</SignUpEmailInputLabel>
              <SignUpEmailInput
                id="email"
                type="email"
                value={signUpData.email}
                required
                onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                placeholder="E-mail"
              />
            </SignUpEmailInputContainer>

            <SignUpPasswordInputContainer>
              <SignUpPasswordInputLabel htmlFor="senha">Senha:</SignUpPasswordInputLabel>
              <SignUpPasswordInput
                id="senha"
                type="password"
                value={signUpData.password}
                required
                onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                placeholder="Senha"
              />
            </SignUpPasswordInputContainer>

            <AdminCheckboxContainer>
              <AdminCheckboxLabel htmlFor="admin">Admin:</AdminCheckboxLabel>
              <AdminCheckboxInput
                type="checkbox"
                id="admin"
                checked={signUpData.role === 'ADMIN'}
                onChange={(e) => setSignUpData({ ...signUpData, role: e.target.checked ? 'ADMIN' : 'USER' })}
              />
            </AdminCheckboxContainer>
            {showSuccessMessage && <SuccessMessage>Usuário cadastrado com sucesso!</SuccessMessage>}
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <SignUpButton type="submit">Cadastrar</SignUpButton>
          </SignUpForm>
        </SignUpFormContainer>
      </SignUpContent>
    </SignUpContainer>
  );
}
