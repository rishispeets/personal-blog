import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Post = styled.li`
  position: relative;
  margin: 0 0 1em 0;
  width: 100%;
  transition: background 0.2s;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 32%')};
  }
  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: black;
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
      @media screen and (min-width: ${props => props.theme.responsive.small}) {
        padding-bottom: ${props => (props.featured ? '40%' : '60%')};
      }
    }
  }
`

const Title = styled.h2`
  font-size: 1.3em;
  font-weight: 600;
  text-transform: capitalize;
  margin: 1rem 1rem 0.5rem 1rem;
`

const Date = styled.h3`
  margin: 0 1rem 1.5rem 1rem;
  color: gray;
`

const Article = ({ slug, heroImage, title, publishDate, body, ...props }) => {
  return (
    <Post featured={props.featured}>
      <Date>{publishDate}</Date>
      <Link to={`/${slug}/`}>
        <Title>{title}</Title>
      </Link>
    </Post>
  )
}

export default Article
