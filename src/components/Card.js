import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Post = styled.li`
  position: relative;
  border: 1px solid ${props => props.theme.colors.secondary};
  background-color: white;
  border-radius: 15px;
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
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    transition: 0.3s ease-in-out;
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

const Excerpt = styled.p`
  margin: 0 1rem 1rem 1rem;
  color: rgb(102, 102, 102);
  line-height: 1.6;
`

const Card = ({ slug, heroImage, title, publishDate, body, ...props }) => {
  return (
    <Post featured={props.featured}>
      <Link to={`/${slug}/`}>
        {heroImage && (
          <Img
            style={{ 'border-radius': '15px 15px 0 0' }}
            fluid={heroImage.fluid}
            backgroundColor={'#eeeeee'}
          />
        )}
        <Title>{title}</Title>
        <Date>{publishDate}</Date>
        <Excerpt
          dangerouslySetInnerHTML={{
            __html: body.childMarkdownRemark.excerpt,
          }}
        />
      </Link>
    </Post>
  )
}

export default Card
