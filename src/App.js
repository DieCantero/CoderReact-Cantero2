import * as React from 'react';npm
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <div className="App bg-dark">
      <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/categoria/:categoria' element={<ItemListContainer/>} />    
            <Route path='/item/detail/:titulo' element={<ItemDetailContainer/>} />   
          </Routes>
          <Footer/>
      </Router>
    
    </div>
    
  );
}

export default App;