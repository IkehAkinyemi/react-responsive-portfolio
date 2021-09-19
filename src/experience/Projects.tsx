import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import "./Projects.css";
import { data } from "./data";

interface CProps {
  description: string;
  name: string;
  img: string
}

const Projects = () => {
  const [dataSet, setDataSet] = useState<any>([]);

  useEffect(() => {
    const newData = data.map((el) => (
      <Card key={Date.now()} name={el.name} description={el.description} img={el.img} />
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
  return (
    <Wrapper bg={img} className="SpinWhot project">
      <div className="project-name-holder">
        <p className="project-name-holder-SpinWhot project-title">{name}</p>
      </div>

      <section className="works-hover-state fade-in">
        <p className="works-hover-state-name">{name}</p>
        <p className="works-hover-state-desc">{description}</p>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section<any>`
  background: url(${(props) => props.bg}) no-repeat;
  backgroundsize: cover;
  backgroundposition: center;
`;

export default Projects;
