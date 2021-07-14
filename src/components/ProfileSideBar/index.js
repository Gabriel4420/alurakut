import React from 'react';

import Box from '../Box';

const ProfileSideBar = (props) => {

    

    return (
        <Box >
          <img style={{borderRadius:'8px'}} src={`https://github.com/${props.githubUserName}.png`} />
        </Box>
    )
}

export default ProfileSideBar;
