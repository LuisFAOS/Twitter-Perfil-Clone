import React from 'react';

import { 
    Container, 
    Banner, 
    Avatar, 
    ProfileData, 
    LocationIcon, 
    CakeIcon, 
    EditButton,
    Followage 
} from './styles'

import Feed from '../Feed'

const ProfilePage = () => {
    return (
       <Container>
           <Banner>
               <Avatar/>
           </Banner>

           <ProfileData>
               <EditButton outlined>
                   Editar perfil
                </EditButton>
           
                <h1>Luis Felipe</h1>
                <h2>@luis_xfaos</h2>
                
                <p>
                    Developer at <a href="https://github.com/LuisFAOS">eu mesmo '0'</a>
                </p>

                <ul>
                    <li>
                        <LocationIcon />
                        São Paulo, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido(a) em 04 de fevereiro de 2003
                    </li>

                    <Followage>
                        <span>
                            seguindo <strong>0</strong>
                        </span>
                        <span>
                            <strong>0</strong> seguidores
                        </span>
                    </Followage>
                </ul>
           </ProfileData>
           <Feed/>  
       </Container> 
    )
}

export default ProfilePage