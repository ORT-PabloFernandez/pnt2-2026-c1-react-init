import { useParams, Link } from "react-router-dom";
import { getUsers } from "../data/users";
import "./UserDetailsPage.css";

// Resolución de ejercicio TODO2: Componente de página para el UserInfo (detalle de usuario)
function UserDetailsPage() {
    const { id } = useParams();
    const user = getUsers().find(u => u.id === Number(id));

    if (!user) {
        return (
            <div className="user-details">
                <Link to="/" className="back-button">← Volver al listado</Link>
                <p>Usuario no encontrado.</p>
            </div>
        );
    }

    return (
        <div className="user-details">
            <Link to="/" className="back-button">← Volver al listado</Link>
            <div className="detail-card">
                <img
                    alt={"Avatar de " + user.name}
                    className="user-photo"
                    src={`/${user.image}`}
                />
                <h2>{user.name}</h2>
                <p className="detail-role">{user.role}</p>
                <p className="detail-location">{user.location}</p>
                <p className="detail-description">{user.description}</p>
            </div>
        </div>
    );
}

export default UserDetailsPage;
