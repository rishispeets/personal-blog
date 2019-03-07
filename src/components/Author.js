import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto auto;
  width: 100%;
  max-width: 550px;
  padding: 0 0 1em 0;
  display: flex;
  flex-flow: column nowrap;
`

const Heading = styled.h1`
  text-align: center;
  font-size: 2em;
  font-weight: bold;
  color: black;
`

const Description = styled.p`
    padding: 2em 0 1em 0;
    color: rgb(51,51,51)
`

export default function Author() {
  return (
    <Wrapper>
      <Heading>Hey, I'm Rishi! 👋</Heading>
      <Description>
        I'm a web developer from the Netherlands 🇳🇱. JavaScript and React are my bread and butter. In software, I value craftsmanship, teamwork, and attention to detail.
        <br/>
        <br/> 
        When I'm not looking at a screen, I'm probably reading or exploring the world. You can find some of the book notes that I've taken on this website.
      </Description>
    </Wrapper>
  )
}
