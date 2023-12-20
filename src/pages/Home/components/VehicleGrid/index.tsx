import { PencilSimpleLine, TrashSimple } from '@phosphor-icons/react';
import { useEffect } from 'react';
import fiatLight from "../../../../assets/fiat.svg";
import { useAuth } from '../../../../store/contexts/authContext';
import { useVehiclesList } from '../../../../store/hooks/useVehicleList';
import { DeleteVehicleButton, EditVehicleButton, FilterButton, FilterContainer, RemoveFiltersButton, RemoveFiltersContainer, ResultsText, SortButton, SortDropdownContainer, SortText, StyledCaretDown, StyledFunnelSimple, StyledVehicleGrid, TooltipVehicleContainer, VehicleAdminButtons, VehicleBrand, VehicleCard, VehicleGridContainer, VehicleImage, VehicleName, VehicleValue } from './styles';


export function VehicleGrid() {
    const { vehicles, loadVehicles } = useVehiclesList();
    const { authData } = useAuth();

    useEffect(() => {
        if (vehicles === undefined) {
            loadVehicles(1, 9, '');
        }
    }, [vehicles, loadVehicles]);

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
                                <EditVehicleButton><PencilSimpleLine size={24} /></EditVehicleButton>
                                <DeleteVehicleButton><TrashSimple size={24} /></DeleteVehicleButton>
                            </VehicleAdminButtons>
                        )}
                        <VehicleImage src={fiatLight} alt={"SuperFast"} />
                        <VehicleBrand>{vehicle.brand} {vehicle.model}</VehicleBrand>
                        <VehicleName>{vehicle.name}</VehicleName>
                        <VehicleValue>R$<span>{vehicle.value}</span></VehicleValue>
                    </VehicleCard>
                ))}
            </StyledVehicleGrid>
        </VehicleGridContainer>
    );
}
