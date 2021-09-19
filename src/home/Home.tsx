import React, { useEffect } from 'react';
import { appTitle } from '../config';
import logo from "../assets/images/bunny.png";

const Home = () => {
  window.document.title = `${appTitle}: Home`;
  return (
    <>
      <div className="container max-w-screen-lg mx-auto">
        <div className="flex flex-col justify-center items-center px-8">
          <div className="mt-8 md:mt-4 z-10">
            <img
              className="w-48 md:w-64 h-48 md:h-64 rounded-full border-2"
              src={logo}
              alt="opengravitas"
            />
          </div>
          <h1 className="text-3xl mt-4 text-center font-normal">Hey there! This is Opengravitas.</h1>
          <h3
            className="text-2xl mt-4 md:mt-2 w-full text-center font-light leading-relaxed"
            style={{ fontFamily: 'Lato' }}
          >
            I'm a passionate and driven self-taught <span className="font-medium">software developer</span> from Africa
            specializing in <span className="font-medium">front-end development</span> and{' '}
            <span className="font-medium">design</span>. I create professional web applications and design systems.
            </h3>
        </div>
      </div>
    </>
  );
};

export default Home;
