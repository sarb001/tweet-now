
import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import PagenotFound from './components/PagenotFound';
import Profile from './components/Profile';
import Signup from './components/Signup';

import { Route , Routes } from 'react-router-dom' ;

function App() {

  return (
   <>
   <Navbar />
     <Routes>
        <Route path='/' element = {<Home />}>  </Route>
        <Route path='/about' element = {<About />}>  </Route>
        <Route path='/contact' element = {<Contact />}>  </Route>
        <Route path='/signup' element = {<Signup />}>  </Route>
        <Route path='/login' element = {<Login />}>  </Route>
        <Route path='/profile' element = {<Profile />}>  </Route>
        <Route path='*' element = {<PagenotFound />}>  </Route>
     </Routes>

   </>
  )
}

export default App
