import React from "react";
import Projects from "./Projects";
import { appTitle } from "../config";
import MediaQuery from "react-responsive";

const Experience = () => {
  window.document.title = `${appTitle}: Experience`;
  return (
    <div className="container max-w-screen-lg mx-auto">
      <div className="mt-8">
        <MediaQuery maxWidth={786}>
          <h1 className="text-3xl text-center mb-6 z-50">
            For desktop view only
          </h1>
        </MediaQuery>

        <MediaQuery minWidth={1224}>
          <Projects />
        </MediaQuery>
      </div>
    </div>
  );
};

export default Experience;
