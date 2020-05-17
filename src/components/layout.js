import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Header from '@layout/header'
import Footer from '@layout/footer'

export default ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <PageWrap>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
      <Footer />
    </PageWrap>
  )
}

const PageWrap = styled.div`${tw`flex flex-col h-screen bg-gray-200`}`
const Main = styled.main`flex: 1 1 100%`