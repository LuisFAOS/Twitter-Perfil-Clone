import React from 'react'

import { 
    Container,
    Retweeted, 
    RocketIcon,
    Body,
    Avatar,
    Content,
    Header,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon,
    Dot
} from './styles'

export const Tweet = () => {
    return (
        <Container>
            <Retweeted>
                <RocketIcon />
                Você retweetou
            </Retweeted>
            <Body>
                <Avatar />
                <Content>
                    <Header>
                        <strong>Gaules</strong>
                        <span>@alegaules</span>
                        <Dot />
                        <time>11 de set</time>
                    </Header>

                    <Description>
                        Siga seus sonhos e nunca desista!
                    </Description>

                    <ImageContent />
                    <Icons>
                        <Status>
                            <CommentIcon />592
                        </Status>

                        <Status>
                            <RetweetIcon />733
                        </Status>

                        <Status>
                            <LikeIcon />995
                        </Status>
                    </Icons> 
                </Content>
            </Body>
        </Container>
    )
}

export default Tweet