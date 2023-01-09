
import styled from "styled-components";


const Container = styled.SafeAreaView`
background-color: #111;
flex: 1;
justify-content: center;
align-items: center;
`;

const ImageView = styled.View`
 width:100%;
 position: absolute;
 top: 4px;
`;

const CustomUpload = styled.TouchableOpacity`
 flex-direction: row;
align-items: center;
`;

const UploadText = styled.Text`
 color: #FFF;
 margin-left: 10px;
 font-size: 20px;
`;

const InputArea = styled.View`
   width: 80%;
   margin-top:180px;
   height:auto;
   padding: 30px;
   background-color: #333;
   border-top-left-radius:30px;
   border-top-right-radius:30px;
`;

const AlignButton = styled.View`
  width:100%;
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

`;


const CustomButtonText = styled.Text `
 font-size:  18px;
 color:#FFFFFF;
`;
const LoginIcon = styled.ActivityIndicator`
`;
const ImageAlign = styled.View`
  width:100%;
  
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


export {Container, InputArea, CustomUpload, UploadText, CustomButtom,
         CustomButtonText, LoginIcon, ImageAlign,
         AlignButton, SignMessageButton,
         SignMessageButtonTextBold, ImageView
        }
