/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export function StationExploreArticle({ tagObj }) {
  const { tagName, bgColor, imgUrl } = tagObj
  return (
    <div
      className='station-explore-article'
      key={tagName}
      style={{ backgroundColor: bgColor }}
    >
      <div className='genre-header'>
        <span>{tagName}</span>
      </div>
      <div className='img-container'>
        <img src={imgUrl} alt={tagName} />
      </div>
    </div>
  )
}
