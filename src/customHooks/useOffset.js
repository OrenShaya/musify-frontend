import { useEffect, useState } from 'react'

export const useOffset = (myref) => {
  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    if (myref.current) {
      setOffsetX(myref.current.offsetLeft)
      setOffsetY(myref.current.offsetTop)
    }
  }, [myref])

  return [offsetX, offsetY]
}
