/* eslint-disable react/prop-types */
import { useState, cloneElement } from 'react'

export function HeadingTxt({
  children, // Expecting an <h1>...<h6> element
  length = 30,
  ellipsis = '...',
  collapseLabel = 'Less...',
  className = '',
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  function onToggle() {
    setIsExpanded((prev) => !prev)
  }

  function getTxtToShow(txt) {
    if (txt.length < length) return txt
    return isExpanded ? txt : txt.substring(0, length) + ellipsis
  }

  if (!children || !children.type || !/^h[1-6]$/.test(children.type)) {
    console.warn('HeadingTxt expects an <h1>...<h6> child element')
    return null
  }

  const txt = children.props.children
  const txtToShow = getTxtToShow(txt)

  return (
    <section className={`heading-text ${className}`}>
      {cloneElement(children, {}, txtToShow)}
      {txt.length > length && (
        <button onClick={onToggle}>{isExpanded ? collapseLabel : ''}</button>
      )}
    </section>
  )
}
