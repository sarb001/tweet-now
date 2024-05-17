
import { useEffect } from 'react';
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
import {  ToastContainer , toast } from 'react-toastify' ;
import 'react-toastify/ReactToastify.css' ;
import {  useDispatch, useSelector } from 'react-redux' ;
import { UserProfile } from './Reducers/UserSlice';
import { ProtectedRoute } from './Authentication/ProtectedRoute';

function App() {

    const dispatch = useDispatch();
    
    const { userdata , isAuth } = useSelector(state => state?.user);
    
    useEffect(() => {
       if(!userdata){
         dispatch(UserProfile());
        }
    },[userdata])


    console.log('isAuth app =',isAuth);
    console.log('isAuth data =',userdata);


  return (
   <>
   <Navbar />
      <Routes>
        <Route path='/' element = {<Home />}>  </Route>

        <Route path='/about' element = {
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        }>  </Route>

        <Route path='/contact' element = {
          <ProtectedRoute>
            <Contact />
          </ProtectedRoute>
        }>  </Route>

        <Route path='/signup' element = {<Signup />}>  </Route>
        <Route path='/login' element = {<Login />}>  </Route>

        <Route path='/profile' element = {
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
        }>  </Route>

        <Route path='/*' element = {<PagenotFound />}>  </Route>
     </Routes>
     <ToastContainer  autoClose = {2000} />

   </>
  )
}

export default App
