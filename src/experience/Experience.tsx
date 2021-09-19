import React from "react";
import Projects from "./Projects";
import { appTitle } from "../config";


const Experience = () => {
  window.document.title = `${appTitle}: Experience`;
  return (
    <div className="container max-w-screen-lg mx-auto">
      <div className="mt-8">
        <h1 className="text-3xl text-center mb-6 z-50">Work in progress...</h1>
        <div><Projects/></div>
      </div>
    </div>
  );
};

export default Experience;
