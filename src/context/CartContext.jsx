import { createContext, useState, useEffect } from "react"
import { plantCart } from "../data/plants"

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    //const [cart, setCart] = useState([])
    //const [cart, setCart] = useState([plantCart])
    const [cart, setCart] = useState(() => {
        // Solo ejecutar esto en el navegador (no durante el build de Vite)
        if (typeof window !== "undefined") {
            const savedCart = localStorage.getItem("jardin-carrito");
            if (savedCart) {
                try {
                    return JSON.parse(savedCart);
                } catch (error) {
                    console.error("Error al leer el carrito:", error);
                    return [];
                }
            }
        }
        return []; // Valor por defecto si no hay nada guardado
    });

    // Guardar en localStorage cada vez que el carrito cambie
    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("jardin-carrito", JSON.stringify(cart));
        }
    }, [cart]);

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