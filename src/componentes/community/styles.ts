import styled from "styled-components";


export const CommunitySection = styled.section`
  
`;

export const CommunityContainer = styled.div`
  
`;

export const CommunityContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CommunityUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;
export const BackgroundImage = styled.img`
  width: 1920px;
  height: 623px;
  position: relative;
  z-index: 0; 
`;
export const BackgroundImageDown = styled.img`
  width: 1920px;
  height: 525px;
  position: relative;
  z-index: 0; 
    position: relative;
    top: -208px;

`;
export const TextWrapper = styled.div`
    margin-bottom: 20px;
    z-index: 1;
    position: relative;
    display: flex;
    bottom: 300px;
`;

export const TextBlock = styled.div`
  text-align: center;
  color: white; 
  display: flex;
  flex-direction: column;
  position: relative;
    bottom: 177px;

  h2 {
    font-size: 52px; 
    margin-bottom: 20px; 
  }
  p {
    font-size: 32px;
    color: white; 
  }
`;

export const Form = styled.form`
  display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
    position: relative;
    top: 40px;
`;

export const Input = styled.input`
  width: 574px;
  height: 87px;
  padding: 15px;
  color: black; 
  background-color: white; 
  border-radius: 10px;
  position: relative;
  left: 85px;
`;

export const Button = styled.button`
    right: 92px;
    width: 167px;
    height: 67px;
    background-color: black;
    color: white;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
    position: relative;
    border-radius: 8px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: -143px;
`;

export const CommunityDown = styled.div`
  display: flex;
  position: relative;
`;

export const SocialsContent = styled.div`
      color: white;
    position: absolute;
    left: 16%;
    transform: translate(-50%, -50%);
    z-index: 1;
    top: 38px;

  h2 {
    font-size: 42px;
    margin-bottom: 20px;
  }

  p {
    color: white;
    font-size: 24px;
    margin-bottom: 20px;
  }

  img {
    margin-right: 10px;
  }
`;

export const ImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
export const FooterContent = styled.div`
  display: flex;
    justify-content: space-between;
    padding: 20px;
    position: absolute;
    top: -90px;
    right: 5%;
    gap: 60px;
`;
export const Column = styled.div`
 font-size: 20px;
 h3 {
    color: #EAEAEA;
    padding: 0px 0px 20px 0px;

  }

  p {
    color: #787878;

  }
`;