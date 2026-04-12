import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import UserListPage from './pages/UserListPage';
import UserDetailsPage from './pages/UserDetailsPage';

function App() {
  //TODO1: Completar componente UsuarioItem
  //TODO2: Generar un componente de pagina para el UserInfo
  //TODO3: Repasar Hooks

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<UserListPage />} />
        <Route path="/user/:id" element={<UserDetailsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
