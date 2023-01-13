import styled from "styled-components"
import Delete from 'react-native-vector-icons/AntDesign';
import { Image } from "react-native";
import { PhotoContext } from "../contexts/Photo";
import { useContext } from "react";
import { Card } from "react-native-shadow-cards";


const ItemView= styled.View`
 width: 100%;
 height: 100px;
 background-color:#fff;
 flex-direction: row;
 align-items: center;
 margin-top:20px;
`;

const ImageView = styled.TouchableOpacity`
  width:100px;
  height: 90px;
  background-color: #F5F5DC;
  align-items: center;
  margin-left: 20px;
  border-radius: 25px;
`;

const TitleView = styled.View`
  margin-left: 10px;
`;

const TitleText = styled.Text`
   font-size: 18px;
   max-width: 130px;
   font-weight: bold;
`;

const ItemIcon = styled.TouchableOpacity`
    width: 30%;
    height: 80px;
   justify-content: center;
   align-items: center;
`;


export default ({data, onPress}) => {

  const {link} = useContext(PhotoContext);
    return(
      <Card style={{margin: 5}}>
       <ItemView>
         <ImageView>
            <Image 
            source={{uri: `${link}${data.img}`}} 
            style={{ width: 90, height: 90, borderRadius: 25}}/>
         </ImageView>
        <TitleView>
          <TitleText>{data.title}</TitleText>
        </TitleView>
        <ItemIcon onPress={onPress}>
           <Delete name="delete" size={30} color="red"/>
      </ItemIcon>
   </ItemView>
 </Card>
    )
}