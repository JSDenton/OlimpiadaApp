import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, View } from 'react-native';
import { styles } from '../styles/styles.js';
import { Element} from './listElement.js'

export default function Sections() {

  return (
    <View style={styles.container}>
      <FlatList data={dataTest} renderItem={({item}) => <Element item={item.key}/> }/>
    </View>
  );
}

const dataTest = [
         {key: 'Chrzanów'},
         {key: 'Krzeszowice'},
         {key: 'Alwernia'},
         {key: 'Trzebinia'},
         {key: 'Płaza'},
         {key: 'Sosnowiec'},
         {key: 'Dąbrowa górnicza'}
       ];