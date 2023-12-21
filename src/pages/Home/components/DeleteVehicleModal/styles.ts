import styled from 'styled-components';

export const DeleteVehicleContainer = styled.div`
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

export const DeleteVehicleContent = styled.div`
    padding: 20px;
    border-radius: 10px;
    position: relative;

    max-width: 26rem;
    width: 100%;

    background-color: ${(props) => props.theme['colors'].background.primary};
`;


export const DeleteVehicleFormTitle = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;

    color: ${(props) => props.theme['colors'].text.primary};
`;

export const DeleteVehicleButtonsContainer = styled.h1`
display: flex;
justify-content: space-between;
align-items: center;
gap: 1rem;

max-width: 26rem;
width: 100%;
`;

export const DeleteVehicleSubmitButton = styled.button`
    width: 50%;
    padding: 10px;
    border: none;
    border-radius: 5px;

    cursor: pointer;

    background-color: ${(props) => props.theme['colors'].background.alert};
    color: ${(props) => props.theme['colors'].text.primaryReversed};

    &:hover {
        opacity: 0.9;
    }
`;

export const DeleteVehicleCancelButton = styled.button`
    width: 50%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    
    cursor: pointer;

    background-color: ${(props) => props.theme['colors'].background.accent};
    color: ${(props) => props.theme['colors'].text.primaryReversed};

    &:hover {
        opacity: 0.9;
    }
`;


