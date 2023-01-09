import styled from "styled-components";


const Container = styled.SafeAreaView`
  flex: 1;
`;
const ItemLeft = styled.TouchableOpacity`
`;

const ViewAuth = styled.View`
 height:100px;
 flex-direction: row;
 background-color: #fff;
 align-items:center;
 margin:10px;
`;

const Image = styled.Image`
   border-radius:25px;
   margin-left: 10px;
`;

const ViewMenu = styled.View`
 padding: 20px;
 height: auto ;


`;

const LoginIcon = styled.ActivityIndicator``;


const ContainerDados = styled.View`
  flex:2;
  flex-direction: row;
  background-color: #fff;
  align-items:center;

`;


const Text = styled.Text`
  font-size: 15px;
  margin-left: 20px;

`;

const Item = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 40px;
  margin-left: -10px;
`;



export {Container, ViewAuth, Image, LoginIcon, ViewMenu, ContainerDados, ItemLeft , Text, Item}