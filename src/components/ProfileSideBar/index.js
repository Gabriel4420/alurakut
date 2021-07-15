import React from 'react';
import Box from '../Box';

import { AlurakutProfileSidebarMenuDefault } from '../../../src/lib/AluraKutCommons'

const ProfileSideBar = (props) => {

  return (
    <Box >
      <img style={{ borderRadius: '8px' }} src={`https://github.com/${props.githubUserName}.png`} />
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${props.githubUserName}`}>
          @ {props.githubUserName}
        </a>
      </p>
      <hr/>
      <AlurakutProfileSidebarMenuDefault />
    </Box>

  )
}

export default ProfileSideBar;
