import { useParams, Link } from "react-router-dom";
import { getUsers } from "../data/users";
import { useState, useEffect } from "react";
import "./UserDetailsPage.css";

function UserDetailsPage() {
    const { id } = useParams();
    const user = getUsers().find(u => u.id === Number(id));

    // Ejercicio 5: estados para los posts del usuario
    const [posts, setPosts] = useState([]);
    const [loadingPosts, setLoadingPosts] = useState(false);
    const [errorPosts, setErrorPosts] = useState(null);

    // Ejercicio 5: useEffect que se ejecuta cuando cambia el usuario
    // JSONPlaceholder tiene userId del 1 al 10, usamos el id del usuario
    useEffect(() => {
        if (!user) return;

        const userId = (user.id % 10) + 1;

        async function fetchPosts() {
            setLoadingPosts(true);
            setErrorPosts(null);
            try {
                const response = await fetch(
                    'https://jsonplaceholder.typicode.com/posts?userId=' + userId
                );
                if (!response.ok) throw new Error('Error al cargar posts');
                const data = await response.json();
                setPosts(data);
            } catch (err) {
                setErrorPosts(err.message);
            } finally {
                setLoadingPosts(false);
            }
        }

        fetchPosts();
    }, [user]);

    // Función bonus: recargar posts
    function reloadPosts() {
        if (!user) return;
        const userId = (user.id % 10) + 1;
        setLoadingPosts(true);
        setErrorPosts(null);
        fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
            .then(res => res.json())
            .then(data => { setPosts(data); setLoadingPosts(false); })
            .catch(err => { setErrorPosts(err.message); setLoadingPosts(false); });
    }

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

            {/* Ejercicio 5: sección de posts */}
            <div className="user-posts">
                <div className="user-posts-header">
                    <h3>Posts del Usuario</h3>
                    <button className="btn-reload-posts" onClick={reloadPosts}>
                        Recargar posts
                    </button>
                </div>

                {loadingPosts && <p>Cargando posts...</p>}
                {errorPosts && <p className="posts-error">Error: {errorPosts}</p>}
                {!loadingPosts && !errorPosts && (
                    <ul className="posts-list">
                        {posts.map(post => (
                            <li key={post.id} className="post-item">
                                <strong>{post.title}</strong>
                                <p>{post.body.substring(0, 100)}...</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default UserDetailsPage;
