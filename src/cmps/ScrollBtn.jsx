import { useEffect, useRef, useState } from 'react'

import scrollRightUrl from '../assets/img/scroll-right.svg'
import scrollLeftUrl from '../assets/img/scroll-left.svg'
import { useHover } from '../customHooks/useHover'
import PropTypes from 'prop-types'

const scrollBtnsWidth = 27 * 2

export function ScrollBtn({ scrollRef, isRight = false }) {
  // TODO: pass left button to right (and vise verse) to add display condition
  const btnRef = useRef()
  const isHovered = useHover(scrollRef)
  const isBtnHovered = useHover(btnRef)
  const [isDisplayed, setIsDisplayed] = useState(false)

  useEffect(() => {
    const elBtn = btnRef.current
    if (isDisplayed) elBtn.classList.add('display')
    else elBtn.classList.remove('display')
  }, [isDisplayed])

  useEffect(() => {
    const elScroll = scrollRef.current
    const elBtn = btnRef.current

    elBtn.addEventListener('click', onClick)

    elScroll.addEventListener('scroll', onScroll)

    const resizeObserver = new ResizeObserver(_toggleRender)
    resizeObserver.observe(elScroll)

    return () => {
      elBtn.removeEventListener('click', onClick)
      elScroll.removeEventListener('scroll', onScroll)
      resizeObserver.disconnect()
    }
  }, [isHovered])

  const onScroll = () => {
    _toggleRender()
  }

  const onClick = () => {
    const direction = isRight ? 1 : -1
    scrollRef.current.scrollBy({ left: 600 * direction, behavior: 'smooth' })
  }

  function _toggleRender() {
    const elScroll = scrollRef.current

    elScroll.offsetHeight // trigger reflow

    // More scroll items than fit on screen?
    let shouldDisplay =
      elScroll.scrollWidth - scrollBtnsWidth > elScroll.clientWidth
        ? true
        : false

    // Is scroll to the end?
    const PADDING = 8
    let isHidden = elScroll.scrollLeft <= PADDING
    if (isRight) {
      isHidden =
        elScroll.clientWidth + elScroll.scrollLeft >= elScroll.scrollWidth - 5
    }

    if (isHidden || (!isHovered && !isBtnHovered)) {
      shouldDisplay = false
    }

    setIsDisplayed(shouldDisplay)
  }

  const btnClassName = isRight ? 'btn-scroll-right' : 'btn-scroll-left'
  const scrollUrl = isRight ? scrollRightUrl : scrollLeftUrl
  return (
    <button className={'btn-scroll ' + btnClassName} ref={btnRef}>
      <img className='scroll-icon' src={scrollUrl} alt='' />
    </button>
  )
}

ScrollBtn.propTypes = {
  scrollRef: PropTypes.object,
  isRight: PropTypes.bool,
}
