import React from 'react'
import { RecoilRoot } from 'recoil'
import tw from 'twin.macro'
import Header from '@layout/header'
import Footer from '@layout/footer'

export default ({ children }) => (
    <RecoilRoot>
      <PageWrap>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </PageWrap>
    </RecoilRoot>
  )

const PageWrap = tw.div`flex flex-col h-full min-h-screen bg-gray-300`
const Main = tw.main`flex-auto container mx-auto my-4`
