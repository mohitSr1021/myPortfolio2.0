import { useState } from "react";
import styled from "styled-components";
import Android_Dev from "../../assets/Android_App_Development_Training_Certificate.jpg";
import Artificial_intelligence from "../../assets/Artificial_intelligence.jpg";
import UX_Design from "../../assets/UX_Design_Foundation_by_Adobe.jpg";
import Achv from "../../assets/hackathon_certificate .jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  color: white;
  align-items: center;
  margin-top: 40px;
  padding: 0px 0px 60px 0px;
  background-color: black;

  @media (max-width: 1024px) {
    padding: 0px 40px;
  }

  @media (max-width: 960px) {
    padding: 0px 30px;
  }

  @media (max-width: 640px) {
    padding: 0px 20px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  perspective: 1000px;
  width: 100%;
  max-width: 1200px;
  transform-style: preserve-3d;

  @media (max-width: 1024px) {
    max-width: 900px;
  }

  @media (max-width: 960px) {
    max-width: 600px;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const CardContainer = styled.div`
  width: calc(25% - 15px);
  aspect-ratio: 3 / 4;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: calc(33.33% - 13.33px);
  }

  @media (max-width: 960px) {
    width: calc(50% - 10px);
  }

  @media (max-width: 640px) {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }

  &:hover {
    transform: scale(1.05);
  }
`;


interface CardProps {
  flipped?: boolean;
}

const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transform: ${(props) => (props?.flipped ? "rotateY(180deg)" : "rotateY(0)")};
  transition: transform 0.6s;

  @media (max-width: 640px) {
    border-radius: 20px;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin: 20px 0px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 960px) {
    font-size: 36px;
  }

  @media (max-width: 640px) {
    font-size: 32px;
  }
`;

const CertdTitle = styled.div`
  font-size: 24px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 960px) {
    font-size: 22px;
  }

  @media (max-width: 640px) {
    font-size: 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 640px) {
    border-radius: 20px;
  }
`;

const Date = styled.div`
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 10px;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`;

const CertificateCard = ({ title, imageUrl, date }:{title:string,imageUrl:string,date:string}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <CardContainer onClick={() => setFlipped(!flipped)}>
      <Card flipped={!flipped}>
        <CertdTitle>{title}</CertdTitle>
        <Date>Completed: {date}</Date>
      </Card>
      <Card flipped={flipped}>
        <Image src={imageUrl} alt={title} />
      </Card>
    </CardContainer>
  );
};

const Certificate = () => {
  return (
    <Container id="certifications">
      <Title>Certificates</Title>
      <Wrapper>
        <CertificateCard
          title="Android App Development"
          imageUrl={Android_Dev}
          date="July 2022"
        />
        <CertificateCard
          title="Adobe UX Foundation"
          imageUrl={UX_Design}
          date="February 2022"
        />
        <CertificateCard
          title="Artificial Intelligence"
          imageUrl={Artificial_intelligence}
          date="August 2021"
        />
        <CertificateCard
          title="Hackathon Achievement"
          imageUrl={Achv}
          date="August 2021"
        />
      </Wrapper>
    </Container>
  );
};

export default Certificate;
