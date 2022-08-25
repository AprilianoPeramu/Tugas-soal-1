import{ Route, Routes,} from 'react-router-dom'
import './App.css';
import Artis from './daftarArtis/Artis';
import Home from './daftarArtis/Home';



function App() {


  return (
   <>

   <Routes>
   <Route path='/' element={<Home />}/>
    <Route path='/daftarArtis/:id' element={<Artis />}/>
   </Routes>
   </>
  );
}

export default App;