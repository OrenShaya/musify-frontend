/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useRef, useState } from 'react'
import stationDefaultUrl from '../assets/icons/station-default-img.svg'
import closeModalUrl from '../assets/img/x.svg'
import { updateStation } from '../store/actions/station.actions.js'

export function EditStationModal({ station, setIsModalShow }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState(false)
  const imgRef = useRef(null)
  const [style, setStyle] = useState({ zIndex: -1 })

  const imgUrlHandler = station?.createdBy?.imgUrl ?? stationDefaultUrl

  const handleSave = async (ev) => {
    ev.preventDefault()

    if (!name.trim()) {
      setError(true)
      return
    }

    try {
      // Merge local form fields into the station object
      const updatedStation = {
        ...station,
        name,
        msgs: station.msgs.push(description),
        imgUrl: imgRef.current?.url,
      }

      // 2. Call the Redux action
      await updateStation(updatedStation)

      alert(`Playlist saved: ${name}`)
      setError(false)

      setIsModalShow(false)
    } catch (err) {
      console.error('Error updating station:', err)
    }
  }

  return (
    <section className='edit-station-modal'>
      <div className='station-edit-modal-header'>
        <h3 className='station-edit-heading'>Edit details</h3>
        <button
          className='modal-close-btn'
          aria-label='Close'
          onClick={setIsModalShow}
        >
          <img className='modal-close-icon' src={closeModalUrl} />
        </button>
      </div>
      {error && (
        <div className='form-invalid-input'>
          <span className='invalid-required'>
            @I Playlist name is required.
          </span>
          <span className='invalid-unsaved'>
            @I Press save to keep changes you&apos;ve made.
          </span>
        </div>
      )}
      <form className='edit-station-modal-form'>
        <div className='image-input'>
          <label htmlFor='station-img-input'>
            <div
              className='station-img-edit-container'
              onMouseEnter={(e) => {
                setStyle({ zIndex: 2 })
              }}
              onMouseLeave={(e) => {
                setStyle({ zIndex: -1 })
              }}
            >
              {' '}
              {/* Edit station image svg */}
              <div className='svg-container' style={style}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  data-encore-id='icon'
                  role='img'
                  aria-hidden='true'
                  className='edit-img-svg'
                  viewBox='0 0 24 24'
                >
                  <path
                    d='M17.318 1.975a3.329 3.329 0 1 1 4.707 4.707L8.451 20.256c-.49.49-1.082.867-1.735 1.103L2.34 22.94a1 1 0 0 1-1.28-1.28l1.581-4.376a4.726 4.726 0 0 1 1.103-1.735L17.318 1.975zm3.293 1.414a1.329 1.329 0 0 0-1.88 0L5.159 16.963c-.283.283-.5.624-.636 1l-.857 2.372 2.371-.857a2.726 2.726 0 0 0 1.001-.636L20.611 5.268a1.329 1.329 0 0 0 0-1.879z'
                    fill='#ffffff'
                  />
                </svg>
                Choose photo
              </div>
              {/* Artist image in header */}
              <img
                crossOrigin='anonymous'
                ref={imgRef}
                src={imgUrlHandler}
                className='station-img'
                alt='playlist img'
              />
            </div>
          </label>
          <input
            type='file'
            name='station-img-input'
            id='station-img-input'
            accept='image/png, image/gif, image/jpeg'
            hidden
          />
        </div>

        <fieldset className='edit-station-name-fieldset'>
          <legend>Name</legend>
          <input
            type='text'
            name='edit-station-name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            id='edit-station-name'
            autoComplete='off'
            placeholder='Add a name'
            className={
              error ? 'station-name-input error-border' : 'station-name-input'
            }
            required
          />
        </fieldset>

        <fieldset className='edit-station-description-fieldset'>
          <legend>Description</legend>
          <textarea
            name='edit-station-description'
            id='edit-station-description'
            placeholder='Add an optional description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </fieldset>

        <input
          type='submit'
          value='Save'
          className='save-edited-station-btn'
          onClick={(e) => handleSave(e)}
        />
        <p className='legal-disclaimer'>
          By proceeding, you agree to give Musify access to the image you choose
          to upload. Please make sure you have the right to upload the image.
        </p>
      </form>
    </section>
  )
}
