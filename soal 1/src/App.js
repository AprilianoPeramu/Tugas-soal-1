import './App.css';
import{Link, Route, Routes} from 'react-router-dom'

//import pages
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Music from './Pages/Music';
import Gallery from './Pages/Gallery';
import Film from './Pages/Film';

function App() {
  return (
      <>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Profile'>Profile</Link></li>
        <li><Link to='/Galery'>Gallery</Link></li>
        <li><Link to='/Music'>Music</Link></li>
        <li><Link to='/Film'>Film Favorite</Link></li>
      </ul>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Profile' element={<Profile/>} />
        <Route path='/Galery' element={<Gallery/>} />
        <Route path='/Music' element={<Music/>} />
        <Route path='/Film' element={<Film/>} />
      </Routes>
      </>
  );
}



export default App;
