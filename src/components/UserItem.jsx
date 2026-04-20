import "./UserItem.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function UserItem({ user }){
    
    const [likes, setLikes] = useState(0);

    // Ejercicio 1: estado para expandir/contraer información adicional
    const [expanded, setExpanded] = useState(false);

    function handleLike(){
        setLikes(likes + 1);
    }

    const id = user['Object Id'];
    const name = user['Display name'];
    const role = user['Title'];
    const location = user['City'] + ", " + user['State'];
    const image = user['Picture'];


    return(
        <li className = "user-item">
            <img 
                alt={"Avatar de " + name}
                className = "user-photo"
                src={image}
            />
            <div className="user-info">
                <h3>{name}</h3>
                <p className="user-role">{role}</p>
                <p className="user-location">{location}</p>
                <p className="user-description">{user['Department']}</p>

                {/* Ejercicio 1: info extra visible solo cuando expanded === true */}
                {expanded && (
                    <div className="user-extra">
                        <p><strong>Email:</strong> {user['User principal name']}</p>
                        <p><strong>Teléfono:</strong> {user['Phone number']}</p>
                        <p><strong>Oficina:</strong> {user['Office']}</p>
                    </div>
                )}

                <div className="user-actions">
                    <Link to={"/user/" + id}>Ver perfil</Link>
                    {/* Ejercicio 1: botón toggle */}
                    <button className="btn-expand" onClick={() => setExpanded(!expanded)}>
                        {expanded ? 'Ver menos' : 'Ver más'}
                    </button>
                    <button className={"btn-like" + (likes > 0 ? " liked" : "")} onClick={handleLike}>
                        {likes > 0 ? '❤️' : '🤍'} {likes}
                    </button>
                </div>
            </div>
        </li>
    )
}

export default UserItem;