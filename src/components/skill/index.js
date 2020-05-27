import React from 'react'
import tw from 'twin.macro'

export default ({skill}) => <Skill>Lv {skill.level}: {skill.name}</Skill>

const Skill = tw.p`text-xs font-mono`