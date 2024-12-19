import { createContext, useState } from "react";
import { plantCart } from "../data/plants"

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    //const [cart, setCart] = useState([])
    const [cart, setCart] = useState([plantCart])
    
    // Calcular el total sumando el precio de cada producto multiplicado por su cantidad
    const total = cart?.reduce((acc, item) => acc + (item.price * item.count), 0) || 0

    const agregarAlCarrito = (plant) => {
        const existingPlant = cart.find(item => item.name === plant.name)
        if (existingPlant) {
            setCart(cart.map(item =>
                item.name === plant.name
                    ? { ...item, count: item.count + 1 }
                    : item
            ))
        } else {
            setCart([...cart, { ...plant, count: 1 }])
        }
    }

    const sumarCantidad = (index) => {
        const newCart = [...cart]
        newCart[index].count += 1
        setCart(newCart)
    }

    const restarCantidad = (index) => {
        const newCart = [...cart]
        if (newCart[index].count > 1) {
            newCart[index].count -= 1
        } else {
            newCart.splice(index, 1)
        }
        setCart(newCart)
    }

    return (
        <CartContext.Provider value={{ cart, setCart, total, agregarAlCarrito, sumarCantidad, restarCantidad }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider