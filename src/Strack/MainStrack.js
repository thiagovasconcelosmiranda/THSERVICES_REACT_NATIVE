
import { createStackNavigator } from "@react-navigation/stack";
import Preload from "../pages/Preload";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import MainTab from "./MainTab";
import Profile from '../pages/Profile';
import SignUp from "../pages/SignUp";
import EmailVerified from "../pages/EmailVerified";
import Upload from '../pages/Uploud';
import Maps from "../pages/Maps";
import Navigation from "../pages/Navigation";
import Schedule from "../pages/Schedule";


const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
         initialRouteName="Preload"
         screenOptions={{
         headerShown:false}}>
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="MainTab" component={MainTab}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="EmailVerified" component={EmailVerified}/>
        <Stack.Screen name="Upload" component={Upload}/>
        <Stack.Screen name="Maps" component={Maps}/>
        <Stack.Screen name="Navigation" component={Navigation}/>
        <Stack.Screen name="Schedule" component={Schedule}/>
        
    </Stack.Navigator>
);