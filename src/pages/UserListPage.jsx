import "./UserListPage.css";
import UserItem from "../components/UserItem";
//import { getUsers } from "../data/users";
import { useState, useEffect } from "react";

function UserListPage() {
    //const users = getUsers();
    const URL = "https://raw.githubusercontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/main/src/data/Users.json"
    
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch(URL);
                if(!response.ok){
                    throw new Error("Error al cargar los usuarios: " + response.statusText);
                }
                // convertir la respuesta a JSON
                const data = await response.json();
                setUsers(data);
                setLoading(false);
                
            } catch (err) {
                // Si hay un error
                console.error("Error al cargar los usuarios:", err);
                setError(err.message);
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);

    // Si esta cargando la pagina mostrar un mensaje de loading
    if(loading){
        return <p>Cargando usuarios...</p>;
    }

    if(error){
        return <p>Error: {error}</p>;
    }

    // Si esta todo bien mostrar la lista de usuarios
    return (
        <ul className="user-list">
            {
                users.map( user => (
                    <UserItem key={user.id} user={user} />
                ))
            }
        </ul>
    )
}

export default UserListPage;