import { CaretDown, CaretUp } from '@phosphor-icons/react';
import * as Avatar from '@radix-ui/react-avatar';
import * as Collapsible from '@radix-ui/react-collapsible';
import * as Switch from '@radix-ui/react-switch';
import styled from 'styled-components';
import headerLogoDark from '../../assets/logoDark.svg';
import headerLogoLight from '../../assets/logoLight.svg';

interface LogoContainerProps {
  theme: string;
}

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 5.26rem;

  background-color: ${(props) => props.theme['colors'].background.primary};

  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  @media (max-width: 992px){
    height: 3.5rem;
    }
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;  

  width: 100%;
  max-width: 80.5rem;
  height: 100%;
`

export const LogoContainer = styled.div<LogoContainerProps>`
  width: 100%;
  max-width: 9rem;
  height: 100%;

  background-image: url(${props => props.theme === 'dark' ? headerLogoLight : headerLogoDark});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  cursor: pointer;
`

export const TooltipContainer = styled.div`
  display: flex;
  align-self: flex-end;

  width: 100%;
  max-width: 45.5rem;
  height: 100%;
`

export const HeaderNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  height: 100%;
  margin-right: 1rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 1.16rem;
    border: none;

    cursor: pointer;

    background-color: ${(props) => props.theme['colors'].transparent.normal};
    color: ${(props) => props.theme['colors'].text.primary};

    &:hover {
      font-weight: 500;
    }

    &:focus{
      border: none;
      box-shadow: none;
    }
  }
`

export const BuyCarButton = styled.button`
`
export const SellCarButton = styled.button`

`
export const KavakAppButton = styled.button`

`

export const StyledCaretDown = styled(CaretDown)`
margin-left: 0.5rem;

color: ${(props) => props.theme['colors'].background.accent};
`

export const StyledCaretUp = styled(CaretUp)`
margin-left: 0.5rem;

color: ${(props) => props.theme['colors'].background.accent};
`

export const StyledCollapsibleRoot = styled(Collapsible.Root)`
position: relative;

`
export const StyledCollapsibleTrigger = styled(Collapsible.Trigger)`

button {
  margin-left: 0.5rem;
}

&.open {
    color: ${(props) => props.theme['colors'].background.accent};
  }

`

export const StyledCollapsibleContent = styled(Collapsible.Content)`
position: absolute;
top: 27px;
right: -3px;
z-index: 100;

padding: 1rem;
border-radius: .375rem;

background-color: ${(props) => props.theme['colors'].background.primary};
box-shadow: 0 .063rem .313rem #46464626,0 .125rem .125rem #46464626,0 .188rem .125rem -.125rem #46464626;

white-space: nowrap;
a {
  all: unset;

  &:hover {
    font-weight: 500;

    cursor: pointer;
  }
}
`
export const StyledCollapsibleItem = styled.div`


`

export const ToggleThemeButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  
  width: 100%;
  max-width: 2.75rem;
  height: 100%;
`
export const ToggleThemeSwitchRoot = styled(Switch.Root)`
  position: relative;

  width: 42px;
  height: 25px;
  border-radius: 9999px;

  background-color: ${(props) => props.theme['colors'].shadow.outline};
  box-shadow: 0 2px 10px var(--black-a7);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:focus {
  box-shadow: 0 0 0 2px ${(props) => props.theme['colors'].shadow.outline};
}

[data-state='checked'] & {
    background-color: black;
  }

`

export const ToggleThemeSwitchThumb = styled(Switch.Thumb)`
  display: block;

  width: 21px;
  height: 21px;
  border-radius: 9999px;

  background-color: ${(props) => props.theme['colors'].background.dark};
  box-shadow: 0 2px 2px var(--black-a7);

  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;

  cursor: pointer;

  [data-state='checked'] & {
    transform: translateX(16px);
  }

`

export const HeaderProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  
  margin: 0 1rem 0 1rem;
  height: 100%;
`

export const HeaderAvatarRoot = styled(Avatar.Root)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;

  overflow: hidden;
  user-select: none;
  width: 24px;
  height: 24px;
  border-radius: 100%;

  background-color: ${(props) => props.theme['colors'].text.primaryConstant};

`

export const HeaderAvatarImage = styled(Avatar.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;

`
export const HeaderAvatarFallback = styled(Avatar.Fallback)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: ${(props) => props.theme['colors'].background.light};
  color: ${(props) => props.theme['colors'].text.primaryConstant};

  font-size: 10px;
  line-height: 1;
  font-weight: 500;

`
export const SignUpButton = styled.button`
`
export const LoginButton = styled.button`

`
export const LogoutButton = styled.button`
`;



