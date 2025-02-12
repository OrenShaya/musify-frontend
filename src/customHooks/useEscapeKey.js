// origin: keyholesoftware.com/cancel-a-react-modal-with-escape-key-or-external-click
import { useEffect, useCallback } from 'react'

const KEY_NAME_ESC = 'Escape'
const KEY_EVENT_TYPE = 'keyup'

export function useEscapeKey(handleClose) {
  const handleEscKey = useCallback(
    (event) => {
      if (event.key === KEY_NAME_ESC) {
        handleClose()
      }
    },
    [handleClose]
  )

  useEffect(() => {
    document.addEventListener(KEY_EVENT_TYPE, handleEscKey, false)

    return () => {
      document.removeEventListener(KEY_EVENT_TYPE, handleEscKey, false)
    }
  }, [handleEscKey])
}
