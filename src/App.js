import Movies from "./pages/Movies";
import Profile from "./pages/Profile";
import { Routes, Route } from 'react-router-dom';
import PageNotFound from "./pages/PageNotFound";
import MyNavbar from "./components/MyNavbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { useState } from "react";

/**
 * 
 * Halaman movie itu routing nya /movies
 * Halaman profile itu routing nya /profile
 */

function App() {
  const [ cart, setCart ] = useState([]);

  return (
    <div>
      <h1>Hello World</h1>
      <MyNavbar />
      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='/movies' element={ <Movies setCart={setCart}/> }></Route>
        <Route path='/profile' element={ <Profile /> }></Route>
        <Route path='/cart'element={ <Cart cart={cart}/>}></Route>
        <Route path='*' element={ <PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
