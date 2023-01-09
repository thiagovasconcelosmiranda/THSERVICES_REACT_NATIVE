
import { useContext, useEffect, useState } from 'react';
import { PhotoContext } from '../../contexts/Photo';

import {Container, 
        Image,
        ViewAuth,
        LoginIcon,
        ViewMenu,
        ContainerDados,
        ItemLeft,
        Text, 
        Item
    } from'./styles';

import Left from 'react-native-vector-icons/AntDesign';
import Album from 'react-native-vector-icons/Entypo';
import Logout from 'react-native-vector-icons/MaterialCommunityIcons';
import User from 'react-native-vector-icons/Feather';
import Client from 'react-native-vector-icons/EvilIcons';
import Phone  from 'react-native-vector-icons/AntDesign';
import Company from 'react-native-vector-icons/FontAwesome5';
import Notification from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from '../../Api';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-shadow-cards';

export default () => {
    const navigation = useNavigation();

    const[list, setList] = useState([]);
    const[images, setImages]  = useState([]);
    const {link} = useContext(PhotoContext);


    useEffect(()=>{
        const  getAuth = async () => {
           const token = await AsyncStorage.getItem('token');
           if(token){
               const auth = await Api.getAuth(token);

               if(auth.id > 0){
                  const client = await Api.getClient(auth.id, token);
                  
                 setList(client);
                 setImages(client.photo);
            }
        }
       
     }
       getAuth();
    
    },[])

    const handleButtonLogout = async()=>{
      const token = await AsyncStorage.getItem('token');

      if(token){
           const res = await Api.logout(token);
           if(res){
              await AsyncStorage.setItem('token', '');
              navigation.reset({ 
                 routes:[{name: 'SignIn'}]
              }); 
          }
         
      }
     
    }

    const hndleButtonMainTab = () =>{
      navigation.reset({ 
        routes:[{name: 'MainTab'}]
        });
    }


    const handleButtonUpload = () => {
        navigation.navigate('Upload');
    }

    return (
      <Container>
          <ViewAuth>
              <ContainerDados>
                <ItemLeft>
                    <Left name='arrowleft'
                      size={30} color="#000"
                      style={{marginLeft:20}}
                      onPress={()=>hndleButtonMainTab()}
                    />
                  </ItemLeft>
                  {images === '' ? (<ItemLeft>
                     <LoginIcon color='#000'/>
                  </ItemLeft>): ( <ItemLeft>
                      {images !== '' ?  ( 
                        <Image 
                             source={{uri: `${link}${images}`}} 
                             style={{ width: 50, height: 50}}/>
                      ): (<Client name="user" size={50} color="#000"/>)}
                  </ItemLeft>)}
                  
                  {list.id > 0 ? (<Text>{list.name}</Text>): (
                    <ItemLeft>
                      <LoginIcon color='#000'/>
                    </ItemLeft>
                  )}
                 
            </ContainerDados>
          </ViewAuth>
          <ViewMenu>
            <Card>
               <Item>
                  <Notification name='notification'size={25} color="#000" style={{marginLeft:20}}/>
                  <Text>Notificação</Text>
                </Item>
               <Item onPress={()=>handleButtonUpload()}>
                  <Album  name='image'size={25} color="#000" style={{marginLeft:20}}/>
                  <Text>Galeria</Text>
                </Item>
                <Item>
                 <User name='user'size={30} color="#000" style={{marginLeft:20}}/>
                 <Text>Usuário</Text>
               </Item>
            
             
               <Item>
                 <Company name='landmark'size={25} color="#000" style={{marginLeft:20}}/>
                 <Text>Empresa</Text>
                </Item>
        
             
               <Item>
                 <Phone name='phone'size={25} color="#000" style={{marginLeft:20}}/>
                 <Text>Contato</Text>
              </Item>
               <Item onPress={()=>handleButtonLogout()}>
                 <Logout name='logout-variant'size={25} color="#000" style={{marginLeft:20}}/>
                 <Text>Sair</Text>
               </Item>
               </Card>
          </ViewMenu>   
     </Container>
    )
}