import { useEffect, useState } from 'react'

export const useClientSize = (myref) => {
  const [width, setWidth] = useState()
  const [height, setHeight] = useState()

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (!myref.current) return
      setWidth(myref.current.clientWidth)
      setHeight(myref.current.clientHeight)
    })

    observer.observe(myref.current)
    return () => {
      observer.disconnect()
    }
  })

  return [width, height]
}
