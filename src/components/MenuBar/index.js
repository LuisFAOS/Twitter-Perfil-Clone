import React from 'react'

import Button from '../Button/styles'

import { 
    Container,
    Topside, 
    Logo, 
    MenuButton,
    HomeIcon,
    BellIcon,
    ProfileIcon,
    EmailIcon,
    Botside,
    Avatar,
    ProfileData,
    ExitIcon,
    FavoriteIcon
} from './styles'

const MenuBar = () => {
    return (
        <Container>
            <Topside>
                <Logo />
                <MenuButton>
                    <HomeIcon />
                        <span>Página Inicial</span>
                </MenuButton>

                <MenuButton>
                    <BellIcon />
                        <span>Notificações</span>
                </MenuButton>

                <MenuButton>
                    <EmailIcon />
                        <span>Mensagens</span>
                </MenuButton>

                <MenuButton>
                    <FavoriteIcon />
                        <span>Favoritados</span>
                </MenuButton>

                <MenuButton className="active">
                    <ProfileIcon />
                        <span>Perfil</span>
                </MenuButton>

                <Button>
                    <span>Tweetar</span>
                </Button>
            </Topside>
            <Botside>
                <Avatar/>
                <ProfileData>
                    <strong>Luis FAOS</strong>    
                    <span>@luis_xfaos</span>    
                </ProfileData>
                <ExitIcon />
            </Botside> 
        </Container>
    )
}

export default MenuBar