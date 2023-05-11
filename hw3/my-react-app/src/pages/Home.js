import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './Nav'
const Home = () => {
  return (
    <><div className='h-100'>
      <h1 className='text-center p-4'>
        Welcome to the Game Of Thrones Website!
      </h1>
      <p className="text-center">This website offers two major features. The first feature is a doughnut chart of the number of characters
        in each Game of Thrones House. The second feature if the ability to search for any character. </p>
    </div></>
  );
};

export default Home;