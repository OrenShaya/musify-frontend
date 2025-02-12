import { useEffect, useState } from 'react'

const confirmationMessage = 'You have unsaved changes. Continue?'

export function useConfirmTabClose() {
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)

  useEffect(() => {
    function handleBeforeUnload(ev) {
      if (hasUnsavedChanges) {
        ev.returnValue = confirmationMessage
        return confirmationMessage
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [hasUnsavedChanges])

  return setHasUnsavedChanges
}
