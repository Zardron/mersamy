import React from "react";
import styled from "styled-components";
import SliderComp from "./Slider";

const Projects = () => {
  return (
    <Container id="project">
      <SliderComp />
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  @media (max-width: 840px) {
    width: 90%;
    padding: 1rem 0;
  }

  p {
    margin: 0 auto;
    padding: 1rem 0;
    @media (max-width: 500px) {
      width: 90%;
    }
  }
`;
