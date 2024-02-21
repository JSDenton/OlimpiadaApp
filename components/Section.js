import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, View } from 'react-native';
import { styles } from '../styles/styles.js';
import { Element} from './listElement.js'

export default function Section() {

  return (
    <View style={styles.container}>
      <FlatList data={dataTest} renderItem={({item}) => <Element item={item.key}/> }/>
    </View>
  );
}

const dataTest = [
         {key: 'Devin'},
         {key: 'Dan'},
         {key: 'Dominic'},
         {key: 'Jackson'},
         {key: 'James'},
         {key: 'Joel'},
         {key: 'John'},
         {key: 'Jillian'},
         {key: 'Jimmy'},
         {key: 'Julie'}
       ];