import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color:#D9E6F6;
    font-family:sans-serif;
  }

  #__next {
    display:flex;
    min-height:100vh;
    flex-direction:column;
  }

  img{
    max-width:100%;
    height:auto;
    display:block;

  }

  *::-webkit-scrollbar {
    width: 8px;
  }
  *::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  *::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
  *::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  a,
  button {
    cursor: pointer;
    transition: 0.3s;
    outline: 0;
    &:hover,
    &:focus {
      opacity: 0.8;
    }
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
  input {
    transition: 0.3s;
    outline: 0;
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
    &:hover,
    &:focus {
      box-shadow: 0px 0px 5px #33333357;
    }
  }

`
const theme = {
  colors: {
    backgroundSecondaryColor: '#F1F9FE',
    backgroundDefaultColor: '#D9E6F6',
    primaryTextColor: '#2E7BB4',
    secondaryTextColor: '#388BB0',
    tertiaryTextColor: '#2F4A71',
    primaryElementColor: '#6F92BB',
    anotherElementColor: '#5579A1',
    downScaleGreyOne: '#333333',
    downScaleGreyTwo: '#5A5A5A',
    downScaleGreyThree: '#999999',
    downScaleGreyFour: '#C5C6CA',
    downScaleGreyFive: '#F4F4F4',
    backgroundPrimary: '#d9e6f6',
    backgroundSecondary: '#f1f9fe',
    backgroundTertiary: '#ffffff',
    backgroundQuarternary: '#bbcde8',
    colorPrimary: '#2e7bb4',
    colorSecondary: '#388bb0',
    colorTertiary: '#2f4a71',
    colorQuarternary: '#d81d99',
    textPrimaryColor: '#333333',
    textSecondaryColor: '#ffffff',
    textTertiaryColor: '#5a5a5a',
    textQuarternaryColor: '#c5c6ca',
  },
  border: {
    commonRadius: '8px',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
