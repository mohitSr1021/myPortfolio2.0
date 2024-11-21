import React from "react";
import { FaReact } from "react-icons/fa6";
import styled from "styled-components";
import { Project } from "../../data/dataContains";

const Card = styled.div`
  width: 330px;
  min-height: 450px;
  margin-top: 20px;
  position: relative;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 3px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.5s ease-in-out;

  &:hover {
    box-shadow: 0 0 50px 4px rgba(100, 100, 100, 0.6);
    filter: brightness(1.1);

    .hover-overlay {
      opacity: 1;
    }
  }

  .hover-overlay {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(100, 100, 100, 0.22);
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    font-size: 20px;
    color: white;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }

  .hover-overlay .icon {
    font-size: 40px;
    margin-bottom: 8px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 4px;
  gap: 8px;
  margin-top: 4px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + "15"};
  padding: 2px 8px;
  border-radius: 10px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  padding: 0 4px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  padding: 0 4px;
  color: ${({ theme }) => theme.text_secondary + "80"};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + "99"};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  padding: 0 4px;
`;

interface ModalState {
  state: boolean;
  project: Project | null;
}

interface ProjectCardsProps {
  project: Project;
  setOpenModal: React.Dispatch<React.SetStateAction<ModalState>>;
}

const ProjectCards: React.FC<ProjectCardsProps> = ({ project, setOpenModal }) => {
  return (
    <Card onClick={() => setOpenModal({ state: true, project })}>
      <div className="hover-overlay">
        <FaReact className="icon" style={{ color: "#5eead4" }} />
        <span>Project Overview</span>
      </div>
      <Image src={project.image} alt={`${project.title} Thumbnail`} />
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
    </Card>
  );
};

export default ProjectCards;
