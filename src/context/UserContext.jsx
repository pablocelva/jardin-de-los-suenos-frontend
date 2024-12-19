import { createContext, useState } from "react"
import { users } from "../data/users"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(null)
    const [email, setEmail] = useState(null)
    const [profile, setProfile] = useState(null)
    const [error, setError] = useState(null)

    // Cargar usuarios de localStorage
    const loadUsersFromLocalStorage = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    return users;
};

    const handleLogin = (loginData) => {
        const users = loadUsersFromLocalStorage();
        const user = users.find(
            (u) => u.email === loginData.email && u.password === loginData.password
        );
        if (user) {
            setToken("fake-token");
            setEmail(user.email);
            setProfile(user);
        } else {
            setError("Email o contraseña incorrectos");
        }
    };
/*
    //Método para login
    const handleLogin = async (loginData) => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
            })
            const data = await response.json()

            if (response.ok) {
                setToken(data.token)
                setEmail(data.email)
                localStorage.setItem("token", data.token)
            } else {
                setError(data.error || "Login fallido")
            }
        } catch (err) {
            setError("Ha ocurrido un error dutante el login")
        }
    }
*/
//Método para Registro

const handleRegister = (registerData) => {
    const users = loadUsersFromLocalStorage();
    const existingUser = users.find((u) => u.email === registerData.email);

    if (existingUser) {
        setError("El usuario ya existe");
        return;
    }

    //Crea el nuevo usuario
    const newUser = {
        id: nanoid(),
        email: registerData.email,
        password: registerData.password,
    }
    users.push(newUser)
    localStorage.setItem("users", JSON.stringify(users))

    setToken("fake-token")
    //setUsers(users)
    setEmail(newUser.email)
    setProfile(newUser)
    setError(null)
}
/*
    //Método para Registro
    const handleRegister = async (registerData) => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(registerData),
            })
            const data = await response.json()

            if (response.ok) {
                setToken(data.token)
                setEmail(data.email)
                localStorage.setItem("token", data.token)
            } else {
                setError(data.error || "Registro fallido")
            }
        } catch (err) {
            setError("Ha ocurrido un error durante el registro")
        }
    }
*/
    //Método para Logout
    const handleLogout = () => {
        setToken(null)
        setEmail(null)
        setProfile(null)
        //localStorage.removeItem("token")
    }

    //Método para obtener perfil autenticado
    const fetchProfile = () => {
        if (token) {
            const user = users.find(u => u.email === email) // Simula una búsqueda basada en el email
            if (user) {
                setProfile(user)
            } else {
                setError("Perfil no encontrado")
            }
        } else {
            setError("Usuario no autenticado")
        }
    }
    
/*
    //Método para obtener perfil autenticado
    const fetchProfile = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/me", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            const data = await response.json()

            if (response.ok) {
                setProfile(data)
            } else {
                setError(data.error || "Falla al llamar al perfil")
            }
        } catch (err) {
            setError("Ha ocurrido un error con el llamado del perfil")
        }
    }
*/
    return (
        <UserContext.Provider value={{ token, email, profile, error, setToken, handleLogin, handleRegister, handleLogout, fetchProfile }}>
            {children}
        </UserContext.Provider>
    )
}
