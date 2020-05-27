import React, { useState } from 'react'
import tw from 'twin.macro'
import Card from '@layout/card'
import Editable from '@layout/editable'
import Skill from '@components/skill'

const dummySkills = [
  {
    level: 1,
    name: 'Do Nothing',
    subSkills: [
      {
        level: 2,
        name: 'Do Something',
        subSkills: [{ level: 3, name: 'Do Something Well', subSkills: [] }]
      },
      {
        level: 2,
        name: 'Do Another Thing',
        subSkills: [{ level: 3, name: 'Do Another Thing Well', subSkills: [] }]
      }
    ]
  }
]

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
        <Editable placeholder={name} />
      </Name>
      <Description>{description}</Description>
      <SkillsHeading>Skills</SkillsHeading>
      <Skills>
        {skills.map(skill => (
          <Skill key={skill} skill={skill} />
        ))}
      </Skills>
    </Sheet>
  )
}

const Sheet = tw(Card)``
const Name = tw.h3`flex items-center font-medium text-2xl`
const Description = tw.p``
const SkillsHeading = tw.h3`mt-2 text-gray-800 text-xs font-black font-mono uppercase`
const Skills = tw.ul``
