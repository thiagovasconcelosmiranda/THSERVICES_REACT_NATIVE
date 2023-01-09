import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/Strack/MainStrack';
import PhotoProvider from './src/contexts/Photo';

export default function App() {
  return (
    <NavigationContainer >
         <PhotoProvider>
                  <MainStack/>
           </PhotoProvider>
    </NavigationContainer>


  )
}

