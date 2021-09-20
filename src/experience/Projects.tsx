import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import "./Projects.css";
import { data } from "./data";
import { useMediaQuery } from "react-responsive";

interface CProps {
  description: string;
  name: string;
  img: string;
}

const Projects = () => {
  const [dataSet, setDataSet] = useState<any>([]);

  useEffect(() => {
    const newData = data.map((el) => (
      <Card
        key={Date.now()}
        name={el.name}
        description={el.description}
        img={el.img}
      />
    ));

    setDataSet(newData);
  }, []);

  return (
    <div id="works" className="works">
      <section className="works-header header">
        <p
          className="works-header-heading"
          style={{ color: "white", fontWeight: "bolder" }}
        >
          Projects
        </p>
        <div className="fields">
          <button
            id="developer-btn"
            className="fields-developer-btn fields-btn colored-btn"
          >
            Developer
          </button>
        </div>
      </section>
      <hr />

      <section
        id="works-as-a-developer"
        className="works-as-a-developer fade-in"
      >
        {dataSet}
      </section>
    </div>
  );
};

const Card = ({ img, name, description }: CProps) => {

  
const handleMediaQueryChange = (matches: boolean) => {
  if(matches) {
    window.alert("Trigger a window's alert at viewport of 1244px")
  }
};
const isDesktop = useMediaQuery(
  { minWidth: 1224 }, undefined,  handleMediaQueryChange
);


  return (
    <Wrapper bg={img} className="SpinWhot project">
      <div className="project-name-holder">
        <p className="project-name-holder-SpinWhot project-title">{name}</p>
      </div>

      <Glass className="">{isDesktop && description}</Glass>
    </Wrapper>
  );
};

const Wrapper = styled.section<any>`
  background: url(${(props) => props.bg}) no-repeat;
  backgroundsize: cover;
  backgroundposition: center;
`;

const Glass = styled.p`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  width: 100%;
  height: 100%;

  text-align: center;
  padding: 3rem 2rem;
`;

export default Projects;
