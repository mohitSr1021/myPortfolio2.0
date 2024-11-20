import styled, { keyframes } from "styled-components";

const Document = styled.img`
  display: none;
  height: 70px;
  width: fit-content;
  background-color: #000;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Card = styled.div`
  width: 650px;
  border-radius: 8px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
  @media only screen and (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px;
  }

  &:hover ${Document} {
    display: flex;
  }

  &:hover ${Span} {
    overflow: visible;
    -webkit-line-clamp: unset;
  }
  border: 0.1px solid #d2d7d5;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

const Image = styled.img`
  height: 50px;
  background-color: #000;
  border-radius: 12px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const BodyBottom = styled.div`
  width: 100%;
  display: flex;
  margin: 4px 0px;
  align-items: center !important;
  justify-content: space-between;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Degree = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_highLight + 95};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Grade = styled.div`
  width: fit-content;
  padding: 0px 4px;
  border-radius: 3px;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.primary},
    #5eead4,
    ${({ theme }) => theme.primary}
  );
  background-size: 200% 200%;
  animation: ${gradientAnimation} 5s ease infinite;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const EducationCard = ({ education }) => {
  return (
    <Card>
      <Top>
        <Image src={education.img} />
        <Body>
          <Name>{education.school}</Name>

          <BodyBottom>
            <Degree>
              {education?.degree ? (
                <>Degree: {education?.degree}</>
              ) : (
                <>Stream: {education?.Stream}</>
              )}
            </Degree>
            <Date>{education.date}</Date>
          </BodyBottom>
          <Grade>
            {education?.grade ? (
              <>Grade: {education.grade}</>
            ) : (
              <>Percentage: {education?.percentage}</>
            )}
          </Grade>
        </Body>
      </Top>

      <Description>
        <Span>{education.desc}</Span>
      </Description>
    </Card>
  );
};

export default EducationCard;
