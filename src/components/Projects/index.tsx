import React, { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { Project, Projects as projects } from "../../data/dataContains";

interface ModalState {
  state: boolean;
  project: Project | null;
}

interface ProjectsProps {
  openModal: ModalState;
  setOpenModal: React.Dispatch<React.SetStateAction<ModalState>>;
}

const Projects: React.FC<ProjectsProps> = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState<string>("all");

  const filteredProjects =
    toggle === "all"
      ? projects
      : projects.filter((project) => project.category === toggle);

  return (
    <Container id="Projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
        I have developed a variety of web applications. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {["all", "Web Application"].map((category) => (
            <React.Fragment key={category}>
              <ToggleButton
                active={toggle === category}
                value={category}
                onClick={() => setToggle(category)}
              >
                {category === "all" ? "All" : category.toUpperCase()}
              </ToggleButton>

              {category !== "Mobile Application" && <Divider />}
            </React.Fragment>
          ))}
        </ToggleButtonGroup>
        <CardContainer>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
