/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react'
import stationDefaultUrl from '../assets/icons/station-default-sidebar-img.svg'
import dotDotDotIcon from '../assets/img/dotdotdot.svg'
import trashIcon from '../assets/img/trash.svg'
import uploadImageIcon from '../assets/img/upload-image.svg'
import closeModalUrl from '../assets/img/x.svg'
import warningIcon from '../assets/img/warning.svg'
import { updateStation } from '../store/actions/station.actions.js'
import { useToggle } from '../customHooks/useToggle.js'
import { uploadService } from '../services/upload.service.js'

export function EditStationModal({ station, setIsModalShow }) {
  const [name, setName] = useState(station?.name || '')
  const [description, setDescription] = useState(station?.description || '')
  const [error, setError] = useState(false)
  const imgRef = useRef(null)
  const showOptionsRef = useRef(null)
  const [style, setStyle] = useState({ zIndex: -1 })
  const [showImageOptions, toggleShowImageOptions] = useToggle(false)
  const [imgUrlHandler, setImgUrlHandler] = useState(stationDefaultUrl)
  const inputFileRef = useRef(null)

  useEffect(() => {
    setImgUrlHandler(
      !station?.createdBy?.imgUrl ? stationDefaultUrl : station.createdBy.imgUrl
    )
  }, [station])

  useEffect(() => {
    if (showImageOptions) {
      showOptionsRef?.current.classList.add('show')
    } else {
      showOptionsRef?.current.classList.remove('show')
    }
  }, [showImageOptions])

  async function uploadImg(ev) {
    const { secure_url, height, width } = await uploadService.uploadImg(ev)
    setImgUrlHandler(secure_url)
    imgRef.current.src = secure_url
  }

  const handleSave = async (ev) => {
    ev.preventDefault()

    if (!name.trim()) {
      setError(true)
      return
    }

    try {
      // merge local form fields into the station object

      const updatedStation = {
        ...station,
        name: name || '',
        description: description || '',
        createdBy: {
          ...station.createdBy,
          imgUrl: imgRef?.current?.src || '',
        },
      }

      await updateStation(updatedStation)

      setError(false)

      setIsModalShow(false)
    } catch (err) {
      console.error('Error updating station:', err)
    }
  }
  const onFileChange = (ev) => {
    /*Selected files data can be collected here.*/
    uploadImg(ev)
  }

  function onImageOptionsShow(ev) {
    ev.stopPropagation()
    ev.preventDefault()

    toggleShowImageOptions()
  }

  const onBtnClick = () => {
    /*Collecting node-element and performing click*/
    inputFileRef.current.click()
  }

  function onChangeImage(ev) {
    ev.stopPropagation()
    ev.preventDefault()
    onBtnClick()
  }

  function onRemoveImage(ev) {
    ev.stopPropagation()
    ev.preventDefault()
    setImgUrlHandler(stationDefaultUrl)
  }
  function isInvalidUnsaved() {
    return (
      (error && imgUrlHandler !== imgRef?.current?.src) ||
      name !== station?.name
    )
  }
  function isInvalidRequired() {
    return error && name === ''
  }

  return (
    <div className='edit-modal-container' onClick={() => setIsModalShow()}>
      <section
        className='edit-station-modal'
        onClick={(e) => e.stopPropagation()}
      >
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
            {isInvalidRequired() && (
              <span className='invalid-required'>
                <img className='warning-icon' src={warningIcon} />
                Playlist name is required.
              </span>
            )}
            {isInvalidUnsaved() && (
              <span className='invalid-unsaved'>
                <img className='warning-icon' src={warningIcon} />
                Press save to keep changes you&apos;ve made.
              </span>
            )}
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
                  className='station-img-edit'
                  alt='playlist img'
                  style={{
                    ...(imgUrlHandler === stationDefaultUrl && {
                      padding: '60px',
                    }),
                  }}
                />
                {/* Options image in header */}
                <div className='image-options' ref={showOptionsRef}>
                  <img
                    className='image-options-btn'
                    src={dotDotDotIcon}
                    onClick={(ev) => onImageOptionsShow(ev)}
                  />

                  <div className='image-options-grid'>
                    <div
                      className='image-option-change'
                      onClick={(ev) => onChangeImage(ev)}
                    >
                      <img
                        className='image-options-btn'
                        src={uploadImageIcon}
                      />
                      <span>Change photo</span>
                    </div>
                    <div
                      className='image-option-remove'
                      onClick={(ev) => onRemoveImage(ev)}
                    >
                      <img className='image-options-btn' src={trashIcon} />
                      <span>Remove photo</span>
                    </div>
                  </div>
                </div>
              </div>
            </label>
            <input
              type='file'
              ref={inputFileRef}
              onChange={onFileChange}
              name='station-img-input'
              id='station-img-input'
              accept='image/*'
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
            By proceeding, you agree to give Musify access to the image you
            choose to upload. Please make sure you have the right to upload the
            image.
          </p>
        </form>
      </section>
    </div>
  )
}
