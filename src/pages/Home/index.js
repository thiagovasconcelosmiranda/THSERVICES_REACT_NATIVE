import {RefreshControl, ScrollView} from 'react-native';
import Api from '../../Api';
import {useNavigation } from '@react-navigation/native';
import {useContext, useEffect, useState } from 'react';
import Facebook from 'react-native-vector-icons/AntDesign';
import Instragram from 'react-native-vector-icons/AntDesign';
import Twitter from 'react-native-vector-icons/AntDesign';
import Input from '../../components/Input';
import ListAnnouncements from '../../components/listAnnouncements';
import { PhotoContext } from '../../contexts/Photo';
import{ Container,
        HeaderArea,
        SocialView,
        Item,
        SocialText,
        HeaderText,
        LoginIcon,
  } from './style';

export default (props) => {

   const [list, setList] = useState([]);
   const [refresh , setRefresh] = useState(false)
   const navigation = useNavigation();
   const [loginIcon, setoginIcon] = useState('flex');
   const [search, setSerarch] = useState('');
   const[acions, setAcions] = useState([]);
   const {link} = useContext(PhotoContext);
   
    useEffect(()=>{
       getAnuncios();
    },[search]);

    const  getAnuncios= async() => {
    if(search === ''){
         const resp = await Api.getAnnouncements();
          if(!resp){
              setoginIcon('none');
          }else{
              setAcions(resp.data);
              setoginIcon('none');
          }
               setList(resp.data);
      }else{
         const resp = await Api.getAnnouncement(search);
         if(!resp){
            setoginIcon('none');
         }else{
            setAcions(resp.data);
            setoginIcon('none');
         }
          setList(resp.data);
      }
    }

  const refreshActive = () => {
    setTimeout(()=>{
      getAnuncios();
      setRefresh(false)
    }, 700);
  }

  const handleButtonProfile = (item) => {
     props.navigation.navigate('Profile', {item: item});
  }

  const handleNavigation = (url) => {
    props.navigation.navigate('Navigation', {item: url});
  }
  
    return(
        <Container>
          <HeaderArea>
            <HeaderText>Encontre serviços ideais</HeaderText>
            <SocialView>
                <Item>
                  <SocialText>Siga agente:</SocialText>
                </Item>
              <Item onPress={()=>handleNavigation('https://www.facebook.com/')}>
                  <Facebook name='facebook-square' size={25} color='#4169E1'/>
              </Item>
              <Item onPress={()=>handleNavigation('https://www.instagram.com/accounts/login/')} >
                 <Instragram name='instagram' size={25} color='#4169E1'/>
               </Item>
               <Item onPress={()=>handleNavigation('https://twitter.com/i/flow/login')} >
                  <Twitter name='twitter' size={25} color='#4169E1'/>
                </Item>
             </SocialView>
             <Input placeholder="Buscar"
                    value={search}
                    onChangeText={e=>setSerarch(e)}
                    Icon="search"
                    width="80%"/>      
             </HeaderArea>
             <LoginIcon  style={{display: loginIcon==='flex'? 'flex': 'none'}} size="large" color="#000"/>
               {acions.length > 0 && (
               <ScrollView refreshControl={
                 <RefreshControl refreshing={refresh} onRefresh={refreshActive}/>}> 
                    {list.map((item,k) =>( 
                      <ListAnnouncements
                        key={k} data={item} 
                        link={link}
                        acionar={()=>handleButtonProfile(item)}/> ))}  
                </ScrollView>)} 
         </Container>
    )
};