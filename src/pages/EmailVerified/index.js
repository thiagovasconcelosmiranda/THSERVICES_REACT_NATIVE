import React, { useEffect, useState } from 'react';
import{ 
         Container,
         TelaView,
         ImageView,
         CustomButtom, 
         CustomButtonText,
         SignMessageButton,
         SignMessageButtonTextBold, 
         Title
      } from './style';
      
import { Image } from 'react-native';
import * as SMS from 'expo-sms';

import Input from '../../components/Input';

export default () =>{
      const [email, setEmail] = useState();
        useEffect(()=>{
           alert();
           const math =  Math.floor(Math.random()*100 + 1);
           alert(math)
      },[])


const enviar =  async() => {
     const  status = await SMS.sendSMSAsync(
       '14996870440',
       `teste`
     )

     console.log(status);
}

   return (
     <Container>
      <ImageView>
       <Image 
           source={require('../../img/logotipo.png')} 
           style={{ width: 200, height: 200}}/>              
       </ImageView>
      
        <TelaView>
        <Title>Recupere sua senha</Title>
            <Input placeholder="Digite seu email"
            onChangeText={e=>setEmail(e)}
            Icon="email"
            />
            <CustomButtom onPress={()=>enviar()}>
                  <CustomButtonText >Enviar</CustomButtonText>
            </CustomButtom>
        </TelaView>
        <SignMessageButton>
                <SignMessageButtonTextBold>Logim</SignMessageButtonTextBold>
        </SignMessageButton>
        <SignMessageButton>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
        </SignMessageButton>
     </Container>
   )
}