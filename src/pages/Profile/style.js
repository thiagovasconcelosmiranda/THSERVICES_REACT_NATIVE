import styled from "styled-components";

const Container = styled.SafeAreaView`
   flex: 1;
   background-color: #000;
   position: relative;
`;

const HeaderView = styled.View`
flex-direction: row;
 width:100%;
 height: auto;
 background-color: #fff;
 align-items: center;
`;

const SwipeDot = styled.View`
  width: 10px;
  height: 10px;
  background-color: #FFF;
  border-radius: 5px;
  margin:3px;
`;

const SwipeDotActive  = styled.View`
width: 10px;
  height: 10px;
  background-color: #000;
  border-radius: 5px;
  margin:3px;
`;


const ItemLeft = styled.View`
margin-left:-12px;
margin-top: 28px;
height:40px;
`;

const ItemText = styled.Text`
  margin-left:20px;
  margin-top: 28px;
  height:40px;
`;

const HeaderText = styled.Text`
 font-size: 20px;
 color:#00008b;
 margin-left: 30px;
 font-weight: bold;
`;

const ImageView = styled.View`
  flex: 1;
  background-color: #000;
  justify-content:center;
  align-items: center;
`;

const SelfView = styled.View`
   width:130px;
   height:130px;
   border-radius:25px;
   justify-content: center;
   align-items: center;
`;
const InfoView = styled.View`
    flex:2;
    background-color: #FFFF;
    justify-content: center;
    align-items: center;
`;

const IconsView = styled.View`
 width: 100%;
 flex-direction: row;
 margin: 5px;
 justify-content: center;
 align-items:center;
 
`;
const Item = styled.TouchableOpacity`
     margin: 10px;
`;
const LoginIcon = styled.ActivityIndicator``;


const Title = styled.Text`
    font-size:20px;
    font-weight: bold;
    text-align: center;
    margin-top:1px;

`;

const DescritionView = styled.View`
 width: 100%;
 justify-content: center;
 margin-top: -10px;
 align-items: center;

`;

const DescritionText = styled.Text`
    font-size:18px;
    width: 300px;
`;

const TestimonialView = styled.View`
   margin-top:10px;
  
   width: 100%;
   align-items: center;
   justify-content: center;
`;
const TestimonialButton = styled.TouchableOpacity`
 background-color: #fff;
 width: 70%;
`;
const TestimonialText = styled.Text`
 color: blue;
 font-size: 20px;
 text-align: center;
`;

const FooterText = styled.Text`
 margin-top: 20px;
 text-align: center;
 font-size: 22px;
 color: #000;
 
`;


const InputViewModal = styled.View`
 width: 100%;
 height: 100px;
 flex-direction: row;

`;


export { Container, HeaderView,  SwipeDot, SwipeDotActive, ItemText,
         HeaderText, ItemLeft, ImageView, SelfView ,InfoView, IconsView, 
         Item, LoginIcon , Title, DescritionView, DescritionText, TestimonialView, 
         TestimonialButton, TestimonialText, FooterText, InputViewModal
       }