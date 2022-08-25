import React from 'react'
import {Routes,Route} from "react-router-dom";
import About from '../Components/About';
import Blog from '../Components/Blog';
import Forums from '../Components/Forums';
import Home from '../Components/Home';
import Login from '../Components/Login';
import Products from '../Components/Products';
import Support from '../Components/Support';
import Diary from '../Inside/Diary';


const AllRoutes = () => {
  return (
    <div>
        <Routes>
        
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/support" element={<Support/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/forums" element={<Forums/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/diary" element={<Diary/>}/>

        </Routes>
    </div>
  )
}

export default AllRoutes