import { useState , useEffect} from 'react';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import ProfileSidebar from '../src/components/ProfileSideBar';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AluraKutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'
import ProfileRelationsBox from '../src/components/ProfileRelationsBox';

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

  const [comunities, setComunities] = useState([]);


  const handleForm = (e) => {

    e.preventDefault();


    const dadosDoForm = new FormData(e.target);

    const objComunity = {
      
      title: dadosDoForm.get('Title'),
      imageUrl: dadosDoForm.get('image'),
      create_slug : githubUserName
    }

    fetch('/api/comunities',{
      method:'POST',
      headers: {
        'content-type': 'application/json'
      },
      body:JSON.stringify(objComunity)
    }).then(async (res) => {
      const data = await res.json();
      console.log(data)
      const datoComunitiesPersistency = data.createdAtRegister;
      const updatedComunities = [...comunities, datoComunitiesPersistency];
      setComunities(updatedComunities);
    })

    //spreads
    

  }

  const token = '5477287a44cc769ef54e366c34fcc8';
  //0 - pegar o array de dados do github
const [followers,setFollowers] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users/${githubUserName}/followers`)
    .then((res) => {
      return res.json()
    }).then((resConv) => {
      setFollowers(resConv);
    });
    //API GraphQL
    fetch('https://graphql.datocms.com/',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        query: 'query{ allCommunities { id title imageUrl createSlug } }'
      })
    },
    ).then((resp) => resp.json())
    .then((respComplete) => {
      const comunitiesDato = respComplete.data.allCommunities;
      setComunities(comunitiesDato)
      console.log(comunitiesDato)
    })

  },[])


  //1 - Criar um box que vai ter um map, baseado nos items do array
  //que pegamos do github.




  return (
    <>
      <AlurakutMenu githubUser={`${githubUserName}`} />
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
         
          <ProfileRelationsBox title="Seguidores" item={followers}/>
        
          
          <ProfileRelationsBoxWrapper>
            <h3>Comunidades ({comunities.length}) </h3>
            <ul>
              {comunities.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual.title}`}  >
                      <img src={`${itemAtual.imageUrl}`} alt="Imagem de Perfil do usuário" />
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
