import  { Container,
          HeaderArea,
          LeftTouch,
          Title,
          Imageback,
          ItemView
        } from'./style';
import Favorite from '../../components/Favorite';
import Left from 'react-native-vector-icons/AntDesign';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from '../../Api';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';


export default () => {

  const navigation = useNavigation();

   const[list, setlist] = useState([]);
   const[deleteItem, setDeleteItem] = useState(false);

   useEffect(()=>{
      getFavorite();
  
  },[]);

  const getFavorite = async() => {
      const token =  await AsyncStorage.getItem('token');  
       if(token){
          const auth = await Api.getAuth(token);
          const favorite = await Api.getFavorite(auth.id, token);
          
            setDeleteItem(false);
            setlist(favorite.data); 
           
          
          
      }
}
    const handleBbuttonDelete = async (item) =>{
          const token = await AsyncStorage.getItem('token');
          if(token){
            const res = await Api.deleteFavorite(item.id, token)
            if(res){
              setDeleteItem(true);
              getFavorite();
               
            }
          }
    }

    const heandleButtonMainTable = () =>{
      navigation.reset({ 
        routes:[{name: 'MainTab'}]

        });
    }
    return(
        <Container>
          <HeaderArea >
            <LeftTouch onPress={() =>heandleButtonMainTable()}>
                  <Left name='arrowleft'
                    size={30} color="#000"
                    style={{marginLeft:40}}/>
                  </LeftTouch>
                    <Title>Meus Favoritos</Title>
          </HeaderArea>
            {deleteItem === true && (<Image source={require('../../img/delete.gif')}
                 style={{width: 80, height: 80}} />
                  )}
          <ItemView>
        
              {list.map((item, k)=>(
                <Favorite key={k} data={item}
                  onPress={()=>handleBbuttonDelete(item)}/>
           ))}
          </ItemView>
        </Container>
    )
};