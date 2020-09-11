import React from 'react';

import ProfilePage from '../ProfilePage'

import { 
    Container, 
    Header, 
    BackIcon, 
    ProfileInfo,
    BottomMenu,
    HomeIcon, 
    SearchIcon,
    BellIcon,
    EmailIcon
} from './styles'

const Main = () => {
    return (
        <Container>
            <Header>
                <button>
                    <BackIcon />
                </button>

                <ProfileInfo>
                    <strong>
                        Luis FAOS
                    </strong>
                    <span>
                        0 Tweets
                    </span>
                </ProfileInfo>

                <BottomMenu>
                    <HomeIcon />
                    <SearchIcon />
                    <BellIcon />
                    <EmailIcon />
                </BottomMenu> 
            </Header>
            
            <ProfilePage/>
        </Container>
    )
}

export default Main