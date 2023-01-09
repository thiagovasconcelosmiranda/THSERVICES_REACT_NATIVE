import styled from "styled-components";


const Container = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;

`;

const CustomButtom = styled.TouchableOpacity`
width: 230px;
height: 50px;
border-radius: 25px;
background-color: #268596;
justify-content: center;
align-items: center;
margin-left: auto;
margin-right: auto;
margin-top: 30px;

`;


const CustomButtonText = styled.Text `
 font-size:  18px;
 color:#FFFFFF;
`;

export {Container, CustomButtom, CustomButtonText};