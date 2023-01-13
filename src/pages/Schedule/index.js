import { ScrollView, RefreshControl, Image } from "react-native";
import { Container,
         HeaderView,
         ItemLeft,
         ItemText,
         HeaderText, 
         ItemView,
         ImageItem,
         AlignItem
       } from "./style";
import Left from 'react-native-vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import ListSchedules from "../../components/ListSchedules";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import Api from "../../Api";

export default () => {

  const navigation = useNavigation();
  const [schedules, setSedules] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [tokenAuth, setTokenAuth] = useState('');
  const [deleteItem, setDeleteItem] = useState(false);

   useEffect(()=>{
     getShedules();
   },[]);

   const refreshActive = () => {
      setRefresh(true);
      setTimeout(()=>{
         getShedules();
         setRefresh(false);
       }, 9000);
   }

   const getShedules = async () => {
      const token = await AsyncStorage.getItem('token');
      setTokenAuth(token);
      if(token){
         const auth = await Api.getAuth(token);

         if(auth.id > 0){
             const res = await Api.getShedules(auth.id,token);
             if(res.data.length > 0){
                setSedules(res.data);
                setDeleteItem(false);
          }
        }
      }
   }

  const hndleButtonMainTab = () => {
     navigation.navigate('MainTab');
  }
  const handleDelete = async (id) => {
   if(tokenAuth){
       const res = await Api.deleteShedules(id, tokenAuth);
       if(res){
          setDeleteItem(true);
          getShedules();
       }
    }
  }
  
    return(
       <Container>
           <HeaderView>
            <ItemLeft>
             <Left name='arrowleft'
                  size={30} color="#000"
                  style={{marginLeft:40}}
                  onPress={()=>hndleButtonMainTab()}/>
              </ItemLeft>
              <ItemText>
                 <HeaderText>Agendamentos realizados</HeaderText>
              </ItemText>
           </HeaderView>
              <ItemView>
              {deleteItem === true && (
               <ImageItem>
                  <Image source={require('../../img/delete.gif')}
                   style={{width: 80, height: 80}} />
                 </ImageItem>
                  )}    
              <ScrollView refreshControl={<RefreshControl 
                 refreshing={refresh} onRefresh={refreshActive}/>}>
                 {schedules.map((item, k)=>(
                  <AlignItem  key={k} >
                     <ListSchedules
                          item={item}
                          button={()=>handleDelete(item.id)}/>
                      </AlignItem>
                  ))}
                   </ScrollView>
               </ItemView>  
        </Container>
    )
}