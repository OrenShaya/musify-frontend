/* eslint-disable react/prop-types */
import { StationExploreArticle } from './StationExploreArticle'

export function StationExploreGrid({ tagsObj }) {
  return (
    <section className='station-explore-grid'>
      <div className='explore-grid-container'>
        <div className='explore-grid-header'>
          <h2>Browse All</h2>
        </div>
        {tagsObj.map((tagObj) => (
          <StationExploreArticle key={tagObj._id} tagObj={tagObj} />
        ))}
      </div>
    </section>
  )
}
