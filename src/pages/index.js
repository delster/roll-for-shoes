import React from 'react'
import Layout from '@components/layout'
import RecoilGame from '@components/game.js'
// import Game from '@components/game'
import SEO from '@utils/seo'

export default () => (
  <Layout>
    <SEO title="Home" />
    {/* <Game /> */}
    <RecoilGame />
  </Layout>
)
