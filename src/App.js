import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
// import Registe from './Registe';
import Register from './Registe';
import NavBar from './NaveBar';
import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider, Routes } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route>

    <Route path='/' element={ <Register/>} /> 
    <Route path='/Login' element={ <Login/>} /> 
    <Route path='/Home' element={<Home/>} />
    
  {/* <NavBar/> */}


  </Route>
  

  )
)


function App() {

  return (
    <div>
      <NavBar/>
      <RouterProvider router={router}/>
     
      
    </div>
  );
}

export default App;
