import { StatusBar } from 'expo-status-bar';
import { Button, View, TouchableHighlight, Text } from 'react-native';
import { styles } from '../styles/styles.js';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

export const LogInButton = (props) => {
const navigation = useNavigation();
  return (
    <View>
        <TouchableHighlight style={styles.loginButton} onPress={()=>navigation.navigate('LogIn')}>
            <Text style={{color:"white", fontSize:20}}>Zaloguj się</Text>
        </TouchableHighlight>
    </View>
  );
}
