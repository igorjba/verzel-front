import { useContextSelector } from 'use-context-selector';
import { VehicleContext } from '../../../../store/contexts/vehicleListContext';
import { DeleteVehicleButtonsContainer, DeleteVehicleCancelButton, DeleteVehicleContainer, DeleteVehicleContent, DeleteVehicleFormTitle, DeleteVehicleSubmitButton } from './styles';


export const DeleteVehicleModal = ({ vehicleId }: { vehicleId: string }) => {
    const setShowModal = useContextSelector(VehicleContext, (context) => context.setShowModal);
    const deleteVehicle = useContextSelector(VehicleContext, (context) => context.deleteVehicle);

    const handleDelete = async () => {
        await deleteVehicle(vehicleId);
        setShowModal('none');
    };

    const closeModal = () => {
        setShowModal('none');
    };

    return (
        <DeleteVehicleContainer onClick={closeModal}>
            <DeleteVehicleContent onClick={(e) => e.stopPropagation()}>
                <DeleteVehicleFormTitle>Excluir Veículo</DeleteVehicleFormTitle>
                <DeleteVehicleButtonsContainer>
                    <DeleteVehicleCancelButton onClick={closeModal}>Cancelar</DeleteVehicleCancelButton>
                    <DeleteVehicleSubmitButton onClick={handleDelete}>Excluir Veículo</DeleteVehicleSubmitButton>
                </DeleteVehicleButtonsContainer>
            </DeleteVehicleContent>
        </DeleteVehicleContainer>
    );
};
