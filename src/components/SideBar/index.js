import React from 'react'
import StickyBox from 'react-sticky-box'

import List from '../List'
import FollowSuggestion from '../FollowSuggestion'
import News from '../News'

import {
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body
} from './styles'

const SideBar = ()=>{
    return(
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Buscar no twitter" />
                <SearchIcon />
            </SearchWrapper>
            <StickyBox>
                <Body>
                    <List
                        Title="Talvez você curta"
                        elements={[
                            <FollowSuggestion
                                name="Desconhecido"
                                nickname="@desconhece"
                            />,

                            <FollowSuggestion
                                name="Testador"
                                nickname="@tester"
                            />,

                            <FollowSuggestion
                                name="HelloWorld"
                                nickname="@hw"
                            />
                        ]}
                    />

                    <List
                        Title="Talvez você curta"
                        elements={[
                            <News />,
                            <News />,
                            <News />
                        ]}
                    />
                </Body>
            </StickyBox>
        </Container>
    )
}

export default SideBar