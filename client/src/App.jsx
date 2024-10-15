import './App.css'
import Navbar from './components/Navbar';
import Adduser from './components/addusers';
import Footer from './components/footer';
import Allusers from './components/getusers';
import Home from './components/home';
import Login from './components/login';
import {Toaster} from "react-hot-toast";
import Signup from './components/signup';
import Stats from './components/stats';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import * as React from 'react';
import DataGridDemo from './dashboard/status';
export default function App() {
  return (
    <Router>
      <Toaster></Toaster>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/addlead' element={<Adduser/>}/>
        <Route path='/gettheleads' element={<Allusers/>}/>
        <Route path='/dashboard' element={<DataGridDemo/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

