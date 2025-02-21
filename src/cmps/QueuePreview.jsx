/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export function QueuePreview({ currSong }) {
  const { title, url, addedBy, lengthInSeconds } = currSong
  const songId = currSong.yt_id
  const songImgUrl = currSong.imgUrl
  const { fullname } = addedBy
  const artistId = addedBy.yt_id
  const artistImgUrl = addedBy.imgUrl
  return (
    <section className='queue-preview'>
      <article className='queue-preview-article' key={songId}>
        <div className='image-container'>
          <img src={songImgUrl} alt={`img of ${title}`} />{' '}
        </div>
        <h3 className='queue-song-title'>{title}</h3>
        <span className='queue-song-artist'>{fullname}</span>
      </article>
    </section>
  )
}
