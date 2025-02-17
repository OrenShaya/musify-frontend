import { useEffect, useRef, useState } from 'react'

import scrollRightUrl from '../assets/img/scroll-right.svg'
import scrollLeftUrl from '../assets/img/scroll-left.svg'
import { useHover } from '../customHooks/useHover'
import PropTypes from 'prop-types'

const scrollBtnsWidth = 27 * 2

export function ScrollBtn({ scrollRef, isRight = false }) {
  const btnRef = useRef()
  const isHovered = useHover(scrollRef)
  const [isDisplayed, setIsDisplayed] = useState(false)

  useEffect(() => {
    const elBtn = btnRef.current
    if (isDisplayed) elBtn.classList.add('display')
    else elBtn.classList.remove('display')
  }, [isDisplayed])

  // toggle render on hover
  useEffect(() => {
    const elScroll = scrollRef.current
    const elBtn = btnRef.current

    const clickListener = elBtn.addEventListener('click', onClick)

    const scrollListener = elScroll.addEventListener('scroll', onScroll)

    const resizeObserver = new ResizeObserver(_toggleRender)
    resizeObserver.observe(document.documentElement)

    return () => {
      elBtn.removeEventListener('click', clickListener)
      elScroll.removeEventListener('scroll', scrollListener)
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

    let display =
      elScroll.scrollWidth - scrollBtnsWidth > elScroll.clientWidth
        ? true
        : false

    // Is scroll to the end?
    let isHidden = elScroll.scrollLeft === 0
    if (isRight) {
      isHidden =
        elScroll.clientWidth + elScroll.scrollLeft >=
        elScroll.scrollWidth - scrollBtnsWidth
    }
    if (isHidden || !isHovered) {
      display = false
    }
    setIsDisplayed(display)
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
