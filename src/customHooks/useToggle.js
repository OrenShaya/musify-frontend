import { useState } from 'react'

export function useToggle(initialState) {
  const [isOn, setIsOn] = useState(initialState)

  function onToggle(_isOn) {
    if (typeof _isOn === 'boolean') {
      setIsOn(_isOn)
    } else {
      setIsOn((isOn) => !isOn)
    }
  }

  return [isOn, onToggle]
}
