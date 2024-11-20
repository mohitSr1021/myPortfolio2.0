import { PuffLoader } from "react-spinners";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.bg};
`;

const SpinnerContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f7ff;
`;

export default function Loader() {
  return (
    <LoaderWrapper>
      <SpinnerContainer>
        <PuffLoader
          color={"#B5C8CB"}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </SpinnerContainer>
    </LoaderWrapper>
  );
}
