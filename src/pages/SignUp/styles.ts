import styled from 'styled-components'
import loginHero from '../../assets/login-hero.webp'

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 100%;
`

export const SignUpContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 80.5rem;
  min-height: calc(100vh - 5.26rem);

  @media (max-width: 992px){
  min-height: calc(100vh - 3.5rem);
    }
`;

export const SignUpImageContainer = styled.div`
  width: 50%;
  min-height: calc(100vh - 5.26rem);

  background-image: url(${loginHero});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 992px){
  min-height: calc(100vh - 3.5rem);
    }
`;

export const SignUpFormContainer = styled.div`
display: flex;
justify-content: center;

width: 50%;
min-height: calc(100vh - 5.26rem);

@media (max-width: 992px){
  min-height: calc(100vh - 3.5rem);
    }
`;

export const SignUpForm = styled.form`
display: flex;
flex-direction: column;
align-items: flex-start;  
gap: 1.5rem;

max-width: 26rem;
width: 100%;
margin-top: 9.25rem;

label {
  color: ${(props) => props.theme['colors'].text.primary};
  font-weight: 500;

  span {
    color: ${(props) => props.theme['colors'].background.danger};
    }
}

input {
  width: 100%;
  height: 2.5rem;
  padding: 0 0.5rem;

  border: 1px solid ${(props) => props.theme['colors'].background.medium};
  border-radius: 0.5rem;

  background-color: ${(props) => props.theme['colors'].transparent.normal};
  color: ${(props) => props.theme['colors'].text.primary};
}

`;

export const SignUpFormTitle = styled.h1`
  color: ${(props) => props.theme['colors'].text.primary};
`;

export const SignUpNameInputContainer = styled.div`
display: flex;
flex-direction: column;

width: 100%;
`;

export const SignUpNameInputLabel = styled.label`

`;

export const SignUpNameInput = styled.input`

`;

export const SignUpEmailInputContainer = styled.div`
display: flex;
flex-direction: column;

width: 100%;
`;

export const SignUpEmailInputLabel = styled.label`

`;

export const SignUpEmailInput = styled.input`

`;

export const SignUpPasswordInputContainer = styled.div`
display: flex;
flex-direction: column;

width: 100%;
`;

export const SignUpPasswordInputLabel = styled.label`

`;
export const SignUpPasswordInput = styled.input`

`;

export const AdminCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const AdminCheckboxLabel = styled.label`
`;

export const AdminCheckboxInput = styled.input`

`;

export const SuccessMessage = styled.div`
  align-self: center;
  text-align: center;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;

  background-color: ${(props) => props.theme['colors'].background.success};
  color: ${(props) => props.theme['colors'].background.light};

  border-radius: 0.5rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  transition: opacity 0.5s ease-in-out;
  opacity: 1;

  &.fade-out {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }
`;

export const ErrorMessage = styled(SuccessMessage)`
  background-color: ${(props) => props.theme['colors'].background.danger};
  color: ${(props) => props.theme['colors'].background.light};
`;

export const SignUpButton = styled.button`
  width: 100%;
  height: 3rem;

  border: none;
  border-radius: 0.5rem;

  background-color: ${(props) => props.theme['colors'].background.accent};
  color: ${(props) => props.theme['colors'].text.alertContrast};

  cursor: pointer;

  transition: background-color 0.2s;

  &:hover {
opacity: 0.9;
  }

  &:active {
    opacity: 0.8;
    width: 99.5%;
  }

`;