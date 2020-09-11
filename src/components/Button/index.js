import React from 'react'
import ButtonStyled from './styles' 

const Button = props => <ButtonStyled outlined={props}>{props.children}</ButtonStyled>

export default Button;