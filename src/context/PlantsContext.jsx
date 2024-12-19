import { createContext, useState, useEffect } from "react";
import { plants as localPlants } from "../data/plants"

export const PlantsContext = createContext()

const PlantsProvider = ({ children }) => {
    const [plants, setPlants] = useState([])
    const [plant, setPlant] = useState({})
    const [error, setError] = useState(null)
    
    const getPlant = (id) => {
        const foundPlant = plants.find(p => p.id === id)
        if (foundPlant) {
            return foundPlant
        } else {
            setError("Planta no encontrada")
            setError(null)
        }
    }
    // Función para simular la obtención de datos de pizzas
    const getPlants = async () => {
        try {
            setPlants(localPlants)
            setError(null);
        } catch (err) {
            setError("Error al obtener las plantas")
        }
    };
    /*
    const getPizzas = async () => {
        try {
            const url = "http://localhost:5000/api/pizzas"
            const response = await fetch(url)

            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`)
            }

            const data = await response.json()
            setPizzas(data)

        } catch (err) {
            setError(err.message)
            setPizzas(localPizzas)
        }
    }*/
    /*
    const getPizza = async (id) => {
        try {
            const url = `http://localhost:5000/api/pizzas/${id}`
            const response = await fetch(url)

            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`)
            }

            const data = await response.json()
            return data

        } catch (err) {
            setError(err.message)
            return localPizzas.find(p => p.id === id)
        }
    }*/

    useEffect(() => {
        getPlants()
    }, [])

    return (
        <PlantsContext.Provider value={{ plants, plant, getPlant, error }}>
            {children}
        </PlantsContext.Provider>
    )
}

export default PlantsProvider;