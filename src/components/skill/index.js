import React from 'react'
import tw from 'twin.macro'

export default ({level, name}) => <Skill>Lv {level}: {name}</Skill>

const Skill = tw.p`text-xs font-mono`