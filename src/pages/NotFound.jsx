import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container fluid className="p-5 d-flex flex-column justify-content-center align-items-center min-vh-100">

      <h1 className="mb-4">La ruta que intentas consultar no existe :/</h1>
      <Link to='/'>
        <Button variant="dark">Ir al Home</Button>
      </Link>

    </Container>
  );
};
export default NotFound;
