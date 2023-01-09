import styled from "styled-components";


const Container = styled.View`
 flex: 1;
 padding:20px ;
`;

const HeaderArea = styled.View`
 width: 100%;
 height: 50px;
 flex-direction: row;
 align-items: center;
 margin-left:-30px;
 margin-top:10px;
`;

const ItemLeft = styled.TouchableOpacity`
 margin-top: 20px;
 height:50px;
`;

const HeaderText = styled.Text`
   font-size: 20px;
   margin: 10px;
   color: blue;
`;

export {Container, HeaderArea, ItemLeft, HeaderText}