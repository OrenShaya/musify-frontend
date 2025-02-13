import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import { StationPreview } from './StationPreview'
import scrollRightUrl from '../assets/img/scroll-right.svg'
import scrollLeftUrl from '../assets/img/scroll-left.svg'

const scrollBtnsWidth = 27 * 2

function ScrollRightBtn({ scrollRef }) {
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
    if (
      elScroll.clientWidth + elScroll.scrollLeft >=
      elScroll.scrollWidth - scrollBtnsWidth
    ) {
      display = 'none'
    }
    elBtn.style.display = display
    // console.log('elScroll.clientWidth:', elScroll.clientWidth)
    // console.log('elScroll.scrollWidth:', elScroll.scrollWidth)
  }

  // Add right button scroller
  useEffect(() => {
    const elScroll = scrollRef.current
    const elBtn = btnRef.current

    // why settimeout? when called before load, elScroll.clientWidth equals elScroll.scrollWidth.
    setTimeout(() => _toggleRender(), 1500)

    // Scroll the station list when the button is clicked
    const clickListener = elBtn.addEventListener('click', () => {
      elScroll.scrollBy({ left: 600, behavior: 'smooth' })
    })

    const scrollListener = elScroll.addEventListener('scroll', () => {
      // Should move button right?
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

  return (
    <button className='btn-scroll btn-scroll-right' ref={btnRef}>
      <img className='scroll-icon' src={scrollRightUrl} alt='' />
    </button>
  )
}

function ScrollLeftBtn({ scrollRef }) {
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
    if (elScroll.scrollLeft === 0) {
      display = 'none'
    }
    elBtn.style.display = display
  }

  // Add left button scroller
  useEffect(() => {
    const elScroll = scrollRef.current
    const elBtn = btnRef.current

    _toggleRender()

    // Scroll the station list when the button is clicked
    const clickListener = elBtn.addEventListener('click', () => {
      elScroll.scrollBy({ left: -600, behavior: 'smooth' })
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

  return (
    <button className='btn-scroll btn-scroll-left' ref={btnRef}>
      <img className='scroll-icon' src={scrollLeftUrl} alt='' />
    </button>
  )
}

export function StationList({ stations }) {
  const scrollRef = useRef()

  return (
    <div>
      <h2>Jump back in</h2>

      <ul ref={scrollRef} className='station-list'>
        <ScrollRightBtn scrollRef={scrollRef} />
        <ScrollLeftBtn scrollRef={scrollRef} />
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

ScrollRightBtn.propTypes = {
  scrollRef: PropTypes.object,
}

ScrollLeftBtn.propTypes = {
  scrollRef: PropTypes.object,
}
