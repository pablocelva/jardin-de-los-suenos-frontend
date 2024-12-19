import { useContext, useEffect, useState } from 'react';
import { Card, Button, Row, Col, ListGroup } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import { PlantsContext } from '../context/PlantsContext';
import { useParams } from 'react-router-dom';

export const Plant = () => {
    const { agregarAlCarrito } = useContext(CartContext);
    const { getPlant, error } = useContext(PlantsContext);
    const { id } = useParams();
    const [selectedPlant, setSelectedPlant] = useState(null);

    useEffect(() => {
        const fetchPlant = async () => {
            const plant = await getPlant(id);
            setSelectedPlant(plant);
        };
        fetchPlant();
    }, [id, getPlant]);

    return (
        <>
            {error ? (
                <p>Error: {error}</p>
            ) : selectedPlant ? (
                <Card 
                    className="plant-page mx-auto my-5"
                    style={{ maxWidth: '1200px' }}
                >
                    <Row>
                        <Col md={6}>
                            <Card.Img
                                src={selectedPlant.img || '/path/to/default-image.jpg'}
                                alt={selectedPlant.name || "Sin nombre"}
                            />
                        </Col>
                        <Col md={6}>
                            <Card.Body>
                                <Card.Title>🌱 {selectedPlant.name || "Nombre del producto"}</Card.Title>
                                <Card.Text>
                                    {selectedPlant.desc || "Descripción del producto"}
                                </Card.Text>
                                {selectedPlant.features && (
                                    <ListGroup variant="flush">
                                        {selectedPlant.features.map((feature, index) => (
                                            <ListGroup.Item key={index}>{feature}</ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                )}
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <h4>Precio: ${selectedPlant.price || "Precio"}</h4>
                                    <Button
                                        variant="dark"
                                        onClick={() => agregarAlCarrito(selectedPlant)}
                                    >
                                        Añadir al carrito
                                    </Button>
                                </div>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            ) : (
                <p>Planta no encontrada</p>
            )}
        </>
    );
};
