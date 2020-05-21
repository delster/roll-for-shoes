import React, { useReducer, useState, useEffect } from 'react'
import tw from 'twin.macro'
import { FaCheck, FaPencilAlt, FaTimes } from 'react-icons/fa'

const EditableTextModes = Object.freeze({
  Edit: 'EDIT',
  View: 'VIEW',
  Success: 'SUCCESS'
})
const EditableTextActions = Object.freeze({
  Cancel: 'CANCEL',
  Change: 'CHANGE',
  Save: 'SAVE',
  Start: 'START'
})

const EditableReducer = (state, { action, payload = {} }) => {
  console.log(
    `mode: ${state.mode}, text: ${
      state.text
    }, action: ${action}, payload: ${JSON.stringify(payload)}`
  )

  if (state.mode === EditableTextModes.Edit) {
    if (action === EditableTextActions.Change) {
      console.log(action)
      return { ...state, text: payload }
    }
    if (action === EditableTextActions.Save)
      return { ...state, mode: EditableTextModes.Success }
    if (action === EditableTextActions.Cancel)
      return { ...state, mode: EditableTextModes.View }
  }

  if (state.mode === EditableTextModes.View)
    if (action === EditableTextActions.Start)
      return { ...state, mode: EditableTextModes.Edit }

  if (state.mode === EditableTextModes.Success)
    if (action === EditableTextActions.Save)
      return { ...state, mode: EditableTextModes.View }

  return { ...state, mode: EditableTextModes.View }
}

export default props => {
  const { onSave } = props
  const initialState = {
    mode: EditableTextModes.View,
    text: ''
  }
  const [state, stateTo] = useReducer(EditableReducer, initialState)
  const handleEditing = e => {
    console.log(e.currentTarget.value)
    state.text = e.currentTarget.value
  }

  const handleSuccess = () => {
    if (onSave) onSave(state.text)
    stateTo(EditableTextActions.Save)
  }

  return (
    <>
      {state.mode === EditableTextModes.Edit && (
        <Input
          value={state.text}
          onChange={e=>stateTo({ action: EditableTextActions.Change, payload: e.currentTarget.value})}
        />
      )}
      {state.mode === EditableTextModes.View && state.text}
      {state.mode === EditableTextModes.Success && (
        <Success onClear={handleSuccess} />
      )}
      <Toggle mode={state.mode} dispatch={stateTo} />
    </>
  )
}

const Success = props => {
  const { onClear } = props
  const [seconds, setSeconds] = useState(5)

  useEffect(() => {
    let timer = setInterval(() => {
      setSeconds(seconds => seconds - 1)
    }, 1000)

    return () => {
      clearInterval(timer)
      onClear()
    }
  }, [seconds])

  return <span>Saving...</span>
}

const Toggle = props =>
  props.mode === EditableTextModes.Edit ? (
    <>
      <FaCheck
        tw="ml-2"
        onClick={() => props.dispatch({ action: EditableTextActions.Save })}
      />
      <FaTimes
        tw="ml-2"
        onClick={() => props.dispatch({ action: EditableTextActions.Cancel })}
      />
    </>
  ) : props.mode === EditableTextModes.View ? (
    <FaPencilAlt
      tw="ml-2"
      onClick={() => props.dispatch({ action: EditableTextActions.Start })}
    />
  ) : (
    <FaPencilAlt
      tw="ml-2"
      onClick={() => props.dispatch({ action: EditableTextActions.Start })}
    />
  )

const Input = tw.input`mx-2 px-2 py-1 shadow-sm rounded-sm`
