import { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../components/Header'
import CardPlant from '../components/CardPlant'
import { CartContext } from '../context/CartContext'
import { PlantsContext } from '../context/PlantsContext'
//import Cart from './Cart'

export default function Home() {
    const { agregarAlCarrito } = useContext(CartContext)
    const { plants, error } = useContext(PlantsContext)
    
    return (
        <>
            <Header/>
            <Container fluid className="productos my-5 border-success">
                {error && <p>Error: {error}</p>}
                <Row className="cards d-flex margin-cards">
                    {plants.map((plant, index) => (
                        <Col key={index} xs={12} sm={6} lg={4} className="d-flex justify-content-center">
                            <CardPlant
                                id={plant.id}
                                name={plant.name}
                                price={plant.price}
                                features={plant.features}
                                img={plant.img}
                                onAddToCart={() => agregarAlCarrito(plant)}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* <Cart 
                cart={cart}
                onSuma={sumarCantidad}
                onResta={restarCantidad}
            /> */}
        </>
    )
}
