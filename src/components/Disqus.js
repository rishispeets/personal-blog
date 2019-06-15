import React from 'react'
import Disqus from 'gatsby-plugin-disqus'
import { siteUrl } from '../utils/siteConfig'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-bottom: 35px;
`

export default function DisqusWrapper({ postId, postTitle }) {
  return (
    <Wrapper>
      <Disqus
        identifier={postId}
        title={postTitle}
        url={`${siteUrl}${getPathname()}`}
      />
    </Wrapper>
  )
}

function getPathname() {
  if (typeof window !== `undefined`) return window.location.pathname
  else return ''
}
