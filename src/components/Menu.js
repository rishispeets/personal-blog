import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Header = styled.header`
  background: ${props => props.theme.colors.base};
  width: 100%;
  padding: 1.5em 0;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
  }

  a {
    text-decoration: none;
    color: rgb(102,102,102);
    font-weight: 600;
    transition: all 0.2s;
    border-bottom: 2px solid ${props => props.theme.colors.base};
    &:hover {
      text-decoration-line: underline;
    }
  }
`

const activeLinkStyle = {
  color: 'darkgrey',
}

const Menu = () => {
  return (
    <Header>
      <Nav>
        <ul>
          <li>
            <Link to="/" style={{color: 'black'}}>
              Rishi Speets
            </Link>
          </li>
          <li>
            <Link to="/projects/" activeStyle={activeLinkStyle}>
              projects
            </Link>
          </li>
          <li>
            <Link to="/about/" activeStyle={activeLinkStyle}>
              about
            </Link>
          </li>
          <li>
            <Link to="/now/" activeStyle={activeLinkStyle}>
              now
            </Link>
          </li>
          <li>
            <Link to="/contact/" activeStyle={activeLinkStyle}>
              contact
            </Link>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
