import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1 class="text-3xl font-bold underline white">Home</h1>
      <NavLink to="/login">Login</NavLink>
      <p></p>
      <NavLink to="/register">Register</NavLink>
    </div>
  );
};

export default Home;
