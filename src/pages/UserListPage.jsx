import "./UserListPage.css";
import UserItem from "../components/UserItem";
import { getUsers } from "../data/users";

function UserListPage() {
    const users = getUsers();

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