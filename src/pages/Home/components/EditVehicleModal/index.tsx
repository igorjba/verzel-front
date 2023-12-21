import axios from 'axios';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useContextSelector } from 'use-context-selector';
import { VehicleData } from '../../../../@types/vehicle';
import { VehicleContext } from '../../../../store/contexts/vehicleListContext';
import { CloseIcon, EditVehicleContainer, EditVehicleContent, EditVehicleForm, EditVehicleFormTitle, EditVehicleInputBrand, EditVehicleInputBrandLabel, EditVehicleInputModel, EditVehicleInputModelLabel, EditVehicleInputName, EditVehicleInputNameLabel, EditVehicleInputPhoto, EditVehicleInputPhotoLabel, EditVehicleInputValue, EditVehicleInputValueLabel, EditVehicleSubmitButton, ErrorMessage } from './styles';

export const EditVehicleModal = ({ vehicleId }: { vehicleId: string }) => {
    const updateVehicle = useContextSelector(VehicleContext, (context) => context.updateVehicle);
    const setShowModal = useContextSelector(VehicleContext, (context) => context.setShowModal);
    const [vehicle, setVehicle] = useState<VehicleData | null>(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchVehicle = async () => {
            try {
                const response = await axios.get(`http://localhost:3333/vehicles/${vehicleId}`);
                setVehicle(response.data);
            } catch (error) {
                console.error('Erro ao carregar dados do veículo:', error);
                setErrorMessage('Erro ao carregar dados do veículo');
            }
        };
        fetchVehicle();
    }, [vehicleId]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (vehicle) {
                await updateVehicle(vehicleId, vehicle);
            }
            setShowModal('none');
        } catch (error) {
            console.error('Erro ao atualizar veículo:', error);
            setErrorMessage('Erro ao atualizar veículo');
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (vehicle) {
            setVehicle({ ...vehicle, [e.target.name]: e.target.value });
        }
    };


    const closeModal = () => {
        setShowModal('none');
    };

    if (!vehicle) {
        return <div>Carregando...</div>;
    }

    return (
        <EditVehicleContainer onClick={closeModal}>
            <EditVehicleContent onClick={(e) => e.stopPropagation()}>
                <CloseIcon onClick={closeModal} weight='bold'></CloseIcon>
                <EditVehicleForm onSubmit={handleSubmit}>
                    <EditVehicleFormTitle>Cadastrar Veículo</EditVehicleFormTitle>
                    <div>
                        <EditVehicleInputNameLabel htmlFor="name">Nome <span>*</span></EditVehicleInputNameLabel>
                        <EditVehicleInputName type="text" placeholder="Nome" name="name" required value={vehicle?.name} onChange={handleChange} />
                    </div>
                    <div>
                        <EditVehicleInputBrandLabel htmlFor="brand">Marca <span>*</span></EditVehicleInputBrandLabel>
                        <EditVehicleInputBrand type="text" placeholder="Marca" name="brand" required value={vehicle?.brand} onChange={handleChange} />
                    </div>
                    <div>
                        <EditVehicleInputModelLabel htmlFor="model">Modelo <span>*</span></EditVehicleInputModelLabel>
                        <EditVehicleInputModel type="text" placeholder="Modelo" name="model" required value={vehicle?.model} onChange={handleChange} />
                    </div>
                    <div>
                        <EditVehicleInputValueLabel htmlFor="value">Valor <span>*</span></EditVehicleInputValueLabel>
                        <EditVehicleInputValue type="number" placeholder="Valor" name="value" required value={vehicle?.value} onChange={handleChange} />
                    </div>
                    <div>
                        <EditVehicleInputPhotoLabel htmlFor="photo">Foto</EditVehicleInputPhotoLabel>
                        <EditVehicleInputPhoto type="text" placeholder="Foto (URL)" name="photo" disabled value={vehicle?.photo} onChange={handleChange} />
                    </div>
                    {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                    <EditVehicleSubmitButton type="submit">Cadastrar Veículo</EditVehicleSubmitButton>
                </EditVehicleForm>
            </EditVehicleContent>
        </EditVehicleContainer>
    );
};
