import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 100%;
`

export const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  width: 100%;
  max-width: 80.5rem;
  height: 100%;
  margin: 1rem 0 1rem 0;

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

export const StyledTitle = styled.div`
  height: 100%;

  font-size: 1rem;
  text-transform: uppercase;
`


