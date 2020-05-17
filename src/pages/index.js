import React from 'react'
import tw from 'twin.macro'
import Layout from '@components/layout'
import Rules from '@components/rules'
import Game from '@components/game'
import SEO from '@utils/seo'

export default () => (
  <Layout>
    <SEO title="Roll for Shoes" />
    <RulesSection>
      <Rules />
    </RulesSection>
    <Game />
  </Layout>
)

const RulesSection = tw.div`container mx-auto`
