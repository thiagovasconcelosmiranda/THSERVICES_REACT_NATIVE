
import MapView from 'react-native-maps';
import { Container,
         HeaderView, 
         ItemLeft,
         HeaderText ,
         LocationView,
         TitleText,
         LocationText,
         Latitude
        } from './style';

import Left from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import Api from '../../Api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default (props) => {
   const navigation = useNavigation();
   const [regionDb, setRegionDb] = useState([]);
   const [location, setLocation] = useState([]);
   const [locationUser, setLocationUser] = useState(false);
   const [region, setRegion] = useState(null);
   
  const hendleButtonLeft = () =>{
      navigation.navigate('MainTab');
  }

  useEffect(()=>{
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
           setErrorMsg('Permission to access location was denied');
           return;
      }
          })();
          getGeolocalization(props.route.params.item);
  },[]);

  const handleLocalize = async (e) =>{
    if(!regionDb.id){
        setLocationUser(true);
        let location = await Location.getCurrentPositionAsync({});
        if(location.coords){
            let latitudeText = JSON.stringify(location.coords.latitude);
            let longitudeText = JSON.stringify(location.coords.longitude);
            alert(longitudeText);
            setLocation({
               latitude: latitudeText,
               longitude: longitudeText
            }) ;
         }
      }
  }

  const getGeolocalization = async (announcement) => { 
     const token = await AsyncStorage.getItem('token');
     if(token){
       if(announcement.id > 0){
            const company = await Api.getCompany(announcement.client_id, token);
            if(company.id > 0){
              const geolocalization = await Api.getGeolocalization(company.id, token);
              if(geolocalization.id > 0){
                setRegion({
                  latitude: geolocalization.latitude,
                  longitude: geolocalization.longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421
              })
                setRegionDb(geolocalization)
              }else{
                alert("Anuncio sem rastreamento!");
              }
           }
       }
     }
  }
      
  return (
    <Container>
         <HeaderView>
            <ItemLeft onPress={hendleButtonLeft}>
            <Left name='arrowleft'
                  size={30} color="#000"
                  style={{marginLeft:40}}/>
            </ItemLeft>
            <ItemLeft>
            <HeaderText>Localize</HeaderText>
            </ItemLeft>
            <ItemLeft onPress={()=>createLocation()}>
            <HeaderText>Atualizar</HeaderText>
            </ItemLeft>
         </HeaderView>
         <MapView style={{width: '100%', height: '60%' }}
                 initialRegion={region}
                 showsUserLocation={locationUser}
                 minZoomLevel={17}
                 zoomEnabled={true}
                 loadingEnabled={true}
                 onPress={(e)=>handleLocalize(e)}/>
           <LocationView>
            <TitleText>Dados de localização</TitleText>
             {regionDb != '' ? (
                <ScrollView>
                  <LocationText> <Latitude>Latitude:  </Latitude>{regionDb.latitude}</LocationText>
                  <LocationText> <Latitude>Longitude:  </Latitude>{regionDb.longitude}</LocationText>
                </ScrollView> ): (
                <ScrollView>
                   <LocationText> <Latitude>Latitude:  </Latitude>{location.latitude}</LocationText>
                   <LocationText> <Latitude>Longitude:  </Latitude>{location.longitude}</LocationText>
                </ScrollView>
                )}  
           </LocationView>
    </Container>
  );
}

