import{ useEffect, useState } from 'react';
import { Image, ScrollView} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Input from '../../components/Input';
import { useNavigation } from '@react-navigation/native';
import Api from '../../Api';
import * as Animatable from 'react-native-animatable';
import Alert from '../../components/Alert';
import { Container, 
         InputArea,
         CustomUpload,
         UploadText,
         CustomButtom,
         SignMessageButtonTextBold,
         CustomButtonText,
         SignMessageButton,
         LoginIcon , 
         ImageView
        } from './style';

 import '../../utils/i18n';
 import { useTranslation } from 'react-i18next';
 import UserImage from 'react-native-vector-icons/FontAwesome5';

export default () => {
  const navigation = useNavigation();
  const [state, setState] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reppassword, setRepassword] = useState('');
  const [message, setMessage] = useState('');
  const [styleDisplay, setStyleDisplay] = useState('none');
  const{ t, i18n} = useTranslation();
  const[image, setImage] = useState(null);

  useEffect(()=>{
    permission();
  },[]);
 
  const alertMessage = (msg) =>{
    setMessage(msg);
    setStyleDisplay('flex');
    setTimeout(function(){
      setStyleDisplay('none');
    },82000);
    setState(false);
  }

  const permission = async () =>{
    const result = await ImagePicker.requestCameraPermissionsAsync();

   if(!result !== 'granted'){
     alert('Permission denied!');
   }
 }

  const handleButtonUpload = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing:true,
      aspect:[4,3],
      quality: 1
    });

    if(result != ''){
      setImage(result.uri);
      console.log(result.uri);
    }    
  }

  const handleSignUpClick = async() =>{
  
    setState(true);
    
    if(name != '' && email != '' && password != '' && reppassword != ''){
      if(password === reppassword){
          const res = await Api.SignUp(name, email, password, image);
          if(res.user.length > 0){
              navigation.navigate("SignIn");
          }else if(res.message){
              alertMessage(res.message)
          }
        }else{
          alertMessage("Passwords não confere!");
        }
    }else{
      alertMessage('Empty space!');
    }
  }

  const  hangleButtonSignIn = () => {
    navigation.reset({ 
      routes:[{name: 'SignIn'}]

      });
  } 
    return(
          <Container>
             <ImageView>
                <Animatable.Image 
                    animation="flipInY"
                    source={require('../../img/logotipo.png')} 
                    style={{ width: 170, height: 140,
                    marginRight: 'auto', marginLeft:'auto', margin:'auto', marginTop:"auto"}}/>
                    </ImageView>

                    <Alert 
                      styleDisplay={styleDisplay}
                      message={message}
                      background='red'
                      />

                 <Animatable.View delay={600} animation="fadeInUp"> 
                  <InputArea >
                    <CustomUpload onPress={handleButtonUpload} 
                      style={{display: reppassword === ''? 'none' : 'flex'}} >
                     {image === null &&  (
                        <UserImage name="user-circle"
                         size={35} color="#FFF"/>
                     )}

                      {image !== null &&  (
                        <Image source={{uri: image}} 
                         style={{width:50, height:50, borderRadius: 25}} />
                     )}

                      <UploadText>Upload de imagem</UploadText>
                  </CustomUpload> 
                  <Input placeholder="Digite seu nome"
                   onChangeText={t=>setName(t)}
                   value={name}
                   Icon="name"/>
                    
                  <Input placeholder={t('Digite seu email')}
                   onChangeText={t=>setEmail(t)}
                   value={email}
                   Icon="email"
                  />
                 
                  <Input placeholder={t('Digite seu senha')}
                    password={true}
                    onChangeText={t=>setPassword(t)}
                    value={password}
                    Icon="password"/>

                  <Input placeholder="Confirma sua senha"
                     password={true}
                     onChangeText={t=>setRepassword(t)}
                     value={reppassword}
                     Icon="password"/>

                  <CustomButtom>
                  {state === true && (
                <CustomButtom disabled={true} onPress={handleSignUpClick}>
                    <CustomButtonText><LoginIcon size="large" color="#FFFFFF"/></CustomButtonText>
                </CustomButtom> 
              ) }

               {state === false && (
                  <CustomButtom onPress={handleSignUpClick}>
                      <CustomButtonText>Cadastrar</CustomButtonText>
                  </CustomButtom> 
               ) }
                  </CustomButtom>
                  <SignMessageButton onPress={()=>hangleButtonSignIn()} >
                    <SignMessageButtonTextBold>{t('Faça seu acesso')}</SignMessageButtonTextBold>
                  </SignMessageButton>
                 </InputArea>
              </Animatable.View>
          </Container>
    )
}