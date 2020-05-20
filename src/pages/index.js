import React from 'react'
import tw from 'twin.macro'
import Layout from '@components/layout'
import Rules from '@components/rules'
import Game from '@components/game'
import SEO from '@utils/seo'

export default () => (
  <Layout>
    <SEO title="Roll for Shoes" />
    <PageWrap>
      <RulesWrap>
        <Rules />
      </RulesWrap>
      <GameWrap>
        <Game />
      </GameWrap>
    </PageWrap>
  </Layout>
)

const PageWrap = tw.div`container mx-auto flex-row justify-between`
const RulesWrap = tw.aside`my-8`
const GameWrap = tw.main`my-8`
