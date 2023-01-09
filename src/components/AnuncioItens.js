import { Image, StyleSheet } from "react-native";
import styled from "styled-components/native"
import StarItens from "./StarItens";
import {Card} from 'react-native-shadow-cards';

const Area = styled.TouchableOpacity`
  background-color: #fff;
  margin-bottom:20px;
  padding:15px;
  flex-direction: row;
  border-radius:10px;
  width: 300px;
  height: auto;
`;

const Avatar = styled.View`
 flex:1;
 width: auto;
 height:auto;
 border-radius:15px;
 align-items: center;
 margin-top: 1px;


`;

const InfoArea = styled.View`
margin-left: 20px;
justify-content: space-between;

`;

const UserName = styled.Text`
   font-size: 16px;
   font-weight: bold;
   max-width: 150px;
   
`;


const SeeProfileButton = styled.View`
  width: 85px;
  height: 26px;
  border: 1px solid #4EADBE;
  border-radius: 10px;
  align-items: center;
  margin-top:20px;
`;

const SeeProfileButtonText = styled.Text`
font-size: 13px;
color: #268596;
`;

export default ({data, acionar, link}) => {
  
    return (
      <Card style={{margin:5 }}>
        <Area onPress={acionar}>
        <Avatar>
           <Image 
              source={{uri: `${link}${data.photo}`}} 
               style={{ width: 110, height: 110, borderRadius: 25}}/>
        </Avatar>
        <InfoArea>
            <UserName>{data.title}</UserName>

                 <StarItens/>
            <SeeProfileButton>
                <SeeProfileButtonText>Ver perfil</SeeProfileButtonText>
            </SeeProfileButton>
        </InfoArea>
        </Area>
        </Card>
    )
}


