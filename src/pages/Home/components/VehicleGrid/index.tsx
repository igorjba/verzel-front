import { useEffect } from 'react';
import { useVehiclesList } from '../../../../store/hooks/useVehicleList';
import { FilterButton, FilterContainer, RemoveFiltersButton, RemoveFiltersContainer, ResultsText, SortButton, SortDropdownContainer, SortText, StyledCaretDown, StyledFunnelSimple, StyledVehicleGrid, TooltipVehicleContainer, VehicleBrand, VehicleCard, VehicleGridContainer, VehicleImage, VehicleName, VehicleValue } from './styles';
import fiatLight from "../../../../assets/fiat.svg";
export function VehicleGrid() {
    const { vehicles, loadVehicles } = useVehiclesList();

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
                        <VehicleImage src={fiatLight} alt={"SuperFast"} />
                        <VehicleBrand>{vehicle.brand} {vehicle.model}</VehicleBrand>
                        <VehicleName>{vehicle.name}</VehicleName>
                        <VehicleValue>R${vehicle.value.toFixed(2)}</VehicleValue>
                    </VehicleCard>
                ))}
            </StyledVehicleGrid>
        </VehicleGridContainer>
    );
}
