import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import StudentData from './StudentData';

const Home = () => {
  return (
    <div classNmae="full-height bg-primary"  >
    <div>
      Home
    </div>
    <Nav class="flex-column mb-5"> 
        <Link className="mx-2" to="./service">Services</Link>
        <Link className="mx-2" to="./products">Products</Link>
        <Link className="mx-2" to="./clients">Clients</Link>
        <Link className="mx-2" to="/portfolio">Portfolio</Link>
        <Link className="mx-2" to="/data">Student Data</Link>
        <Link className="mx-2" to="/counter">Counter</Link>
        <Link className="mx-2" to="/toggle">Theme</Link>
    </Nav>
      </div>
  );
};

export default Home;
