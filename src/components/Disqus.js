import React from 'react'
import Disqus from 'gatsby-plugin-disqus'
import { siteUrl } from '../utils/siteConfig'

export default function DisqusWrapper({ postId, postTitle }) {
  return (
    <Disqus
      identifier={postId}
      title={postTitle}
      url={`${siteUrl}${location.pathname}`}
    />
  )
}
