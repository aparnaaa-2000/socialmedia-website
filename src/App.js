import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Signup';
import Login from './Login';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Post from './components/Post';
import Middlebar from './components/Middlebar';
import Rightbar from './components/Rightbar';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup />} />
     <Route path='/navbar' element={<Navbar/>} />
     <Route path='/sidebar' element={<Sidebar/>}/>
     <Route path='/post' element={<Post/>}/>
     <Route path='/middlebar' element={<Middlebar/>}/>
     <Route path='/rightbar' element={<Rightbar/>}/>
     <Route path='/'element={<Home />}/>
    
    </Routes>
    
    </BrowserRouter>
   



  );
}

export default App;
