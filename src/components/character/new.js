import React from 'react'
import tw from 'twin.macro'
import EditableText from '@layout/editabletext'
import Skill from '@components/skill'

export default ({ onSubmit }) => {
  const name = <EditableText />

  return (
    <>
      <CharName>
        <CharNameLabel>Name: {name}</CharNameLabel>
      </CharName>
      <SkillsHeading>Skills</SkillsHeading>
      <Skill level="1" name="Do Nothing" />
      <CreateCharacterButton>Add Character</CreateCharacterButton>
    </>
  )
}

const CharName = tw.h3`flex items-center`
const CharNameLabel = tw.label`flex items-center`
const SkillsHeading = tw.h3`mt-2 text-gray-800 text-xs font-black font-mono uppercase`
const CreateCharacterButton = tw.button`mt-4 px-4 py-2 bg-gray-400 text-gray-800 text-xs font-black tracking-wide font-sans uppercase`
