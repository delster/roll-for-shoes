import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const dummyCharacter = {
  name: 'Blahblah Hoggins',
  description: 'Yes, he is _that_ Blahblah.',
  skills: ['skill 1', 'skill 2', 'skill 3']
}

export default ({ char }) => (
  <Character>
    <Name>{char.name}</Name>
    <Description>{char.description}</Description>
    <Skills>
      {char.skills.map(skill=><Skill key={skill} skill={skill} />)}
    </Skills>
  </Character>
)

const Character = styled.div`
  ${tw`mx-auto py-10 text-center`};
  background: red;
`
const Name = styled.span``
const Description = styled.p``
const Skills = styled.ul``
const Skill = styled.span`` /* TODO: import from folder */