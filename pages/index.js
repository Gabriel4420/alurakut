import { useState } from 'react';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import ProfileSidebar from '../src/components/ProfileSideBar';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AluraKutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'


export default function Home() {

  const githubUserName = 'Gabriel4420';
 
  const favoritePeoples = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho',
    'filipedeschamps',
    'rocketseat'
  ]

  const [comunities, setComunities] = useState([{
    id: new Date().toISOString(),
    title:'Eu odeio acordar cedo',
    image:'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);


  const handleForm = (e) => {
    
    e.preventDefault();


    const dadosDoForm = new FormData(e.target);

    const objComunity = {
      id: '113412341234123',
      title: dadosDoForm.get('Title'),
      image: dadosDoForm.get('image')
    }

    //spreads
    const updatedComunities = [...comunities, objComunity];

    setComunities(updatedComunities);

  }
  return (
    <>
      <AlurakutMenu githubUser={`${githubUserName}`}/>
      <MainGrid>

        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUserName={githubUserName} />
        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box >
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

        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h3>Comunidades ({comunities.length}) </h3>
            <ul>
              {comunities.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual.title}`}  >
                      <img src={`${itemAtual.image}`} alt="Imagem de Perfil do usuário" />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper >
            <h2 className="smallTitle">Pessoas da comunidade ({favoritePeoples.length})</h2>
            
            <ul>
              {favoritePeoples.map((people) => {
                return (
                  <li key={people}>
                    <a href={`/users/${people}`}  >
                      <img src={`https://github.com/${people}.png`} alt="Imagem de Perfil do usuário" />
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
  );
}
