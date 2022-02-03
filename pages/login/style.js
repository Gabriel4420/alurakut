import styled from 'styled-components'

const LoginScreenArea = styled.div`
  padding: 16px;
  max-width: 1110px;
  display: grid;
  --gap: 12px;
  --gutter: 16px;
  grid-gap: var(--gap);
  grid-template-areas:
    'logoArea'
    'formArea'
    'footerArea';

  @media (min-width: 860px) {
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      'logoArea formArea'
      'logoArea formArea'
      'footerArea footerArea';
  }

  .formArea {
    grid-area: formArea;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    .box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: var(--gutter);
      padding-left: 50px;
      padding-right: 50px;
      background-color: ${(props) => props.theme.colors.backgroundSecondary};
      border-radius: ${(props) => props.theme.border.commonRadius};
      flex: 1;
      &:not(:last-child) {
        margin-bottom: var(--gap);
      }
      &:first-child {
        min-height: 224px;
        @media (min-width: 860px) {
          min-height: 282px;
        }
      }
      p {
        font-size: 14px;
      }
      a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.colorPrimary};
      }
      input {
        width: 100%;
        display: block;
        border: 1px solid ${(props) => props.theme.colors.textQuarternaryColor};
        padding: 12px;
        background-color: ${(props) => props.theme.colors.backgroundTertiary};
        border-radius: ${(props) => props.theme.border.commonRadius};
        margin-top: 24px;
        margin-bottom: 16px;
      }
      button {
        width: 100%;
        display: block;
        border: 0;
        padding: 12px;
        border-radius: ${(props) => props.theme.border.commonRadius};
        background-color: ${(props) => props.theme.colors.colorPrimary};
        color: var(--textSecondaryColor);
      }
    }
  }
  .footerArea {
    grid-area: footerArea;
    background-color: ${(props) => props.theme.colors.backgroundQuartenary};
    border-radius: ${(props) => props.theme.border.commonRadius};
    padding: 8px;
    p {
      font-size: 12px;
      text-align: center;
      a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.colorPrimary};
      }
    }
  }
`


export default LoginScreenArea

