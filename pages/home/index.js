import { useEffect, useState } from 'react'
import nookies from 'nookies'
import jwt from 'jsonwebtoken'
import MainGrid from '../../src/components/MainGrid'
import Box from '../../src/components/Box'
import ProfileSidebar from '../../src/components/ProfileSideBar'
import AlurakutMenu from '../../src/components/AluraKutMenu'
import { ProfileRelationsBoxWrapper } from '../../src/components/ProfileRelations'
import ProfileRelationsBox from '../../src/components/ProfileRelationsBox'
import OrkutNostalgicIconSet from '../../src/components/OrkutNostalgicIconSet'

export default function Home(props) {
  const githubUserName = props.githubUser
  const [comunities, setComunities] = useState([])

  const favoritePeoples = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho',
  ]
  const [followers, setFollowers] = useState([])
  // 0 - Pegar o array de dados do github
  const handleForm = (e) => {
    e.preventDefault()

    const dadosDoForm = new FormData(e.target)

    const objComunity = {
      title: dadosDoForm.get('Title'),
      imageUrl: dadosDoForm.get('image'),
      create_slug: githubUserName,
    }

    fetch('/api/comunities', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(objComunity),
    }).then(async (res) => {
      const data = await res.json()
      console.log(data)
      const datoComunitiesPersistency = data.createdAtRegister
      const updatedComunities = [...comunities, datoComunitiesPersistency]
      setComunities(updatedComunities)
    })
  }

  useEffect(() => {
    // GET
    fetch(`https://api.github.com/users/${githubUserName}/followers`)
      .then(function (respostaDoServidor) {
        return respostaDoServidor.json()
      })
      .then(function (respostaCompleta) {
        setFollowers(respostaCompleta)
      })

    const token = '5477287a44cc769ef54e366c34fcc8'
    // API GraphQL
    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: `query {
        allCommunities {
          id 
          title
          imageUrl
          createSlug 
        }
      }`,
      }),
    })
      .then((response) => response.json()) // Pega o retorno do response.json() e já retorna
      .then((respostaCompleta) => {
        const comunidadesVindasDoDato = respostaCompleta.data.allCommunities

        setComunities(comunidadesVindasDoDato)
      })
  }, [])

  return (
    <>
      <AlurakutMenu githubUser={`${githubUserName}`} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUserName={githubUserName} />
        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">Bem Vindo {githubUserName}</h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h3 className="subTitle">O que você deseja fazer ?</h3>
            <form onSubmit={handleForm}>
              <input
                placeholder="Qual vai ser o nome da sua comunidade ?"
                name="Title"
                aria-label="Qual vai ser o nome da sua comunidade ?"
                type="text"
              />
              <input
                placeholder="coloque uma url para usarmos de capa"
                name="image"
                aria-label="coloque uma url para usarmos de capa"
              />

              <button>Criar Comunidade</button>
            </form>
          </Box>
        </div>

        <div
          className="profileRelationsArea"
          style={{ gridArea: 'profileRelationsArea' }}
        >
          <ProfileRelationsBox
            title="Seguidores"
            item={followers}
            githubUser={githubUserName}
          />

          <ProfileRelationsBoxWrapper>
            <h3>Comunidades ({comunities.length}) </h3>
            <br />
            <ul>
              {comunities.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual.title}`}>
                      <img
                        src={`${itemAtual.imageUrl}`}
                        alt="Imagem de Perfil do usuário"
                      />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({favoritePeoples.length})
            </h2>

            <ul>
              {favoritePeoples.map((people) => {
                return (
                  <li key={people}>
                    <a href={`/users/${people}`}>
                      <img
                        src={`https://github.com/${people}.png`}
                        alt="Imagem de Perfil do usuário"
                      />
                      <span>{people}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}

export async function getServerSideProps(context) {
  const cookies = nookies.get(context)

  const token = cookies.USER_TOKEN

  const { isAuthenticated } = await fetch(
    'https://alurakut.vercel.app/api/auth',
    {
      headers: {
        Authorization: token,
      },
    },
  ).then((resposta) => resposta.json())

  if (!isAuthenticated) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  const { githubUser } = jwt.decode(token)

  return {
    props: {
      githubUser,
    }, // will be passed to the page component as props
  }
}
