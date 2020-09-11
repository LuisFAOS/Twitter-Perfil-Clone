import React from 'react'

import { 
    Container,
    Avatar,
    Info,
    FollowButton
} from './styles'

const FollowSuggestion = props => {
    return (
        <Container>
            <div>
                <Avatar />
                <Info>
                    <strong>{props.name}</strong>
                    <strong>{props.nickname}</strong>
                </Info>

            </div>
            <FollowButton outlined>
                Seguir
            </FollowButton>
        </Container>
    )
}

export default FollowSuggestion