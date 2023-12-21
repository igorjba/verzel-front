import { PencilSimpleLine, TrashSimple } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { useContextSelector } from 'use-context-selector';
import fiatLight from "../../../../assets/fiat.svg";
import { useAuth } from '../../../../store/contexts/authContext';
import { VehicleContext } from '../../../../store/contexts/vehicleListContext';
import { useVehiclesList } from '../../../../store/hooks/useVehicleList';
import { DeleteVehicleModal } from '../DeleteVehicleModal';
import { EditVehicleModal } from '../EditVehicleModal';
import { DeleteVehicleButton, EditVehicleButton, FilterButton, FilterContainer, RemoveFiltersButton, RemoveFiltersContainer, ResultsText, SortButton, SortDropdownContainer, SortText, StyledCaretDown, StyledFunnelSimple, StyledMapPin, StyledVehicleGrid, TooltipVehicleContainer, VehicleAdminButtons, VehicleBrand, VehicleCard, VehicleDataContainer, VehicleGridContainer, VehicleImage, VehicleLocation, VehicleLocationContainer, VehicleName, VehicleValue, VehicleValueContainer, VehicleValueTitle } from './styles';


export function VehicleGrid() {
    const { vehicles, loadVehicles } = useVehiclesList();
    const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>(null);
    const setShowModal = useContextSelector(VehicleContext, (context) => context.setShowModal);
    const showModal = useContextSelector(VehicleContext, (context) => context.showModal);
    const { authData } = useAuth();

    useEffect(() => {
        if (vehicles === undefined) {
            loadVehicles(1, 9, '');
        }
    }, [vehicles, loadVehicles]);

    const handleDeleteClick = (vehicleId: string) => {
        setSelectedVehicleId(vehicleId);
        setShowModal('delete');
    };

    const handleEditClick = (vehicleId: string) => {
        setSelectedVehicleId(vehicleId);
        setShowModal('edit');
    };

    return (

        <VehicleGridContainer>
            <TooltipVehicleContainer>
                <FilterContainer>
                    <FilterButton>
                        <StyledFunnelSimple size={24} weight='bold' />
                        Ocultar Filtros
                    </FilterButton>
                    <RemoveFiltersContainer>
                        <RemoveFiltersButton>
                            Remover filtros
                        </RemoveFiltersButton>
                        <ResultsText>
                            1.917 Resultados
                        </ResultsText>
                    </RemoveFiltersContainer>
                </FilterContainer>
                <SortDropdownContainer>
                    <SortText>Ordenar:</SortText>
                    <SortButton>
                        Relevância
                        <StyledCaretDown size={16} weight='bold' />
                    </SortButton>
                </SortDropdownContainer>
            </TooltipVehicleContainer>

            <StyledVehicleGrid>
                {vehicles?.map(vehicle => (
                    <VehicleCard key={vehicle.id}>
                        {authData?.user.role === 'ADMIN' && (
                            <VehicleAdminButtons>
                                <EditVehicleButton onClick={() => handleEditClick(vehicle.id)}>
                                    <PencilSimpleLine size={24} />
                                </EditVehicleButton>
                                <DeleteVehicleButton onClick={() => handleDeleteClick(vehicle.id)}>
                                    <TrashSimple size={24} />
                                </DeleteVehicleButton>
                            </VehicleAdminButtons>
                        )}
                        <VehicleImage src={fiatLight} alt={"SuperFast"} />
                        <VehicleDataContainer>
                            <VehicleBrand>{vehicle.brand} • {vehicle.model}</VehicleBrand>
                            <VehicleName>{vehicle.name}</VehicleName>
                        </VehicleDataContainer>
                        <VehicleValueContainer>
                            <VehicleValueTitle>Preço à vista</VehicleValueTitle>
                            <VehicleValue>
                                R$<h1>{vehicle.value}</h1>
                            </VehicleValue>
                        </VehicleValueContainer>
                        <VehicleLocationContainer>
                            <StyledMapPin size={24} weight='fill' />
                            <VehicleLocation>São Paulo - SP</VehicleLocation>
                        </VehicleLocationContainer>
                    </VehicleCard>
                ))}

                {showModal === 'delete' && selectedVehicleId && (
                    <DeleteVehicleModal vehicleId={selectedVehicleId} />
                )}
                {showModal === 'edit' && selectedVehicleId && (
                    <EditVehicleModal vehicleId={selectedVehicleId} />
                )}
            </StyledVehicleGrid>
        </VehicleGridContainer>
    );
}
