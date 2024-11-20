import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import bg from "../assets/intro-bg.png";
import { gsap } from "gsap";
import clickme from "../assets/swipe.png";

const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.bg};
  position: relative;
  overflow: hidden;
`;

const IntroBgContainer = styled.div`
  width: 100%;
  height: 140vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: auto;
  position: relative;
`;

const IntroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ClickMeButton = styled.span`
  position: absolute;
  height: 20px;
  bottom: 6%;
  right: 10%;
  display: flex;
  align-items: center;
  animation: bounce 10s infinite;
  opacity: 0.4;
  cursor: pointer;
`;

const MouseFollowDiv = styled.div<{ x: number; y: number }>`
  position: absolute;
  width: 80px;
  height: 80px;
  opacity: 0.3;
  background-color: black;
  filter: sepia(100%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  left: ${({ x }) => x}px;
  top: ${({ y }) => y}px;
  pointer-events: none;
`;

const LoadingOverlay = styled.div`
  width: 180px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: 3%;
  gap: 6px;
  right: 10%;
  animation: bounce 10s infinite;
  opacity: 0.4;
  cursor: pointer;
`;

const LoadingText = styled.div`
  font-size: 38px;
  min-width: 55px;
  text-align: center;
  font-weight: bold;
  color: ${({ theme }) => theme.black};
  opacity: ${({ theme }) => theme.opacity};
`;

const SpanLoading = styled.span`
  font-size: 38px;
  font-weight: 800px;
  margin-bottom: 6px;
  color: #a5a6ab;
`;

interface WelcomePageProps {
  onComplete: () => void;
}

export default function WelcomePage({ onComplete }: WelcomePageProps) {
  const [showButton, setShowButton] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMouseInside, setIsMouseInside] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);
  const clickMeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleEnterSite = () => {
    const tl = gsap.timeline();

    tl.to(clickMeRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
      onComplete: () => setShowLoading(true),
    });

    tl.to(
      {},
      {
        onComplete: () => startLoadingAnimation(),
      }
    );
  };

  const startLoadingAnimation = () => {
    const loadingValue = { value: 0 };

    const tl = gsap.timeline();

    tl.to(loadingValue, {
      value: 100,
      duration: 3,
      ease: "power1.inOut",
      onUpdate: () => {
        setLoadingPercentage(Math.round(loadingValue.value));
      },
      onComplete,
    });
  };

  // Mouse enter/leave and movement handlers
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePos({ x: clientX, y: clientY });
  };

  const handleMouseEnter = () => {
    setIsMouseInside(true);
  };

  const handleMouseLeave = () => {
    setIsMouseInside(false);
  };

  return (
    <WelcomeWrapper ref={wrapperRef}>
      <IntroBgContainer
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <IntroImage src={bg} alt="intro" id="Bg" />
        {showButton && (
          <ClickMeButton ref={clickMeRef} onClick={handleEnterSite}>
            {"<"} click me {"/>"}
          </ClickMeButton>
        )}
      </IntroBgContainer>
      {showLoading && (
        <LoadingOverlay ref={loadingRef}>
          <SpanLoading>loading </SpanLoading>{" "}
          <LoadingText>{loadingPercentage}%</LoadingText>
        </LoadingOverlay>
      )}
      {/* Show MouseFollowDiv only when the mouse is inside the container */}
      {isMouseInside && <MouseFollowDiv x={mousePos.x} y={mousePos.y} />}
    </WelcomeWrapper>
  );
}
