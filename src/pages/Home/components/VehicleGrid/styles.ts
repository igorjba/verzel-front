import { CaretDown, FunnelSimple, MapPin } from '@phosphor-icons/react';
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
  position: relative;

  width: 23%;

  border-radius: 10px;
  border: 1px solid ${(props) => props.theme['colors'].background.secondary};

  transition: transform 0.1s, box-shadow 0.1s;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);

&:hover {
  transform: scale(1.005);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
}
`;

export const VehicleAdminButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  right: 0;

  width: 100%;

  border-radius: 10px 10px 0 0;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2rem;
    height: 2rem;
    border: none;

    cursor: pointer;

    transition: transform 0.1s, box-shadow 0.1s;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
    }

    &:active {
      transform: scale(0.9);
    }

    &:focus {
      border: none;
      box-shadow: none;
    }

  }
`;

export const EditVehicleButton = styled.button`
color: ${(props) => props.theme['colors'].background.accent};

`;

export const DeleteVehicleButton = styled.button`
color: ${(props) => props.theme['colors'].background.danger};
`;


export const VehicleImage = styled.img`
width: 100%;
border-radius: 10px 10px 0 0;
padding: 0.5rem;

background-color: ${(props) => props.theme['colors'].background.light};
`;

export const VehicleDataContainer = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;
padding: 0.5rem 1rem;

width: 100%;

`;

export const VehicleBrand = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;

font-weight: 700;
`;

export const VehicleName = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;

`;

export const VehicleValueContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 1rem;

width: 100%;
border-top: 1px solid ${(props) => props.theme['colors'].background.secondary};

`;

export const VehicleValueTitle = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;

width: 100%;


`;

export const VehicleValue = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;

width: 100%;

font-weight: 700;

h1 {
  font-size: 1.75rem;
}
`;

export const VehicleLocationContainer = styled.div`
display: flex;
justify-content: flex-start;
padding: 0.5rem 1rem;

width: 100%;
border-top: 1px solid ${(props) => props.theme['colors'].background.secondary};
`;

export const StyledMapPin = styled(MapPin)`
display: flex;
align-items: center;
justify-content: center;

width: .875rem;
height: .875rem;
margin-right: 0.5rem;

color: ${(props) => props.theme['colors'].text.secondary};
`;

export const VehicleLocation = styled.span`
display: flex;
align-items: center;
justify-content: center;

font-size: .875rem;
`;

