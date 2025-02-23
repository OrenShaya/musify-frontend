import { useRef } from 'react'

import { StationPreview } from './StationPreview'

function StationList({ stations }) {
  const scrollRef = useRef()
  const containerRef = useRef()

  return (
      <div className='station-list-container'>
        <ScrollBtn scrollRef={scrollRef} containerRef={containerRef}/>
        <ScrollBtn scrollRef={scrollRef} containerRef={containerRef} />

        <ul>
          {stations.map((station) => (
            <li>
              <StationPreview station={station} />
            </li>
          ))}
        </ul>
      </div>
  )
}

function ScrollBtn({ scrollRef, containerRef) {
  const btnRef = useRef()
  const isHovered = useHover(containerRef)
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
    scrollRef.current.scrollBy({left: scrollByPx})
  }

  function _toggleRender() {
    const elScroll = scrollRef.current
    if (!elScroll) return
    elScroll?.offsetHeight // trigger reflow

    // More scroll items than fit on screen?
    let shouldDisplay =
      elScroll?.scrollWidth - scrollBtnsWidth > elScroll?.clientWidth
        ? true
        : false

    // Is scroll to the end?
    let isHidden = elScroll.scrollLeft <= PADDING
    if (isHidden || !isHovered) {
      shouldDisplay = false
    }

    setIsDisplayed(shouldDisplay)
  }

  return (
    <button className={'btn-scroll' + btnClassName} ref={btnRef}>
      <img className='scroll-icon' src={scrollUrl} alt='' />
    </button>
  )
}

StationList