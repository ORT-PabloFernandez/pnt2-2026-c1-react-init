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
                <div className="user-actions">
                    <Link to={"/user/" + id}>Ver perfil</Link>
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