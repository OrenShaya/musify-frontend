import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { loadCar, addCarMsg } from '../store/actions/car.actions'


export function CarDetails() {

  const {carId} = useParams()
  const car = useSelector(storeState => storeState.carModule.car)

  useEffect(() => {
    loadCar(carId)
  }, [carId])

  async function onAddCarMsg(carId) {
    try {
        await addCarMsg(carId, 'bla bla ' + parseInt(Math.random()*10))
        showSuccessMsg(`Car msg added`)
    } catch (err) {
        showErrorMsg('Cannot add car msg')
    }        

}

  return (
    <section className="car-details">
      <Link to="/car">Back to list</Link>
      <h1>Car Details</h1>
      {car && <div>
        <h3>{car.vendor}</h3>
        <h4>${car.price}</h4>
        <pre> {JSON.stringify(car, null, 2)} </pre>
      </div>
      }
      <button onClick={() => { onAddCarMsg(car._id) }}>Add car msg</button>

    </section>
  )
}