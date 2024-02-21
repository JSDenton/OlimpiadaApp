import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput} from 'react-native';
import { styles } from '../styles/styles.js';

export default function LogIn() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Login</Text>
        <TextInput placeholder="Login" autofocus={true} style={styles.logInInput}/>
        <Text style={styles.text}>Hasło</Text>
        <TextInput placeholder="Hasło" secureTextEntry={true} style={styles.logInInput}/>
    </View>
  );
}

const dataTest = [
         {key: '2023'},
         {key: '2022'},
         {key: '2021'},
         {key: '2020'},
         {key: '2019'},
         {key: '2018'},
         {key: '2017'},
         {key: '2016'},
         {key: '2015'},
         {key: '2014'}
       ];