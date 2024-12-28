import { Skills } from "../../data/dataContains";
import {
  Skill,
  SkillImage,
  SkillItem,
  SkillList,
  SkillsContainer,
  SkillTitle,
  Container,
  Wrapper,
  Description,
  Title,
} from "./SkillsStyle";

const Index = () => {
  return (
    <Container id="Skills">
      <Wrapper>
        <Title>Skills</Title>
        <Description>
          The Skills I've Focused on Over the Past Six Months
        </Description>
        <SkillsContainer>
          {Skills &&
            Skills.map((skill) => {
              return (
                <Skill key={skill.title}>
                  <SkillTitle>{skill.title}</SkillTitle>
                  <SkillList>
                    {skill.skills?.map((item) => {
                      return (
                        <SkillItem key={item.name}>
                          <SkillImage
                            src={item?.image}
                            alt={`${item.name} logo`}
                          />
                          {item.name}
                        </SkillItem>
                      );
                    })}
                  </SkillList>
                </Skill>
              );
            })}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Index;
