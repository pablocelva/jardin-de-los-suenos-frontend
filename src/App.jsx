import { useContext } from 'react'
import './App.css'
//Importando Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
//Importando componentes
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Registro from './pages/Registro'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import { Plant } from './pages/Plant'
import { Navigate, Route, Routes } from 'react-router-dom'
import CartProvider from './context/CartContext'
import PlantsProvider from './context/PlantsContext'
import { UserContext, UserProvider } from './context/UserContext'
//Importando data de pizzas
//import { pizzas } from './data/pizzas'

function App() {
  const { token } = useContext(UserContext)
  return (
    <>
      <PlantsProvider>
        <CartProvider>
          <Navbar/>
          <Routes>
            <Route 
            path='/'
            element={<Home />}
            />
            <Route 
            path='/register'
            element={token ? <Navigate to={"/"} /> : <Registro />}
            />
            <Route 
            path='/login'
            element={token ? <Navigate to={"/"} /> : <Login />}
            />
            <Route 
            path='/cart'
            element={<Cart />}
            />
            <Route 
            path='/plant/:id'
            element={<Plant />}
            />
            <Route 
            path='/profile'
            element={token ? <Profile /> : <Navigate to={"/login"} />}
            />
            <Route 
            path='/404'
            element={<NotFound />}
            />
            <Route 
            path='/*'
            element={<NotFound />}
            />
          </Routes>
          <Footer/>
        </CartProvider>
      </PlantsProvider>
    </>
  )
}

export default App
