import "./UserItem.css";

function UserItem({ user }){
    
    // Esto que sigue es el JSX
    return(
        <li className = "user-item">
            <img 
                alt={"Avatar de " + user.name}
                className = "user-photo"
                src={user.image}
            />
        </li>
    )
}

export default UserItem;