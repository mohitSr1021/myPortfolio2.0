import styled, { keyframes } from "styled-components";

// scrol down Animation
const updownAnimation = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 5px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const Svg = styled.svg`
  width: 25px;
  opacity: 1;
  transition: opacity 0.5s;

  .stroke {
    stroke: #c7c4b8;
  }

  .scroller {
    fill: #c7c4b8;
    animation: ${updownAnimation} 1s infinite;
  }
`;

const ScrollDownContainer = styled.div`
  position: absolute;
  left: 50%;
  margin-left: -20px;
  width: 40px;
  height: 40px;
  bottom: 35px;
  padding-left: 7px;
  cursor: pointer;
  z-index: 2;
  color: #c7c4b8;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #ada99d;
  }

  @media (max-width: 640px) {
    left: 50%;
    bottom: 2%;
  }
`;

export const ScrollDown: React.FC = () => {
  return (
    <ScrollDownContainer id="home-scroll-down">
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 25.166666 37.8704414"
      >
        <path
          className="stroke"
          fill="none"
          strokeWidth="2.5"
          strokeMiterlimit="10"
          d="M12.5833445 36.6204414h-0.0000229C6.3499947 36.6204414 1.25 31.5204487 1.25 25.2871208V12.5833216C1.25 6.3499947 6.3499951 1.25 12.5833216 1.25h0.0000229c6.2333269 0 11.3333216 5.0999947 11.3333216 11.3333216v12.7037992C23.916666 31.5204487 18.8166714 36.6204414 12.5833445 36.6204414z"
        />
        <path
          className="scroller"
          d="M13.0833359 19.2157116h-0.9192753c-1.0999985 0-1.9999971-0.8999996-1.9999971-1.9999981v-5.428606c0-1.0999994 0.8999987-1.9999981 1.9999971-1.9999981h0.9192753c1.0999985 0 1.9999981 0.8999987 1.9999981 1.9999981v5.428606C15.083334 18.315712 14.1833344 19.2157116 13.0833359 19.2157116z"
        />
      </Svg>
    </ScrollDownContainer>
  );
};
