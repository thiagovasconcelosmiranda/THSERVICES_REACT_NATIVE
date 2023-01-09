import { Container,
         HeaderView,
         ItemLeft,
         ItemText,
         HeaderText, 
         ItemView,
         AlignItem
       } from "./style";
import Left from 'react-native-vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import ListSchedules from "../../components/ListSchedules";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import Api from "../../Api";
import { ScrollView } from "react-native";

export default () => {

  const navigation = useNavigation();
  const [schedules, setSedules] = useState([]);


   useEffect(()=>{
     getShedules();
   },[]);


   const getShedules = async () => {
      const token = await AsyncStorage.getItem('token');
      if(token){
         const auth = await Api.getAuth(token);

         if(auth.id > 0){
             const res = await Api.getShedules(auth.id,token);
        
             if(res.data.length > 0){
                setSedules(res.data);
          }
         }
        
      }
   
   }


  const hndleButtonMainTab = () => {
     navigation.navigate('MainTab');
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
                 <HeaderText>Meus Agendamentos!</HeaderText>
              </ItemText>
           </HeaderView>
            
              <ItemView>
              <ScrollView>
                 {schedules.map((item, k)=>(
                  <AlignItem>
                     <ListSchedules
                          key={k} 
                          item={item}/>
                      </AlignItem>
                  ))}
                   </ScrollView>
               </ItemView>
           
                  
              
        </Container>
    )
}