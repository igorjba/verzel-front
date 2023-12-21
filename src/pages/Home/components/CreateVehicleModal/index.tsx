import React, { useState } from 'react';
import { useContextSelector } from 'use-context-selector';
import { VehicleContext } from '../../../../store/contexts/vehicleListContext';
import { CloseIcon, CreateVehicleContainer, CreateVehicleContent, CreateVehicleForm, CreateVehicleFormTitle, CreateVehicleInputBrand, CreateVehicleInputBrandLabel, CreateVehicleInputModel, CreateVehicleInputModelLabel, CreateVehicleInputName, CreateVehicleInputNameLabel, CreateVehicleInputPhoto, CreateVehicleInputPhotoLabel, CreateVehicleInputValue, CreateVehicleInputValueLabel, CreateVehicleSubmitButton, ErrorMessage } from './styles';

export const CreateVehicleModal = () => {
    const setShowModal = useContextSelector(VehicleContext, (context) => context.setShowModal);
    const { createVehicle } = useContextSelector(VehicleContext, (context) => context);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage('');
        const formData = new FormData(e.currentTarget);
        const vehicleData = {
            name: formData.get('name') as string,
            brand: formData.get('brand') as string,
            model: formData.get('model') as string,
            value: Number(formData.get('value')),
            photoUrl: formData.get('photo') as string | undefined,
        };
        try {
            await createVehicle(vehicleData);
            setShowModal('none');
        }
        catch (error) {
            setErrorMessage('Erro ao cadastrar veículo');
        }
    };

    const closeModal = () => {
        setShowModal('none');
    };

    return (
        <CreateVehicleContainer onClick={closeModal}>
            <CreateVehicleContent onClick={(e) => e.stopPropagation()}>
                <CloseIcon onClick={closeModal} weight='bold'></CloseIcon>
                <CreateVehicleForm onSubmit={handleSubmit}>
                    <CreateVehicleFormTitle>Cadastrar Veículo</CreateVehicleFormTitle>
                    <div>
                        <CreateVehicleInputNameLabel htmlFor="name">Nome:</CreateVehicleInputNameLabel>
                        <CreateVehicleInputName type="text" placeholder="Nome" name="name" required />
                    </div>
                    <div>
                        <CreateVehicleInputBrandLabel htmlFor="brand">Marca:</CreateVehicleInputBrandLabel>
                        <CreateVehicleInputBrand type="text" placeholder="Marca" name="brand" required />
                    </div>
                    <div>
                        <CreateVehicleInputModelLabel htmlFor="model">Modelo:</CreateVehicleInputModelLabel>
                        <CreateVehicleInputModel type="text" placeholder="Modelo" name="model" required />
                    </div>
                    <div>
                        <CreateVehicleInputValueLabel htmlFor="value">Valor:</CreateVehicleInputValueLabel>
                        <CreateVehicleInputValue type="number" placeholder="Valor" name="value" required />
                    </div>
                    <div>
                        <CreateVehicleInputPhotoLabel htmlFor="photo">Foto:</CreateVehicleInputPhotoLabel>
                        <CreateVehicleInputPhoto type="text" placeholder="Foto (URL)" name="photo" disabled />
                    </div>
                    {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                    <CreateVehicleSubmitButton type="submit">Cadastrar Veículo</CreateVehicleSubmitButton>
                </CreateVehicleForm>
            </CreateVehicleContent>
        </CreateVehicleContainer>
    );
};
