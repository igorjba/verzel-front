import { PencilSimpleLine, TrashSimple } from '@phosphor-icons/react';
import { useEffect } from 'react';
import fiatLight from "../../../../assets/fiat.svg";
import { useAuth } from '../../../../store/contexts/authContext';
import { useVehiclesList } from '../../../../store/hooks/useVehicleList';
import { DeleteVehicleButton, EditVehicleButton, FilterButton, FilterContainer, RemoveFiltersButton, RemoveFiltersContainer, ResultsText, SortButton, SortDropdownContainer, SortText, StyledCaretDown, StyledFunnelSimple, StyledMapPin, StyledVehicleGrid, TooltipVehicleContainer, VehicleAdminButtons, VehicleBrand, VehicleCard, VehicleDataContainer, VehicleGridContainer, VehicleImage, VehicleLocation, VehicleLocationContainer, VehicleName, VehicleValue, VehicleValueContainer, VehicleValueTitle } from './styles';


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
            </StyledVehicleGrid>
        </VehicleGridContainer>
    );
}
