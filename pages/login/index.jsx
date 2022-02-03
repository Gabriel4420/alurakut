import React, { useState } from 'react'
import LoginScreenArea from './style'
import LogoArea from './logoArea'
import { useRouter } from 'next/router'
import nookies from 'nookies'

export default function LoginScreen() {
  const router = useRouter()
  const [githubUser, setGitHubUser] = useState('')

  return (
    <main
      style={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <LoginScreenArea>
        <LogoArea>
          <img src="https://alurakut.vercel.app/logo.svg" />

          <p>
            <strong>Conecte-se</strong> aos seus amigos e familiares usando
            recados e mensagens instantâneas
          </p>
          <p>
            <strong>Conheça</strong> novas pessoas através de amigos de seus
            amigos e comunidades
          </p>
          <p>
            <strong>Compartilhe</strong> seus vídeos, fotos e paixões em um só
            lugar
          </p>
        </LogoArea>

        <section className="formArea">
          <form
            className="box"
            onSubmit={async (e) => {
              e.preventDefault()

              try {
                const userExist = await fetch(
                  `https://api.github.com/users/${githubUser}`,
                ).then((resp) => {
                  return resp.json()
                })

                if (userExist.message) {
                  alert('não existe este usuário no github')
                  return
                } else {
                  fetch('https://alurakut.vercel.app/api/login', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ githubUser: githubUser }),
                  }).then(async (response) => {
                    const dataResponse = await response.json()
                    const TOKEN = dataResponse.token
                    nookies.set(null, 'USER_TOKEN', TOKEN, {
                      path: '/',
                      maxAge: 86400 * 7,
                    })
                    router.push('/home')
                  })
                }
              } catch (e) {
                alert(e)
              }
            }}
          >
            <p>
              Acesse agora mesmo com seu usuário do <strong>GitHub</strong>!
            </p>
            <input
              placeholder="Usuário"
              value={githubUser}
              onChange={(e) => {
                setGitHubUser(`${e.target.value}`)
              }}
            />
            {githubUser.length === 0 ? 'Preencha o campo' : ''}
            <button type="submit">Login</button>
          </form>

          <footer className="box">
            <p>
              Ainda não é membro? <br />
              <a href="/login">
                <strong>ENTRAR JÁ</strong>
              </a>
            </p>
          </footer>
        </section>

        <footer className="footerArea">
          <p>
            © 2021 alura.com.br - <a href="/">Sobre o Orkut.br</a> -{' '}
            <a href="/">Centro de segurança</a> - <a href="/">Privacidade</a> -{' '}
            <a href="/">Termos</a> - <a href="/">Contato</a>
          </p>
        </footer>
      </LoginScreenArea>
    </main>
  )
}
