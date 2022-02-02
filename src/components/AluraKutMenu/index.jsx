import * as AlurakutMenuItem from './styles'
import { useState } from 'react'

import NextLink from 'next/link'
import nookies from 'nookies'
const BASE_URL = 'http://alurakut.vercel.app/'

const AlurakutMenu = ({ githubUser }) => {
  const [isMenuOpen, setMenuState] = useState(false)
  const v = '1'
  const handleLogout = () => {
    nookies.destroy(null, 'USER_TOKEN')
    window.location.replace('/login')
  }
  const PersonalLink = ({ href, children, ...props }) => {
    return (
      <NextLink href={href} passHref>
        <a {...props}>{children}</a>
      </NextLink>
    )
  }
  return (
    <AlurakutMenuItem.Wrapper isMenuOpen={isMenuOpen}>
      <AlurakutMenuItem.Container>
        <AlurakutMenuItem.Logo src={`${BASE_URL}/logo.svg`} />

        <nav className="flex-1">
          {[
            { name: 'Inicio', slug: '/' },
            { name: 'Amigos', slug: '/amigos' },
            { name: 'Comunidades', slug: '/comunidades' },
          ].map((menuItem) => (
            <PersonalLink
              key={`key__${menuItem.name.toLocaleLowerCase()}`}
              href={`${menuItem.slug.toLocaleLowerCase()}`}
            >
              {menuItem.name}
            </PersonalLink>
          ))}
        </nav>

        <nav>
          <button onClick={handleLogout} className="btn_logout">
            Sair
          </button>
          <div>
            <input placeholder="Pesquisar no Orkut" />
          </div>
        </nav>

        <button onClick={() => setMenuState(!isMenuOpen)}>
          {isMenuOpen && <img src={`${BASE_URL}/icons/menu-open.svg?v=${v}`} />}
          {!isMenuOpen && (
            <img src={`${BASE_URL}/icons/menu-closed.svg?v=${v}`} />
          )}
        </button>
      </AlurakutMenuItem.Container>
    </AlurakutMenuItem.Wrapper>
  )
}

export default AlurakutMenu
