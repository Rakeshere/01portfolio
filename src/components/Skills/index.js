import React from 'react'
import styled, {keyframes} from 'styled-components'
import { skills } from '../../data/constants'

// Keyframes for neon border effect
const neonBorder = keyframes`
  0% {
    border-color: #ff00ff;
    box-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 40px #ff00ff;
  }
  25% {
    border-color: #00ffff;
    box-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff;
  }
  50% {
    border-color: #00ff00;
    box-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 40px #00ff00;
  }
  75% {
    border-color: #ffff00;
    box-shadow: 0 0 5px #ffff00, 0 0 10px #ffff00, 0 0 20px #ffff00, 0 0 40px #ffff00;
  }
  100% {
    border-color: #ff0000;
    box-shadow: 0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 40px #ff0000;
  }
`;

// Keyframes for glowing text effect
const glowingText = keyframes`
  0% {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  }
  50% {
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.8);
  }
  100% {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  }
`;


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`
//Skill Title
export const Title = styled.div`
font-size: 40px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  border: 4px solid transparent;
  border-radius: 15px;
  padding: 10px;
  animation: ${glowingText} 3s infinite alternate; /* Apply glowing text animation */ 
  @media (max-width: 768px) {
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: rgba(23, 92, 230, 0.9) 0px 8px 24px;
  }
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }


`

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
  animation: ${neonBorder} 3.5s infinite alternate;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 80px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background 0.3s ease, transform 0.3s ease;
  &:hover {
    background: ${({ theme }) => theme.text_primary + 20};
    transform: scale(1.05);
  }
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
  ${SkillItem}:hover & {
    transform: rotate(10deg);
  }
`


const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Here are some of my skills on which I have been working on for the past 2 years.
        </Desc>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem>
                    <SkillImage src={item.image}/>
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}

        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills




//note:- effect removes above with keyframes