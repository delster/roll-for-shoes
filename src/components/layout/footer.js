import React from 'react'
import tw from 'twin.macro'
import { FaGithubAlt, FaPaypal } from 'react-icons/fa'

export default () => (
  <Footer>
    <ThankYou>
      Built just for you, I hope you like it. Thanks for checking it out.
    </ThankYou>
    <SocialLink
      href="https://github.com/delster/roll-for-shoes"
      target="_blank">
      <FaGithubAlt />
      <SocialLabel>Source</SocialLabel>
    </SocialLink>
    <SocialLink href="https://www.paypal.me/davidelster" target="_blank">
      <FaPaypal />
      <SocialLabel>Donate</SocialLabel>
    </SocialLink>
  </Footer>
)

const ThankYou = tw.p`inline-block text-sm`
const Footer = tw.footer`flex container items-center justify-center mx-auto p-3`
const SocialLink = tw.a`inline-flex items-center ml-4 px-3 py-1 rounded-md font-semibold text-sm text-gray-700 bg-gray-400 shadow-md`
const SocialLabel = tw.span`ml-1`