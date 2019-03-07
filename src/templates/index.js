import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components';
import Layout from '../components/Layout'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import Pagination from '../components/Pagination'
import Author from '../components/Author'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'

const CardSectionHeading = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: black;
  text-align: center;
  padding: 1em;
`

// TODO: Extract card section into different component
const Index = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.edges
  const featuredPost = posts[0].node
  const { currentPage } = pageContext
  const isFirstPage = currentPage === 1

  return (
    <Layout>
      <SEO />
      {!isFirstPage && (
        <Helmet>
          <title>{`${config.siteTitle} - Page ${currentPage}`}</title>
        </Helmet>
      )}
      <Container>
        {isFirstPage ? (
          <Fragment>
            <Author />
            <CardSectionHeading>Recent Articles</CardSectionHeading>
            <CardList>
              <Card {...featuredPost} featured />
              {posts.slice(1).map(({ node: post }) => (
                <Card key={post.id} {...post} />
              ))}
            </CardList>
          </Fragment>
        ) : (
          <CardList>
            {posts.map(({ node: post }) => (
              <Card key={post.id} {...post} />
            ))}
          </CardList>
        )}
      </Container>
      <Pagination context={pageContext} />
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulPost(
      sort: { fields: [publishDate], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          body {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 80)
            }
          }
        }
      }
    }
  }
`

export default Index
