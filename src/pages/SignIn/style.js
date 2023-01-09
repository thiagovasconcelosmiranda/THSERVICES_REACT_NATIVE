import styled from "styled-components";


const Container = styled.SafeAreaView`
background-color: #111;
flex: 1;
justify-content: center;
align-items: center;
`;

const LangView = styled.View`
 width:100%;
 height:100px;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 margin-top: -2px;
`;

const ButtonLang = styled.TouchableOpacity`
   border: transparent;
   margin: 20px;
   padding: 10px;
   width: auto;
   height: 40px;
   justify-content: center;
   align-items: center;
   border-color: '#037CFC';
`;

const ButtonLangText = styled.Text`
  color: #fff;
  font-size: 14px;
`;

const ImageView = styled.View`
 width:100%;
 position: absolute;
 top: 60px;
`;

const InputArea = styled.View`
   width: 80%;
   margin-top:190px;
   height:400px;
   padding: 30px;
   background-color: #333;
   border-top-left-radius:30px;
   border-top-right-radius:30px;
   margin-top:40%;
`;

const MessageText = styled.Text`
 color: #fff;
 text-align:center;
 font-size: 20px;
`;


const AlignButton = styled.View`
  width:100%;
`;

const CustomButtom = styled.TouchableOpacity`

width:230px;
height: 56px;
border-radius: 25px;
background-color: #268596;
justify-content: center;
align-items: center;
margin-left: auto;
margin-right: auto;
`;


const CustomButtonText = styled.Text `
  font-size:  18px;
  color:#FFFFFF;
`;
const LoginIcon = styled.ActivityIndicator`
`;

 const SignMessageButton = styled.TouchableOpacity`
   flex-direction:row;
   justify-content: center;
   margin-top: 20px;
   margin-bottom:20px;

`;

const SignMessageButtonTextBold = styled.Text `
font-size:16px;
color: #FFF;
font-weight:bold;
margin-left: 8px;
`;




export {Container, LangView, ButtonLang, ButtonLangText,
   InputArea, MessageText, CustomButtom,
    CustomButtonText, LoginIcon, ImageView,
     AlignButton, SignMessageButton,
       SignMessageButtonTextBold}