import { useState } from 'react'

export function EditStationModal() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState(false)

  const handleSave = () => {
    if (!name.trim()) {
      setError(true)
      return
    }
    alert(`Playlist saved: ${name}`)
    setError(false)
  }

  return (
    <section className='edit-station-modal'>
      <h3 className='station-edit-modal-header'>Edit details</h3>
      <button className='modal-close-btn'>X</button>
      <div className='form-invalid-input'>
        <span>@I Playlist name is required.</span>
      </div>
      <form className='edit-station-modal-form'>
        <input
          type='file'
          name='station-img-input'
          id='station-img-input'
          accept='image/png, image/gif, image/jpeg'
        />
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
        <textarea
          name='edit-station-decription'
          id='edit-station-decription'
          placeholder='Add an optional description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type='submit'
          value='Save'
          className='Save-editted-station-btn'
          onClick={handleSave}
        />
        <p className='legal-disclaimer'>
          By proceeding, you agree to give Spotify access to the image you
          choose to upload. Please make sure you have the right to upload the
          image.
        </p>
      </form>
    </section>
  )
}
