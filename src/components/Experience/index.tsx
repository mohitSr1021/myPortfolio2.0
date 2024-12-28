import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { Experiences } from "../../data/dataContains";
import {
  Typography,
  Button,
  Chip,
  Collapse,
  IconButton,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 60px 16px;
  background-color: ${({ theme }) => theme.bg};

  @media (max-width: 768px) {
    padding: 40px 12px;
  }
`;

const Wrapper = styled.div`
  max-width: calc(850px * 2 + 48px); // Width of two cards plus gap
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  animation: ${fadeIn} 0.6s ease-out;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 16px;
  }
`;

const Title = styled.h2`
  font-size: clamp(28px, 5vw, 40px);
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
  text-align: center;
  letter-spacing: -0.02em;
`;

const TimelineContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  padding: 10px 0;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    overflow-y: auto;
    max-height: 80vh;
    scroll-snap-type: y mandatory;
  }
`;

const TimelineWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0;
  padding: 0 24px;
  min-width: min-content;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
    padding: 0;
  }
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 auto;
  min-width: 400px;
  position: relative;
  padding: 0 24px;
  scroll-snap-align: start;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 24px;
    right: -32px;
    width: 56px;
    height: 3px;
    background: ${({ theme }) => theme.primary};
    z-index: 1;
  }

  @media (max-width: 768px) {
    min-width: 100%;
    padding: 0;

    &:not(:last-child)::after {
      top: auto;
      bottom: -16px;
      right: auto;
      left: 12px;
      width: 3px;
      height: 32px;
    }
  }
`;

const TimelineDot = styled.div`
  width: 24px;
  height: 24px;
  border: 3px solid ${({ theme }) => theme.primary};
  border-radius: 50%;
  background: ${({ theme }) => theme.bg};
  margin-top: 14px;
  margin-right: 16px;
  flex-shrink: 0;
  position: relative;
  z-index: 2;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    background: ${({ theme }) => theme.primary};
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    margin-top: 0;
    margin-right: 12px;
  }
`;

const ExperienceCard = styled.div`
  background-color: ${({ theme }) => theme.card2};
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  border: 1px solid ${({ theme }) => theme.card_light};
  width: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const ChipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 12px 0;
`;

const StyledChip = styled(Chip)`
  border-radius: 8px;
  font-weight: 500;
  padding: 4px 8px;
  height: 28px;
  background: ${({ theme }) => `${theme.primary}1a`} !important;
  border: 1px solid ${({ theme }) => `${theme.primary}4d`} !important;
  color: ${({ theme }) => theme.primary} !important;

  &.MuiChip-outlined {
    border-width: 1px;
  }
`;

const ContentList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin: 12px 0;

  li {
    position: relative;
    padding-left: 24px;
    margin-bottom: 12px;

    &:before {
      content: "•";
      position: absolute;
      left: 8px;
      color: ${({ theme }) => theme.text_secondary};
    }
  }
`;

interface Experience {
  id?: string | number;
  role: string;
  company: string;
  date: string;
  desc?: string;
  highlights?: string[];
  projects?: Array<{ name: string; url?: string }>;
  doc?: string;
  skills?: string[];
}

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCardComponent: React.FC<ExperienceCardProps> = ({
  experience,
}) => {
  const { role, company, date, desc, highlights, projects, doc, skills } =
    experience;
  const [expanded, setExpanded] = useState(false);

  return (
    <ExperienceCard>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          fontSize: "1.1rem",
          marginBottom: 1,
          color: "text_primary",
        }}
      >
        {role}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          color: "text_primary",
          fontSize: "0.9rem",
          fontWeight: "600",
          marginBottom: 1,
        }}
      >
        {company}{" "}
        <div
          style={{ fontSize: "0.8rem", marginLeft: "auto", fontWeight: "300" }}
        >
          {date}
        </div>
      </Typography>
      {desc && (
        <Typography
          variant="body2"
          sx={{
            lineHeight: 1.6,
            color: "text_secondary",
            fontSize: "0.85rem",
          }}
        >
          {desc}
        </Typography>
      )}
      {skills && skills.length > 0 && (
        <ChipContainer>
          {skills.map((skill, index) => (
            <StyledChip
              key={index}
              label={skill}
              variant="outlined"
              size="small"
            />
          ))}
        </ChipContainer>
      )}
      <IconButton
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        aria-label="show more"
        sx={{
          transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.3s ease",
          margin: "8px 0",
          color: "text_secondary",
        }}
      >
        <ExpandMoreIcon />
      </IconButton>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {highlights && highlights.length > 0 && (
          <div>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 600,
                marginTop: 2,
                marginBottom: 1,
                color: "text_primary",
              }}
            >
              Key Achievements
            </Typography>
            <ContentList>
              {highlights.map((highlight, index) => (
                <li key={index}>
                  <Typography variant="body2" sx={{ color: "text_secondary", fontSize: "0.85rem" }}>
                    {highlight}
                  </Typography>
                </li>
              ))}
            </ContentList>
          </div>
        )}
        {projects && projects.length > 0 && (
          <div>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 600,
                marginTop: 2,
                marginBottom: 1,
                color: "text_primary",
              }}
            >
              Projects
            </Typography>
            <ContentList>
              {projects.map((project, index) => (
                <li key={index}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      color: "#854CE6",
                      fontWeight: 500,
                      fontSize: "0.85rem",
                    }}
                  >
                    {project.name}
                  </a>
                </li>
              ))}
            </ContentList>
          </div>
        )}
        {/* {doc && (
          <Button
            variant="outlined"
            color="primary"
            href={doc}
            target="_blank"
            sx={{
              marginTop: 2,
              borderRadius: "8px",
              textTransform: "none",
              fontWeight: 600,
              padding: "6px 12px",
              borderColor: "primary",
              color: "primary",
              fontSize: "0.85rem",
            }}
          >
            View Document
          </Button>
        )} */}
      </Collapse>
    </ExperienceCard>
  );
};

const NavButton = styled(IconButton)`
  background: ${({ theme }) => theme.card} !important;
  color: ${({ theme }) => theme.primary} !important;
  border: 1px solid ${({ theme }) => theme.primary};
  &:hover {
    background: ${({ theme }) => theme.card2} !important;
  }
`;

const TimelineContainerWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkScroll = () => {
    if (!containerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(
      scrollLeft < scrollWidth - clientWidth && Experiences.length > 3
    );
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const isSmallScreen = window.innerWidth <= 768;
    const scrollAmount = isSmallScreen ? containerRef.current.scrollHeight : 848;

    if (isSmallScreen) {
      containerRef.current.scrollBy({
        top: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    } else {
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Container id="Experience">
      <Wrapper>
        <Title>Professional Journey</Title>
        <TimelineContainerWrapper>
          <TimelineContainer ref={containerRef} onScroll={checkScroll}>
            <TimelineWrapper>
              {Experiences.map((experience, index) => (
                <TimelineItem key={experience.id || index}>
                  <TimelineDot />
                  <ExperienceCardComponent experience={experience} />
                </TimelineItem>
              ))}
            </TimelineWrapper>
          </TimelineContainer>
          <div
            style={{
              width: "100px",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              margin: "24px auto",
            }}
          >
            {showLeftArrow && (
              <NavButton
                className="left"
                onClick={() => scroll("left")}
                aria-label="Previous experiences"
              >
                <ChevronLeft />
              </NavButton>
            )}
            {showRightArrow && (
              <NavButton
                className="right"
                onClick={() => scroll("right")}
                aria-label="Next experiences"
              >
                <ChevronRight />
              </NavButton>
            )}
          </div>
        </TimelineContainerWrapper>
      </Wrapper>
    </Container>
  );
};

export default Experience;

