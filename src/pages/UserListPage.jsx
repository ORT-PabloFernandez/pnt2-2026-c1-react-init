import "./UserListPage.css";
import UserItem from "../components/UserItem";
//import { getUsers } from "../data/users";
import { useState, useEffect } from "react";

function UserListPage() {
    const URL = "https://raw.githubusercontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/main/src/data/Users.json"
    
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Ejercicio 2: texto del filtro de búsqueda
    const [searchTerm, setSearchTerm] = useState('');

    // Ejercicio 3: toggle entre vista lista y grid
    const [isGridView, setIsGridView] = useState(false);

    // Ejercicio 4: cantidad de usuarios visibles
    const [visibleCount, setVisibleCount] = useState(5);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch(URL);
                if(!response.ok){
                    throw new Error("Error al cargar los usuarios: " + response.statusText);
                }
                const data = await response.json();
                setUsers(data);
                setLoading(false);
                
            } catch (err) {
                console.error("Error al cargar los usuarios:", err);
                setError(err.message);
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);

    if(loading) return <p>Cargando usuarios...</p>;
    if(error) return <p>Error: {error}</p>;

    // Ejercicio 2: filtramos por nombre o departamento
    const filteredUsers = users.filter(user => {
        const name = user['Display name'] || '';
        const dept = user['Department'] || '';
        const term = searchTerm.toLowerCase();
        return name.toLowerCase().includes(term) || dept.toLowerCase().includes(term);
    });

    // Ejercicio 4: limitamos según visibleCount
    const visibleUsers = filteredUsers.slice(0, visibleCount);

    return (
        <div>
            {/* Ejercicio 2: input de búsqueda controlado */}
            <input
                className="search-input"
                type="text"
                placeholder="Buscar por nombre o departamento..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />

            {/* Ejercicio 3: botón toggle de vista */}
            <button
                className="btn-toggle-view"
                onClick={() => setIsGridView(!isGridView)}
            >
                {isGridView ? 'Vista lista' : 'Vista grid'}
            </button>

            {/* Lista con clase condicional */}
            <ul className={isGridView ? 'user-list user-grid' : 'user-list'}>
                {visibleUsers.map(user => (
                    <UserItem key={user['Object Id']} user={user} />
                ))}
            </ul>

            {/* Ejercicio 2: sin resultados */}
            {filteredUsers.length === 0 && (
                <p className="no-results">No se encontraron usuarios.</p>
            )}

            {/* Ejercicio 4: botón cargar más */}
            {visibleCount < filteredUsers.length && (
                <button
                    className="btn-load-more"
                    onClick={() => setVisibleCount(visibleCount + 5)}
                >
                    Cargar más usuarios
                </button>
            )}
        </div>
    );
}

export default UserListPage;