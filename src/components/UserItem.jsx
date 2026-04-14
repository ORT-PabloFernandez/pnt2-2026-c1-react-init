import "./UserItem.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function UserItem({ user }){
    
    // Esto que sigue es el JSX
    // Resolución de ejercicio TODO: Completar el componente de usuario.
    const [likes, setLikes] = useState(0);

    function handleLike(){
        setLikes(likes + 1);
    }

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
                    {/* // TODO: Convertir el boton en un corazon con un contador de likes */}
                    <button onClick={handleLike} >
                        Me gusta {likes}  
                    </button>                                    
                </div>
            </div>
        </li>
    )
}

export default UserItem;