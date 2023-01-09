import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import Input from './Input';
import Date from 'react-native-vector-icons/Fontisto';
import Time from 'react-native-vector-icons/Ionicons';
import Close from 'react-native-vector-icons/AntDesign'
import List from 'react-native-vector-icons/FontAwesome'
import { useEffect, useState } from "react";
import Api from "../Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';
import Alert from "./Alert";


const View = styled.View`
 position: absolute;
 top:20px;
 height: 100%;
 width: 100%;
 display: flex;
`;

const ModalSchedule = styled.View`
  width: 90%;
  height: auto;
  background-color: #fff;
  border-radius: 25px;
  margin: auto;
  padding: 20px;
`;
const TopView = styled.View`
   width: auto;
   height: auto;
   flex-direction: row;
  justify-content:space-between;

`;

const ItemTop = styled.TouchableOpacity``;

const Title = styled.Text`
  text-align: center;
  font-size: 18px;
  margin: 10px;
`;

const InputView = styled.View`
 width: 100%;
 height: 100px;
 flex-direction: row;
 align-items: center;
`;

const Text = styled.Text`
  font-size: 20px;
  text-align: center;
`;

const Item = styled.TouchableOpacity`
`;

const CustomButtom = styled.TouchableOpacity`
width:230px;
height: 56px;
background-color: #268596;
justify-content: center;
align-items: center;
margin-left: auto;
margin-right: auto;
margin-top: 40px;
`;


const CustomButtonText = styled.Text `
  font-size:  18px;
  color:#FFFFFF;
`;
const LoginIcon = styled.ActivityIndicator`
`;

 const ModalSched = ({dat, authId, clientId, styleActive}) => {

    const [modal, setModal] = useState(false);
    const [mode, setMode] = useState('');
    const [date, setDate] = useState(dat);
    const [newDate, setNewDate] = useState('');
    const[newTime, setNewTime] = useState('');
    const [descrition, setDescrition] = useState('');
    const[Style, setStyle] = useState('none');
    const [preloadButton, setPreloadButton] = useState(false);
    const [message, setMessage] = useState('');
    const [styleDisplay, setStyleDisplay] = useState('none');
    const navigation = useNavigation();

     useEffect(()=>{
      
       setStyle(styleActive);
    
    }, [styleActive])

    const onChange = (event, selectedDate) =>{
      setModal(false);
       const currentDate =  selectedDate || date;
       setDate(currentDate);
       let fDate = currentDate.getDate() + '/' + (currentDate.getMonth() + 1) + '/' + currentDate.getFullYear();
       let fTime = currentDate.getHours() + ':' + currentDate.getMinutes();
       
       if(event.nativeEvent){
            if(mode === 'date'){
               setNewDate(fDate);
            }

            if(mode === 'time'){
               setNewTime(fTime);
             }   
       }
    }

    //active alert 
    const alertMessage = (msg) =>{
      setMessage(msg);
      setStyleDisplay('flex');
      setTimeout(function(){
        setStyleDisplay('none');
      },75000)
    }

  const handleDate = (a) =>{
    setMode(a);
    setModal(true);
  }

  const handleButtonSchedule = async ()=>{
    setPreloadButton(true)
    if(newDate === '' && newTime === '' && descrition === ''){
      alertMessage('Empty space!');
        setPreloadButton(false);
       
    }else{
        const token = await AsyncStorage.getItem('token');
        if(token){
          const res = await Api.createSchedule(newDate, newTime, descrition, clientId, authId, 'Não confirmado', token);
          if(res.data !== ''){
            setPreloadButton(false);
             alertMessage(res.data);
             setNewDate('');
             setNewTime('');
             setDescrition('');
        
             
             
          }else{
            setMessage(res.error);
            setPreloadButton(false);
            alertMessage(res.error);
          }
        }  
    }
  }

  const handleClose = () =>{
     setStyle('none');
     setPreloadButton(false);
     setNewDate('');
     setNewTime('');
     setDescrition('');
  }

  const handleListSchedule = () =>{
   navigation.navigate('Schedule');
  }
  
    return (   
      <View style={{display: `${Style}`}}>
         {modal  && (
              <DateTimePicker 
                 testID="dateTimePicker"
                 value={date}
                 is24Hour={true}
                 display='default'
                 mode={mode}
                 onChange={onChange}/>
        )}
        <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']} style={{width: '100%', height:'100%'}}>
        <ModalSchedule>
            <TopView>
            <ItemTop onPress={handleListSchedule}>
                  <List name="list-alt" size={30}/>
               </ItemTop>
            <ItemTop onPress={handleClose}> 
                  <Close name="close" size={30}/>
               </ItemTop>
               
            </TopView>
            <Title>Agendar serviços</Title>
            <InputView>
              <Item>
                <Input width={'80%'} height={'15%'}  value={newDate}/>
               </Item>
               <Item onPress={()=>handleDate('date')}>
                 <Date name="date" size={40}/>
               </Item>
            </InputView>
            <InputView>
              <Item>
                <Input width={'80%'} height={'15%'} value={newTime} />
               </Item>
               <Item onPress={()=>handleDate('time')}>
                 <Time name="md-time-outline" size={50}/>
               </Item>
             </InputView>
            <InputView>
              <Input onChangeText={(e) => setDescrition(e)}
                 width={'80%'}
                 height={'100%'}
                 multiline={true}
                 placeholder="Descrição"
                 value={descrition}
                 />
            </InputView>
            <CustomButtom onPress={()=>handleButtonSchedule()} disabled={preloadButton}>
                 {preloadButton ? (
                      <CustomButtonText  ><LoginIcon size="large" color="#fff"/></CustomButtonText>):
                 (<CustomButtonText >Agendar</CustomButtonText>)}   
            </CustomButtom>
          </ModalSchedule>
        </LinearGradient>
        <Alert
            background='green'
            message={message}
            styleDisplay={styleDisplay}
        />
    </View>
    )
}

export {ModalSched}