import { Link } from "react-router-dom";
import "./UserItem.css";

function UserItem({ user }){
    
    // Esto que sigue es el JSX
    // Resolución de ejercicio TODO: Completar el componente de usuario.
    return(
        <li className = "user-item">
            <img 
                alt={"Avatar de " + user.name}
                className = "user-photo"
                src={user.image}
            />
            <div className="user-info">
                <h3>{user.name}</h3>
                <p className="user-role">{user.role}</p>
                <p className="user-location">{user.location}</p>
                <p className="user-description">{user.description}</p>
                <div className="user-actions">
                    <Link to={"/user/" + user.id}>Ver perfil</Link>
                    <a href="#">Contactar</a>
                </div>
            </div>
        </li>
    )
}

export default UserItem;