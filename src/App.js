import logo from './logo.svg';
import './App.css';
import UserItem from './components/UserItem';
import Header from './components/Header';
import Footer from './components/Footer';
import UserListPage from './pages/UserListPage';

function App() {
  //TODO1: Completar componente UsuarioItem
  //TODO2: Generar un componente de pagina para el UserInfo
  
  return (
    <div>
      <Header />
      <UserListPage />
      <Footer />
    </div>
  );
}

export default App;
