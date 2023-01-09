import { useEffect, useState } from 'react';
import { Text, View, RefreshControl } from 'react-native';
import {WebView} from 'react-native-webview';
import {Container, HeaderArea, ItemLeft, HeaderText} from './style';
import Left from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';




export default (props) => {
    const navigation = useNavigation();

    const [url, setUrl] = useState('');
    const[go, setGo] = useState(false);
    const [refresh , setRefresh] = useState(false);

    useEffect(()=>{
        const url = props.route.params.item
        if(url !== ''){
            setUrl(url);
            setGo(true);
        }
    },[]);

    const hndleButtonMainTab = () =>{
        navigation.navigate('MainTab');
    }

    return (
          <Container>
            <HeaderArea>
              <ItemLeft>
                 <Left name='arrowleft'
                   size={30} color="#000"
                   style={{marginLeft:40}}
                    onPress={()=>hndleButtonMainTab()}
                    />
               </ItemLeft>
                <HeaderText>Bem-vindo a nossa rede social</HeaderText>
            </HeaderArea>
               <WebView source={{uri: `${url}`}}
               style={{marginTop: 23}}
            /> 
          </Container>
    )

}