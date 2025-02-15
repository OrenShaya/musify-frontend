import { useEffect, useState } from 'react'

export function useHover(element) {
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    element = element.current
    if (!element) return
    function handleHover() {
      setIsHovered(true)
    }
    function handleUnhover() {
      setIsHovered(false)
    }

    element.addEventListener('mouseenter', handleHover)
    element.addEventListener('mouseleave', handleUnhover)

    return () => {
      element.removeEventListener('mouseenter', handleHover)
      element.removeEventListener('mouseleave', handleUnhover)
    }
  }, [])

  return isHovered
}
