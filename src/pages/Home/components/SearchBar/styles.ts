import styled from 'styled-components'
import { MagnifyingGlass } from '@phosphor-icons/react';


export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 4rem;

  background-color: ${(props) => props.theme['colors'].background.accent};
`

export const StyledSearchContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 80.5rem;
  height: 3rem;

  input{
    position: relative;

    width: 100%;
    height: 100%;
    padding: 0 1rem 0 1rem;
    border: 1px solid ${(props) => props.theme['colors'].background.light};
    border-radius: 0.5rem;

    font-weight: 300;
    font-size: 1rem;
    line-height:1.5px;

    background-color: ${(props) => props.theme['colors'].background.input};
    color: ${(props) => props.theme['colors'].text.primary};
  }
`

export const StyledSearchIcon = styled(MagnifyingGlass)`
  position: absolute;
  right: 1rem;

  width: 26px;
  height: 26px;

  color: ${(props) => props.theme['colors'].background.medium};

  cursor: pointer;
`