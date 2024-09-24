
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import Home from './Home/Home.jsx';
import MovieDetails from './MovieDetails/MovieDetails.jsx';
import Login from './Login/Login.jsx';
import Error from './Error.jsx';
import NavbarComp from './Navbar/NavbarComp.jsx';
import Profile from './Profile/profile.jsx';
import Wishlist from './Wishlist/Wishlist.jsx';
function App() {
  return(
  <>
  <BrowserRouter>
  <NavbarComp/>
    <Routes>
    <Route path="/login"  element={<Login/>}/>
    <Route path="/"  element={<Home/>}/>
    <Route path="/movie/:id" element={<MovieDetails />}/>
    <Route path="*" element={<Error/>}/>
    <Route path="/profile" element ={<Profile/>}/>
    <Route path="/wishList" element ={<Wishlist/>}/>
    </Routes>
</BrowserRouter>
</>
  )
}

export default App
