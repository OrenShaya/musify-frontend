import { useEffect, useState } from 'react'

export const useWidth = (myref) => {
  const [width, setWidth] = useState()

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      setWidth(myref.current.clientWidth)
    })

    observer.observe(myref.current)
    return () => {
      observer.disconnect()
    }
  })

  return width
}
