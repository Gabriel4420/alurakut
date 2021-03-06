import { Main } from 'next/document'
import styled from 'styled-components'

const MainGrid = styled.main`
  width: 100%;

  grid-gap: 10px;
  margin: 0 auto;
  max-width: 800px;
  padding: 16px;
  .profileArea {
    display: grid;
    @media (min-width: 860px) {
      display: block;
    }
  }
  @media (min-width: 860px) {
    max-width: 1110px;
    display: grid;
    grid-template-areas: 'profileArea welcomeArea profileRelationsArea';
    grid-template-columns: 160px 1fr 312px;
  }
`

export default MainGrid
