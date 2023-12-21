import styled from 'styled-components';
import footerLogoDark from '../../assets/logoDark.svg';
import footerLogoLight from '../../assets/logoLight.svg';

interface LogoContainerProps {
  theme: string;
}

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  background-color: ${(props) => props.theme['colors'].text.alertContrastReversed};
  color: ${(props) => props.theme['colors'].text.primary};

  @media (max-width: 992px){
    height: 3.5rem;
  }

`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  max-width: 80.525rem;
  height: 100%;
  padding: 2rem 0;
`;

export const TooltipContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-bottom: 2rem;

`;

export const LogoNavContainer = styled.div`
  display: flex;

  width: 100%;

`;

export const LogoContainer = styled.div<LogoContainerProps>`
  width: 100%;
  max-width: 9rem;
  
  background-image: url(${props => props.theme === 'dark' ? footerLogoDark : footerLogoLight});
  background-position-x: center;
  background-position-y: top;
  background-repeat: no-repeat;
  background-size: contain;

  cursor: pointer;
`;



export const FooterNavbar = styled.div`
  display: flex;
  align-items: center;
  gap: 7%;

  width: 100%;
  height: 100%;
  margin-right: 1rem;
  margin-left: 7%;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 1.16rem;
    border: none;

    cursor: pointer;

    background-color: ${(props) => props.theme['colors'].transparent.normal};
    color: ${(props) => props.theme['colors'].text.primaryReversed};

    &:hover {
      text-decoration: underline;

    }

    &:focus{
      border: none;
      box-shadow: none;
    }
  }
`;

export const NavFirstColumn = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
gap: 1rem;
`;

export const NavSecondColumn = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
gap: 1rem;

margin-left: 7%;
`;


export const FooterMediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  
  margin: 0 1rem 0 1rem;
  height: 100%;
`;

export const Line = styled.div`
width: 100%;
border-top: 1px solid ${(props) => props.theme['colors'].text.primaryReversed};
`;

export const FooterTermsAddressContainer = styled.div`
width: 100%;
`;

export const FooterTermsNavbar = styled.ul`
  display: flex;
  align-items: center;
  gap: 2%;

  width: 100%;
  margin-top: 1.5rem;

  color: ${(props) => props.theme['colors'].text.primaryReversed};

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 1.16rem;
    border: none;

    cursor: pointer;

    background-color: ${(props) => props.theme['colors'].transparent.normal};
    color: ${(props) => props.theme['colors'].text.primaryReversed};

    &:hover {
      text-decoration: underline;

    }

    &:focus{
      border: none;
      box-shadow: none;
    }
  }
`;

export const FooterAddress = styled.div`
  display: flex;
  align-items: center;
  gap: 2%;

  width: 100%;
  margin-top: 1.5rem;

  color: ${(props) => props.theme['colors'].text.primaryReversed};
`;
