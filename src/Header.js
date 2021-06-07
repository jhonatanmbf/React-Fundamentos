import React, {useContext} from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

import {ThemeContext} from './ThemeContext'
import styles from './Header.scss'

export default function Header( props ){
  const {onToggleTheme} = useContext(ThemeContext);

  return (
    <>
      <h1 className={styles.title}>{props.title}</h1>
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