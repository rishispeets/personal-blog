import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-flow: column wrap;
  margin: 0 auto;
  &::after {
    content: '';
    flex: 0 0 32%;
  }
`

const ArticleList = props => {
  return <List>{props.children}</List>
}

export default ArticleList
