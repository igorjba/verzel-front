import { CaretDown, FunnelSimple } from '@phosphor-icons/react';
import styled from 'styled-components';

interface StyledFunnelSimpleProps {
  isActive: boolean;
}


export const VehicleGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`

export const TooltipVehicleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 80.5rem;
  height: 100%;
`

export const FilterContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

  width: 100%;
  max-width: 27.5rem;

`;

export const FilterButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  font-weight: 700;

  cursor: pointer;
`;

export const StyledFunnelSimple = styled(FunnelSimple)<StyledFunnelSimpleProps>`
  color: ${(props) => props.theme['colors'].text.primary};
`;



export const RemoveFiltersContainer = styled.div`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

`;

export const RemoveFiltersButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;

  color: ${(props) => props.theme['colors'].text.secondary};

  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme['colors'].text.primary};
    text-decoration: underline;
  }
`;

export const ResultsText = styled.span`
  font-weight: 700;

  color: ${(props) => props.theme['colors'].text.secondary};
`;

export const SortDropdownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-weight: 700;
`;

export const SortText = styled.span`
  font-weight: 700;

 cursor: pointer;
`;

export const SortButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-weight: 700;

  cursor: pointer;

  color: ${(props) => props.theme['colors'].background.accent};
`;

export const StyledCaretDown = styled(CaretDown)`
  color: ${(props) => props.theme['colors'].background.accent};
`;

export const StyledVehicleGrid = styled.div`
  display: flex;

  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  width: 100%;
  max-width: 80.5rem;
  height: 100%;
  margin: 1rem 0 1rem 0;
`
export const VehicleCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 23%;

  border-radius: 10px;
  border: 1px solid ${(props) => props.theme['colors'].background.secondary};
`;

export const VehicleImage = styled.img`
width: 100%;
border-radius: 10px 10px 0 0;
padding: 0.5rem;

background-color: ${(props) => props.theme['colors'].background.light};
`;

export const VehicleName = styled.div`
display: flex;
align-items: center;
justify-content: center;

`;

export const VehicleBrand = styled.div`
display: flex;
align-items: center;
justify-content: center;

font-weight: 700;
`;

export const VehicleValue = styled.div`
display: flex;
align-items: center;
justify-content: center;

width: 100%;
border-top: 1px solid ${(props) => props.theme['colors'].background.secondary};

font-weight: 700;
`;

