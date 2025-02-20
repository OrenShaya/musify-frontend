/* eslint-disable react/prop-types */
import { useState } from 'react'

export function LongTxt({
  txt,
  length = 30,
  ellipsis = '...',
  expandLabel = 'More...',
  collapseLabel = 'Less...',
  className = '',
}) {
  const [isLongTxtShown, setIsLongTxtShown] = useState(false)

  function onToggleLongTxt() {
    setIsLongTxtShown((prev) => !prev)
  }

  function getTxtToShow() {
    if (txt.length < length) return txt
    return isLongTxtShown ? txt : txt.substring(0, length) + ellipsis
  }

  const txtToShow = getTxtToShow()
  return (
    <section className={`long-text ${className}`}>
      <p>{txtToShow}</p>
      {txt.length > length && (
        <button onClick={onToggleLongTxt}>
          {isLongTxtShown ? collapseLabel : expandLabel}
        </button>
      )}
    </section>
  )
}
