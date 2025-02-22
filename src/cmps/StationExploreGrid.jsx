/* eslint-disable react/prop-types */
import { StationExploreArticle } from './StationExploreArticle'

export function StationExploreGrid({ tagsObj, setFilteredTerm }) {
  return (
    <section className='station-explore-grid'>
      <div className='explore-grid-container'>
        <div className='explore-grid-header'>
          <h2>Browse all</h2>
        </div>
        {tagsObj.map((tagObj) => (
          <StationExploreArticle
            key={tagObj._id}
            tagObj={tagObj}
            setFilteredTerm={setFilteredTerm}
          />
        ))}
      </div>
    </section>
  )
}
