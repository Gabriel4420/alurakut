import styled from 'styled-components';

const LogoArea = styled.section`
  grid-area: logoArea;
  background-color: ${(props) => props.theme.colors.backgroundTertiary};
  border-radius: ${(props) => props.theme.border.commonRadius};
  padding: var(--gutter);
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 263px;
  @media (min-width: 860px) {
    min-height: 368px;
  }
  p {
    font-size: 12px;
    line-height: 1.2;
    &:not(:last-child) {
      margin-bottom: 12px;
    }
    strong {
      color: ${(props) => props.theme.colors.colorQuartenary};
    }
  }
  img {
    max-height: 45px;
    margin-bottom: 36px;
  }
`

export default LogoArea