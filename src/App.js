import logo from './logo.svg';
import './App.css';
import UserItem from './components/UserItem';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const users = [{
      id: 1,
      name: 'Adele Vance',
      role: 'Software Engineer',
      location: 'Seattle, WA',
      description: 'Building scalable applications and cloud infrastructure.',
      image: 'img/Adele%20Vance.jpg'
    },
    {
      id: 2,
      name: 'Alex Wilber',
      role: 'Senior Product Designer',
      location: 'San Francisco, CA',
      description: 'Designing the future of collaboration tools and digital experiences.',
      image: 'img/Alex%20Wilber.jpg'
    }
  ];

  
  return (
    <div>
      <Header />
      <UserItem user={users[0]} />
      <UserItem user={users[1]} />
      <Footer />
    </div>
  );
}

export default App;
