import React from 'react'
import tw from 'twin.macro'
import { Link } from 'gatsby'

export default () => (
  <Header>
    <Container>
      <Title to='/'> Roll for Shoes </Title>
    </Container>
  </Header>
)

const Header = tw.header`bg-teal-700 py-4 shadow-lg`
const Container = tw.div`container mx-auto`
const Title = tw(Link)`block font-semibold text-teal-100 hover:text-white text-lg tracking-wider uppercase`
