import { Link } from "react-router-dom";
import {Card, Button, Container} from 'react-bootstrap'
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { CartContext } from "../context/CartContext";

const Profile = () => {
  const { email, handleLogout } = useContext(UserContext)
  const { cart } = useContext(CartContext)

  return (
    <Container fluid className="d-flex justify-content-center align-items-center my-5 py-5">
    <Card className='cart my-5'>
        <Card.Header>
            <Card.Title className='text-center p-2'>🔓 Tu Perfil</Card.Title>
        </Card.Header>
        <Card.Body className='text-center'>
          <div>
            <h3>Correo:</h3>
            <p>{email}</p> {/* Mostrar el correo del usuario autenticado */}
          </div>
          <div>
            <h5>Historial de Pedidos</h5>
            <p>Aquí puedes ver tus pedidos anteriores.</p>
            {/* <p>{cart}</p> */}
          </div>
          <div>
            <h5>Información de Pago</h5>
            <p>Detalles de tu método de pago guardado.</p>
          </div>
        </Card.Body>
        <Card.Footer className='p-3'>
            {/* <Card.Title className='text-center'>Cerrar Sesion</Card.Title> */}
            <div className="card-btn d-flex gap-2 justify-content-around">
              <Link to='/'>
                <Button onClick={handleLogout} variant="dark">Cerrar Sesión</Button>
              </Link>
            </div>
        </Card.Footer>
    </Card>
</Container>
  );
};
export default Profile;
