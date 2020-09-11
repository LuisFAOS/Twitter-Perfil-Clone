import React from 'react'

import { 
    Container, 
    Item, 
    Title 
} from './styles'

const List = props => {
    return (
        <Container>
            <Item>
                <Title>
                    {props.Title}
                </Title>
            </Item>
            {props.elements.map((element, index)=> {
                return (
                    <Item key={index}>
                        {element}
                    </Item>
                )
            })}
        </Container>
    )
}

export default List