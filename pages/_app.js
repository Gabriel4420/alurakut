import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AlurakutStyles } from '../src/lib/AluraKutCommons';
const GlobalStyle = createGlobalStyle`

  /* Reset CSS (Necolas Reset CSS ) */

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

  ${AlurakutStyles}
`
const theme = {
  colors: {
    backgroundSecondaryColor: '#F1F9FE',
    backgroundDefaultColor:'#D9E6F6',
    primaryTextColor: '#2E7BB4',
    secondaryTextColor: '#388BB0',
    tertiaryTextColor: '#2F4A71',
    primaryElementColor: '#6F92BB',
    anotherElementColor: '#5579A1',
    downScaleGreyOne:'#333333',
    downScaleGreyTwo:'#5A5A5A',
    downScaleGreyThree:'#999999',
    downScaleGreyFour:'#C5C6CA',
    downScaleGreyFive:'#F4F4F4'
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
