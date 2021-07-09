import React, {useContext} from 'react'
import styled from 'styled-components';

import Button from '../Button'
import PropTypes from 'prop-types'

import {ThemeContext} from '../../context/ThemeContext'


const Title = styled.h1`
  color:#637bf3;
`;

export default function Header( props ){
  const {onToggleTheme} = useContext(ThemeContext);

  return (
    <>
      <Title>{props.title}</Title>
      <Button onClick={onToggleTheme}>
        Mudar tema
      </Button>
      {props.children}
    </>  
  )
};

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: `JStack's Blog`,
};