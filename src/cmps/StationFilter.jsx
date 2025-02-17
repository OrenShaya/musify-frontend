/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'

export function StationFilter({ filterBy, setFilterBy }) {
  const [filterToEdit, setFilterToEdit] = useState(structuredClone(filterBy))

  useEffect(() => {
    setFilterBy(filterToEdit)
  }, [filterToEdit])

  function handleChange(ev) {
    const field = ev.target.name
    const { type, value: rawValue, checked } = ev.target
    let value

    switch (type) {
      case 'text':
        value = rawValue
        break
      case 'number':
        value = +rawValue || ''
        break
      case 'radio':
        value = name === 'sortDir' ? Number(rawValue) : rawValue
        break
      case 'checkbox':
        // For a checkbox, when checked, set sortField to the value, otherwise clear it.
        value = checked ? rawValue : ''
        break
      default:
        value = rawValue
    }

    setFilterToEdit({ ...filterToEdit, [field]: value })
  }

  function clearFilter() {
    setFilterToEdit({ ...filterToEdit, name: '' })
  }

  function clearSort() {
    setFilterToEdit({ ...filterToEdit, sortField: '', sortDir: '' })
  }

  return (
    <section className='station-filter'>
      <h3>Filter:</h3>
      <input
        type='text'
        name='name'
        value={filterToEdit.name}
        placeholder='Name'
        onChange={handleChange}
        required
      />
      <button className='btn-clear' onClick={clearFilter}>
        Clear
      </button>
      <h3>Sort:</h3>
      <div className='sort-field'>
        <label>
          <span>By Name</span>
          <input
            type='checkbox'
            name='sortField'
            value='name'
            checked={filterToEdit.sortField === 'name'}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className='sort-dir'>
        <label>
          <span>Asce</span>
          <input
            type='radio'
            name='sortDir'
            value='1'
            checked={filterToEdit.sortDir === 1}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Desc</span>
          <input
            type='radio'
            name='sortDir'
            value='-1'
            onChange={handleChange}
            checked={filterToEdit.sortDir === -1}
          />
        </label>
      </div>
      <button className='btn-clear' onClick={clearSort}>
        Clear
      </button>
    </section>
  )
}
