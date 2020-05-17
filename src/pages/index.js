import React from 'react'
import Layout from '@components/layout'
import SEO from '@utils/seo'
import Rules from '@components/rules'
import Game from '@components/game'

export default () => (
  <Layout>
    <SEO title="Roll for Shoes" />
    <Rules />
    <Game />
  </Layout>
)
