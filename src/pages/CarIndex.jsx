import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { loadCars, addCar, updateCar, removeCar, addCarMsg } from '../store/actions/car.actions'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { carService } from '../services/car/'
import { userService } from '../services/user'

import { CarList } from '../cmps/CarList'
import { CarFilter } from '../cmps/CarFilter'

export function CarIndex() {

    const [ filterBy, setFilterBy ] = useState(carService.getDefaultFilter())
    const cars = useSelector(storeState => storeState.carModule.cars)

    useEffect(() => {
        loadCars(filterBy)
    }, [filterBy])

    async function onRemoveCar(carId) {
        try {
            await removeCar(carId)
            showSuccessMsg('Car removed')            
        } catch (err) {
            showErrorMsg('Cannot remove car')
        }
    }

    async function onAddCar() {
        const car = carService.getEmptyCar()
        car.vendor = prompt('Vendor?')
        try {
            const savedCar = await addCar(car)
            showSuccessMsg(`Car added (id: ${savedCar._id})`)
        } catch (err) {
            showErrorMsg('Cannot add car')
        }        
    }

    async function onUpdateCar(car) {
        const speed = +prompt('New speed?', car.speed)
        if(speed === 0 || speed === car.speed) return

        const carToSave = { ...car, speed }
        try {
            const savedCar = await updateCar(carToSave)
            showSuccessMsg(`Car updated, new speed: ${savedCar.speed}`)
        } catch (err) {
            showErrorMsg('Cannot update car')
        }        
    }

    return (
        <main className="car-index">
            <header>
                <h2>Cars</h2>
                {userService.getLoggedinUser() && <button onClick={onAddCar}>Add a Car</button>}
            </header>
            <CarFilter filterBy={filterBy} setFilterBy={setFilterBy} />
            <CarList 
                cars={cars}
                onRemoveCar={onRemoveCar} 
                onUpdateCar={onUpdateCar}/>
        </main>
    )
}