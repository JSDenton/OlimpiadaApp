import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, View } from 'react-native';
import { styles } from '../styles/styles.js';

export const Element = (props) => {
  return (
  <View>
    <Text style={styles.text}>{props.item}</Text>
    </View>
  );
}
