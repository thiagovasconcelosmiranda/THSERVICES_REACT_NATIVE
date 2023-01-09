import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState } from 'react';
import { Image } from 'react-native';
import axios from 'axios';
 

import { Container,
         CustomButtom, 
         CustomButtonText 
        } from './style';
import Api from '../../Api';
import AsyncStorage from '@react-native-async-storage/async-storage';

      

export default () =>{


    const[image, setImage] = useState(null);
  
    const permission = async () =>{
           const result = await ImagePicker.requestCameraPermissionsAsync();

          if(!result !== 'granted'){
            //alert('Permission denied!');
          }
    }

    useEffect(()=>{
     
      permission()
    });

    const PickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing:true,
          aspect:[4,3],
          quality: 1
        });

        if(result != ''){
          setImage(result);
          console.log(result);
        }    
    }

    async function Upload () {
      const imgOne = new FormData();
      imgOne.append('imgOne', image);

      const token = await AsyncStorage.getItem('token');
      if(token){
        const res = await Api.createGallery(imgOne, token)
        console.log(res);
      }
    }

    return(
        <Container>
            {image && <Image 
                   source={{uri: image.uri}}
                    style={{width:200, height:200}} />}
            <CustomButtom onPress={PickImage}>
                <CustomButtonText>Carregar imagem</CustomButtonText>
            </CustomButtom>
            <CustomButtom onPress={Upload}>
                <CustomButtonText>Enviar imagem</CustomButtonText>
            </CustomButtom>
        </Container>
    )
}