import React, { useState } from 'react'
import tw from 'twin.macro'
import Card from '@layout/card'
import Editable from '@layout/editable'
import Skill from '@components/skill'

export default ({ char }) => {
  const [name, setName] = useState(char.name ?? '')
  const [description, setDescription] = useState(char.description ?? '')
  const [skills, setSkills] = useState(char.skills ?? [])
  const handleNameChange = val => setName(val)
  const handleDescriptionChange = val => setDescription(val)
  const handleSkillsChange = val => setSkills(val)

  return (
    <Sheet>
      <Name>
        <NameLabel>
          <Editable placeholder={name} />
        </NameLabel>
      </Name>
      <Description>{description}</Description>
      <SkillsHeading>Skills</SkillsHeading>
      <Skill level="1" name="Do Nothing" />
      <Skills>
        {skills.map(skill => (
          <Skill key={skill} skill={skill} />
        ))}
      </Skills>
      <Created>{char.created}</Created>
    </Sheet>
  )
}

const Sheet = tw(Card)``
const Name = tw.h3`flex items-center`
const NameLabel = tw.label`flex items-center`
const Description = tw.p``
const SkillsHeading = tw.h3`mt-2 text-gray-800 text-xs font-black font-mono uppercase`
const Skills = tw.ul``
const Created = tw.span``