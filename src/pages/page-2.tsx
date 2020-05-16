// Gatsby supports TypeScript natively!
import React from "react"
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = (props: PageProps) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2 ({props.path})</p>
    <Link to="/">Go back to the homepage</Link>
    <Flex>
      <p>hi</p>
    </Flex>
  </Layout>
)

const Flex = styled.div`
  ${tw`mx-auto py-10 text-center`};
  background:red;

`

export default SecondPage
