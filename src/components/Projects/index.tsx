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
import { Projects as projects } from "../../data/dataContains";
import { useState } from "react";

interface Project {
  image?: string;
  tags?: string[];
  title: string;
  date: string;
  description?: string;
}

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

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "Web Application" ? (
            <ToggleButton
              active
              value="Web Application"
              onClick={() => setToggle("Web Application")}
            >
              WEB APP'S
            </ToggleButton>
          ) : (
            <ToggleButton
              value="Web Application"
              onClick={() => setToggle("Web Application")}
            >
              WEB APP'S
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
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
