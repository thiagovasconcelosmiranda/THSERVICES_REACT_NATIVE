import React, { useContext, useEffect, useState } from 'react';
import {Image, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Api from '../../Api';
import Testimonial from '../../components/Testimonial';
import { PhotoContext } from '../../contexts/Photo';
import { ModalSched } from '../../components/Modal';


import Left from 'react-native-vector-icons/AntDesign';

import{ Container,
        HeaderView,
        SwipeDot,
        SwipeDotActive,
        ItemText,
        HeaderText,
        ItemLeft,
        ImageView, 
        SelfView, 
        InfoView,
        IconsView,
        Item, 
        LoginIcon,
        Title,
        DescritionView,  
        DescritionText,
        TestimonialView,
        TestimonialButton,
        TestimonialText,
        FooterText,
      } from './style';

import Favorite from 'react-native-vector-icons/MaterialIcons';
import Map from 'react-native-vector-icons/Feather';
import Schedule  from 'react-native-vector-icons/MaterialIcons';
import Commentary  from 'react-native-vector-icons/EvilIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Swiper from 'react-native-swiper';



export default (props) => {
  
   const [error, setError] = useState(false);
   const [active, setactive] = useState(false);
   const navigation = useNavigation();
   const [listAnnouncement, setListAnnouncement] = useState([]);
   const [Auth, setAuth] = useState([]);
   const [tokenAction, setTokenAction] = useState('');
   const [listTestimonial, setListTestimonial] = useState([]);
   const [testimonialBoolean, setTestemonialBoolean] = useState(false);
   const [textTestemonial, setTextTestemonial] = useState('Mostrar comentários');
   const [idFavorite, setIdFavorite] = useState('');
   const [listGallery, setLisGallery] = useState([]);
   const [photoClient, setPhotoClient] = useState('');//corrigir
   const[loadFavorite, setLoadFavorite] =  useState(false);
   const [styleActive, setStyleActive] = useState('none');


   //context link galeria
   const {link} = useContext(PhotoContext);
  

     useEffect(()=>{
         const announcement = props.route.params.item
         if(announcement.title){
            setListAnnouncement(announcement);
            getDados(announcement);
            getTestimonial(announcement.client_id);
         } 
         

     },[]);


     const getTestimonial = async (client_id) => {
         const testimoniais = await Api.getTestimonial(client_id);
          setListTestimonial(testimoniais.data);
          
     }
     const handleTestemonial = () => {
         if(testimonialBoolean === true){
           setTestemonialBoolean(false);
           setTextTestemonial('Mostrar comentários')
         }else{
            setTestemonialBoolean(true);
            setTextTestemonial('Ocutar comentários')
         }
     }


    //Return favorite
     const  getDados = async (announcement) =>{
      const token = await AsyncStorage.getItem('token');
      setTokenAction(token);
      if(token){
         const auth = await Api.getAuth(token);
         if(auth.id){
            setAuth(auth);
            const client = await Api.getClient( auth.id,token)
            if(client.id > 0){
               setPhotoClient(client.photo)
            }

            //Gallery
            if(announcement.client_id){
               const gallery = await Api.getGallery(announcement.client_id, token);
               if(gallery.id > 0){
                   setLisGallery(gallery);
               }
            }
            //end

            const favorite = await Api.getFavorite(auth.id, token);
            if(favorite.data.length > 0){
                setLoadFavorite(true);
                favorite.data.map((item)=>{
                   if(item.title === announcement.title ){
                      setIdFavorite(item.id);
                      setactive(true);
                   }
                })
             } else{
               setLoadFavorite(true);
             }
         }     
      }   
   }
  //
  const handleButtonFavorite =  async () => {
      if(active === false){
         const res = await Api.CreateFavorite(listAnnouncement.title, listAnnouncement.photo, Auth.id, tokenAction)
         if(res){
            setactive(true);
         }   
       }else{ 
         if(idFavorite > 0){
            const res = await Api.deleteFavorite(idFavorite, tokenAction);
            if(res){
              setactive(false);
            }
         } 
       }
   }

    const hndleButtonMainTab = () => {
      navigation.reset({ 
         routes:[{name: 'MainTab'}]
         });
    }

    const handleButtonMap = () =>{
         props.navigation.navigate('Maps', {item: listAnnouncement}); 
    }
    
    //Button Modal
    const handleButtonSchedule = () =>{

      if(styleActive === 'flex'){
         setStyleActive('none');
      }else{
         setStyleActive('flex');
      }
    }

    return(
        <Container>
          <HeaderView>
            <ItemLeft>
             <Left name='arrowleft'
                  size={30} color="#000"
                  style={{marginLeft:40}}
                  onPress={()=>hndleButtonMainTab()}
                    />
            </ItemLeft>
            <ItemText>
                 <HeaderText>Faça seu orçamento!</HeaderText>
            </ItemText>
         </HeaderView>
           <ImageView>
               <Swiper 
                   style={{height: 240}}
                   paginationStyle={{top: 15, right: 15, bottom: null, left: null}}
                   dot={<SwipeDot/>}
                   activeDot={<SwipeDotActive/>}
                   autoplay={false}>
                     
                     {listGallery.imgOne !== '' && (
                        <Image 
                           source={{uri: `${link}${listGallery.imgOne}`}}
                           style={{ width: '100%', height: 200}}/>
                     )}

                     {listGallery.img !== '' && (
                       <Image 
                         source={{uri: `${link}${listGallery.imgTwo}`}}
                         style={{ width: '100%', height: 200}}/>
                     )}    
                     
                     {listGallery.imgThree !== '' && (
                       <Image 
                          source={{uri: `${link}${listGallery.imgThree}`}}
                          style={{ width: '100%', height: 200}}/>
                     )}

                     {listGallery.imgFour !== '' && (
                       <Image 
                          source={{uri: `${link}${listGallery.imgFour}`}}
                          style={{ width: '100%', height: 200}}/>
                     )}   
                    </Swiper>
                   </ImageView>
                   <InfoView>
                      <SelfView>
                         <Image
                           source={{uri: `${link}${listAnnouncement.photo}`}} 
                           style={{ width: 120, height: 120, borderRadius: 25}}/>
                     </SelfView>
                     {error === false ? (<Title>{listAnnouncement.title}</Title>):
                          <Title></Title>  }
                     <IconsView>
                           <Item onPress={()=>handleButtonSchedule()}>
                               <Schedule  name="schedule" size={35} color="#000"/>
                            </Item>
                            
                            {loadFavorite === false ? ( <Item>
                                  <LoginIcon color="#000"/>
                                  </Item>): ( <Item onPress={()=>handleButtonFavorite()}>
                                     {active=== true? (<Favorite  name="favorite" size={35} color="#000"/>): 
                                     <Favorite  name="favorite-border" size={35} color="#000"/>}
                                  </Item>)}
                                <Item onPress={()=>handleButtonMap()}>
                                  <Map  name="map-pin" size={30} color="#000"/>
                               </Item>
                            <Item>
                               <Commentary name='comment' size={45} color="#000"/>
                            </Item>
                     </IconsView>
                     {testimonialBoolean === false && (<DescritionView>
                               { error === false ? (<DescritionText>{listAnnouncement.descrition}</DescritionText> ) :
                               <DescritionText></DescritionText> }
                               </DescritionView>)}
                            
                               {listTestimonial.length > 0 && (
                                    <TestimonialButton onPress={handleTestemonial}>
                                       <TestimonialText>{textTestemonial}</TestimonialText>
                                     </TestimonialButton>)}
                                 
                            <ScrollView>
                            <TestimonialView>
                                 
                                     {testimonialBoolean === true && ( 
                                         listTestimonial.map((item, k)=>(
                                          <Testimonial key={k}
                                           client={item.client}
                                           commentary={item.commentary}
                                           note={item.note}/>
                                       )))}
                                    
                                  </TestimonialView> 
                           <FooterText>Todos os direitos reservados</FooterText>
                     </ScrollView>
                  </InfoView> 
                  <ModalSched 
                     dat={new Date()}
                     clientId={listAnnouncement.client_id}
                     authId={Auth.id}
                     styleActive={styleActive}
                  />
               </Container>
           )
       }