import styled from 'styled-components/macro'

export const App = styled.div`
  width: 100%;
  min-width: 100vw;
  height: fit-content;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.baseColor};
  display: flex;
  justify-content: center;
  align-items: center;
`