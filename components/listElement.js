import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, View, TouchableHighlight } from 'react-native';
import { styles } from '../styles/styles.js';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

export const Element = (props) => {
const navigation = useNavigation();
  return (

  <View>
    <TouchableHighlight style={styles.elemListTouch} onPress={()=>navigation.navigate(props.nextScreen)}>
        <Text style={styles.text}>{props.item}</Text>
    </TouchableHighlight>
    </View>
  );
}
