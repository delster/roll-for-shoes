import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const dummyRules = [
  'Say what you do and roll a number of d6s.',
  'If the sum of your roll is higher than the opposing roll, the thing you wanted to happen, happens.',
  'The number of d6s you roll is determined by the level of the skill you have.',
  'At start, you have only one skill: Do anything 1.',
  'If you roll all sixes, you get a new skill specific to the action, one level higher than the one you used.',
  'For every roll you fail, you get 1 XP.',
  'XP can be used to change a die into a 6 for advancement purposes only.'
]

export default () => (
  <Rules>
    <Heading>The Rules Are Simple:</Heading>
    <RuleList>
      {dummyRules.map((r, i) => (
        <Rule key={`Rule #${i + 1}`}>{`Rule #${i + 1}: ${r}`}</Rule>
      ))}
    </RuleList>
  </Rules>
)

const Rules = styled.aside`
  ${tw``};
`
const Heading = styled.h2``
const RuleList = styled.ul``
const Rule = styled.li``
