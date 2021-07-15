import React, {useState,useEffect} from 'react';
import { ProfileRelationsBoxWrapper } from '../ProfileRelations';

const ProfileRelationsBox = (props) => {
    const [followers,setFollowers] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users/Gabriel4420/followers`)
    .then((res) => {
      return res.json()
    }).then((resConv) => {
      setFollowers(resConv);
    });

  },[])
    return (
     
          <ProfileRelationsBoxWrapper>
            <h3 style={{marginBottom:'20px'}}>{props.title} ({props.item.length}) </h3>
            
             <ul>
           
              {followers.slice(0,6).map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`https://github.com/${itemAtual.login}.png`}  >
                      <img src={`${itemAtual.avatar_url}`} alt="Imagem de Perfil do usuário" />
                      <span>{itemAtual.login}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper> 
    )
}

export default ProfileRelationsBox;
