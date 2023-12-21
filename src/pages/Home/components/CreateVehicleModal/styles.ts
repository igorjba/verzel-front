import { X } from '@phosphor-icons/react';
import styled from 'styled-components';

export const CreateVehicleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    width: 100%;
    height: 100%;

    background: rgba(0, 0, 0, 0.5);
`;

export const CreateVehicleContent = styled.div`
    padding: 20px;
    border-radius: 10px;
    position: relative;

    max-width: 26rem;
    width: 100%;

    background-color: ${(props) => props.theme['colors'].background.primary};
`;

export const CloseIcon = styled(X)`
    position: absolute;
    top: 10px;
    right: 10px;

    width: 2rem;
    height: 2rem;

    cursor: pointer;

    color: ${(props) => props.theme['colors'].text.primary};
    `;

export const CreateVehicleFormTitle = styled.h1`
    color: ${(props) => props.theme['colors'].text.primary};
`;

export const CreateVehicleForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    label {
  color: ${(props) => props.theme['colors'].text.primary};
  font-weight: 500;
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

export const CreateVehicleInputNameLabel = styled.label``;

export const CreateVehicleInputName = styled.input``;

export const CreateVehicleInputBrandLabel = styled.label``;

export const CreateVehicleInputBrand = styled.input``;

export const CreateVehicleInputModelLabel = styled.label``;

export const CreateVehicleInputModel = styled.input``;

export const CreateVehicleInputValueLabel = styled.label``;

export const CreateVehicleInputValue = styled.input``;

export const CreateVehicleInputPhotoLabel = styled.label``;

export const CreateVehicleInputPhoto = styled.input``;

export const ErrorMessage = styled.div`
  align-self: center;
  text-align: center;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;

  background-color: ${(props) => props.theme['colors'].background.danger};
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

export const CreateVehicleSubmitButton = styled.button`
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    background-color: ${(props) => props.theme['colors'].background.accent};
    color: ${(props) => props.theme['colors'].text.primaryReversed};
`;


