import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import { StationPreview } from './StationPreview'
import scrollRightUrl from '../assets/img/scroll-right.svg'
import scrollLeftUrl from '../assets/img/scroll-left.svg'

const scrollBtnsWidth = 27 * 2

function ScrollBtn({ scrollRef, isRight = false }) {
  const btnRef = useRef()

  function _toggleRender() {
    const elScroll = scrollRef.current
    const elBtn = btnRef.current

    elScroll.offsetHeight // trigger reflow

    let display =
      elScroll.scrollWidth - scrollBtnsWidth > elScroll.clientWidth
        ? 'grid'
        : 'none'

    // Is scroll to the end?
    let isHidden = elScroll.scrollLeft === 0
    if (isRight) {
      isHidden =
        elScroll.clientWidth + elScroll.scrollLeft >=
        elScroll.scrollWidth - scrollBtnsWidth
    }
    if (isHidden) {
      display = 'none'
    }
    elBtn.style.display = display
  }

  // Add left button scroller
  useEffect(() => {
    const elScroll = scrollRef.current
    const elBtn = btnRef.current

    setTimeout(() => _toggleRender(), 1500)

    // NOTE: left: * -1
    // Scroll the station list when the button is clicked
    const clickListener = elBtn.addEventListener('click', () => {
      const direction = isRight ? 1 : -1
      elScroll.scrollBy({ left: 600 * direction, behavior: 'smooth' })
    })

    const scrollListener = elScroll.addEventListener('scroll', () => {
      // Should move button left?
      elBtn.style.transform = `translateX(${elScroll.scrollLeft}px)`
      _toggleRender()
    })

    const resizeObserver = new ResizeObserver(() => {
      _toggleRender()
    })
    resizeObserver.observe(document.documentElement)

    return () => {
      elBtn.removeEventListener('click', clickListener)
      elScroll.removeEventListener('scroll', scrollListener)
      resizeObserver.disconnect()
    }
  }, [])

  const btnClassName = isRight ? 'btn-scroll-right' : 'btn-scroll-left'
  const scrollUrl = isRight ? scrollRightUrl : scrollLeftUrl
  return (
    <button className={'btn-scroll ' + btnClassName} ref={btnRef}>
      <img className='scroll-icon' src={scrollUrl} alt='' />
    </button>
  )
}

export function StationList({ stations }) {
  const scrollRef = useRef()

  return (
    <div>
      <h2>Jump back in</h2>

      <ul ref={scrollRef} className='station-list'>
        <ScrollBtn isRight={true} scrollRef={scrollRef} />
        <ScrollBtn scrollRef={scrollRef} />
        {stations.map((station) => (
          // TODO: remove Math.random when using real data
          <li
            className='station-item'
            key={station._id + Math.random() * 11000}
          >
            <StationPreview station={station} />
          </li>
        ))}
      </ul>
    </div>
  )
}

StationList.propTypes = {
  stations: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      createdBy: PropTypes.shape({
        imgUrl: PropTypes.string.isRequired,
      }),
    }).isRequired
  ),
}

ScrollBtn.propTypes = {
  scrollRef: PropTypes.object,
  isRight: PropTypes.bool,
}
