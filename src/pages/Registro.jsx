import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"

export default function Registro() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmacion, setConfirmacion] = useState("")
    const [error, setError] = useState("")

    const { handleRegister } = useContext(UserContext)

    const validarFormulario = async (evento) => {
        evento.preventDefault()
        
        // Validación de campos
        if (!email.trim() || !password.trim() || !confirmacion.trim()) {
            setError("Todos los campos son obligatorios.")
            return
        }

        // Validación de longitud de la contraseña
        if (password.length < 6) {
            setError("La contraseña debe tener al menos 6 caracteres.")
            return
        }

        // Validación de igualdad de contraseñas
        if (password !== confirmacion) {
            setError("Las contraseñas no coinciden.")
            return
        }
        
        // Enviar datos al servidor para registrar
        try {
            await handleRegister({ email, password })
            alert("¡Tu cuenta ha sido creada!")
            setEmail("")
            setPassword("")
            setConfirmacion("")
            setError("")
        } catch (error) {
            setError("Ocurrió un error al intentar registrar la cuenta.")
        }
    }
    
    return (
        <>
            <form className="formulario" onSubmit={validarFormulario}>
                <h1>Register</h1>
                <div className="form-group">
                    <label>Email</label>
                    <input
                    type="email"
                    name="email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input
                    type="password"
                    name="password"
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    />
                </div>
                <div className="form-group">
                    <label>Confirmar contraseña</label>
                    <input
                    type="password"
                    name="confirmacion"
                    className="form-control"
                    onChange={(e) => setConfirmacion(e.target.value)}
                    value={confirmacion}
                    />
                </div>
                {/* {error ? <p style={{color: "red"}}>Todos los campos son obligatorios.</p> : null} */}
                {error && <p style={{color: "red"}}>{error}</p>}
                <button type="submit" className="btn btn-info text-light">
                Registrar cuenta
                </button>
            </form>
        </>
    );
}
