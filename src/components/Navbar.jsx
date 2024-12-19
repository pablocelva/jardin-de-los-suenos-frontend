import { useState, useContext } from 'react'
import { Button, Dropdown, DropdownButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { UserContext } from '../context/UserContext'

const Navbar = () => {
    const { total } = useContext(CartContext)
    const { token, handleLogout } = useContext(UserContext)
    
    return (
        <>
            <nav className="d-flex justify-content-between align-items-center p-3 text-white">
                <div className="d-flex align-items-center gap-3">
                    {/* Título */}
                    <h3>🌱Jardín de los Sueños</h3>

                    {/* Botones visibles solo en escritorio */}
                    <div className="d-none d-md-flex align-items-center gap-2">
                    
                        
                        <Link to="/">
                            <Button variant='outline-light'>🌱Home</Button>
                        </Link>
                        {token ? (
                            <>
                                <Link to="/profile">
                                    <Button variant="outline-light">🔓Perfil</Button>
                                </Link>
                                <Link to="/">
                                    <Button variant="outline-light" onClick={handleLogout}>🔒Logout</Button>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link to="/login">
                                    <Button variant="outline-light">🔐Login</Button>
                                </Link>
                                <Link to="/register">
                                    <Button variant="outline-light">🔐Register</Button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>

                {/* Dropdown para tabletas y móviles */}
                <div className="d-block d-md-none ml-auto">
                    <DropdownButton id="dropdown-basic-button" title="Menú" variant='outline-light'>
                        <Dropdown.Item as={Link} to="/">🌱Home</Dropdown.Item>
                        <Dropdown.Divider />
                        {token ? (
                            <>
                                <Dropdown.Item as={Link} to="/profile">🔓Perfil</Dropdown.Item>
                                <Dropdown.Item as={Link} onClick={handleLogout} to="/login">🔒Logout</Dropdown.Item>
                            </>
                        ) : (
                            <>
                                <Dropdown.Item as={Link} to="/login">🔐Login</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/register">🔐Register</Dropdown.Item>
                            </>
                        )}
                        <Dropdown.Divider />
                        <Dropdown.Item as={Link} to="/cart">
                            🛒Total: ${total.toLocaleString()}
                        </Dropdown.Item>
                    </DropdownButton>
                </div>

                {/* Total del carrito visible solo en móvil y tablet */}
                <div className="d-none d-md-block">
                    <Link to="/cart">
                        <Button variant='outline-success'>
                            🛒Total: ${total.toLocaleString()}
                        </Button>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
