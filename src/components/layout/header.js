import React from 'react'
import tw from 'twin.macro'

export default ({ siteTitle }) => (
  <Header>
    <HLeft>
      <Title> {siteTitle} </Title>
    </HLeft>
  </Header>
)

const Header = tw.header`bg-teal-700 py-4`
const HLeft = tw.div`container mx-auto`
const Title = tw.h1`text-teal-100 text-lg tracking-wider uppercase`
