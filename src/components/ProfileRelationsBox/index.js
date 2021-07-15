import React from 'react';
import { ProfileRelationsBoxWrapper } from '../ProfileRelations';

const ProfileRelationsBox = (props) => {
    return (
     
          <ProfileRelationsBoxWrapper>
            <h3>{props.title} ({props.item.length}) </h3>
            <ul>
              {/* {followers.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`https://github.com/${itemAtual.login}.png`}  >
                      <img src={`${itemAtual.image}`} alt="Imagem de Perfil do usuário" />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })} */}
            </ul>
          </ProfileRelationsBoxWrapper> 
    )
}

export default ProfileRelationsBox;
