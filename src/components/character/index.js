import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

export default ({ char }) => {
  const [name, setName] = useState(char.name ?? '')
  const [description, setDescription] = useState(char.description ?? '')
  const [skills, setSkills] = useState(char.skills ?? [])
  const handleNameChange = val => setName(val)
  const handleDescriptionChange = val => setDescription(val)
  const handleSkillsChange = val => setSkills(val)

  return (
    <Character>
      <Name>{name}</Name>
      <Description>{description}</Description>
      <Skills>
        {skills.map(skill => (
          <Skill key={skill} skill={skill} />
        ))}
      </Skills>
    </Character>
  )
}

const Character = styled.div`
  ${tw`mx-auto py-10 text-center`};
  background: red;
`
const Name = styled.span``
const Description = styled.p``
const Skills = styled.ul``
const Skill = styled.span`` /* TODO: import from folder */
