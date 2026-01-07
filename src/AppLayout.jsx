import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Clients from './pages/Clients';
import Portfolio from './pages/Portfolio';
import Products from './pages/Products';
import Service from './pages/Service';
import Counter from './pages/Counter';
import Toggle from './pages/Toggle';
import Form from './pages/Form';
import StudentData from './pages/StudentData';
const AppLayout= () => {
return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />}></Route> 
            <Route path="/clients" element={<Clients />}></Route> 
            <Route path="/portfolio" element={<Portfolio />}></Route> 
            <Route path="/products"element={<Products />} ></Route>
            <Route path="/service" element={<Service />}></Route>
            <Route path="/counter" element={<Counter />}></Route>
            <Route path="/toggle" element={<Toggle />}></Route> 
            <Route path="/form" element={<Form />}></Route>
            <Route path="/data" element={<StudentData />}></Route>
        </Routes>
    </Router>

);
};

export default AppLayout;
