import React from 'react'
import Box from '../Box'
import { Wrapper } from './styles'
import nookies from 'nookies'
const ProfileSideBar = (props) => {
  const BASE_URL = 'http://alurakut.vercel.app/'
  const handleLogout = () => {
    nookies.destroy(null, 'USER_TOKEN')
    window.location.replace('/login')
  }
  return (
    <Box>
      <img
        style={{ borderRadius: '8px' }}
        src={`https://github.com/${props.githubUserName}.png`}
      />
      <hr />
      <p>
        <a
          className="boxLink"
          href={`https://github.com/${props.githubUserName}`}
        >
          @ {props.githubUserName}
        </a>
      </p>
      <hr />
      <Wrapper>
        <nav>
          <a href="/">
            <img src={`${BASE_URL}/icons/user.svg`} />
            Perfil
          </a>
          <a href="/">
            <img src={`${BASE_URL}/icons/book.svg`} />
            Recados
          </a>
          <a href="/">
            <img src={`${BASE_URL}/icons/camera.svg`} />
            Fotos
          </a>
          <a href="/">
            <img src={`${BASE_URL}/icons/sun.svg`} />
            Depoimentos
          </a>
        </nav>
        <hr />
        <nav>
          <a href="/">
            <img src={`${BASE_URL}/icons/plus.svg`} />
            GitHub Trends
          </a>
          <a onClick={handleLogout}>
            <img src={`${BASE_URL}//icons/logout.svg`} />
            Sair
          </a>
        </nav>
      </Wrapper>
    </Box>
  )
}

export default ProfileSideBar
