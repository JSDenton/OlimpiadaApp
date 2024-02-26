import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, View } from 'react-native';
import { styles } from '../styles/styles.js';
import { Element} from './listElement.js'

export default function Categories() {

  return (
    <View style={styles.container}>
      <FlatList data={dataTest} renderItem={({item}) => <Element item={item.key} nextScreen='Section'/> }/>
    </View>
  );
}

const dataTest = [
         {key: 'klasy 0-1'},
         {key: 'klasy 2-3'},
         {key: 'klasy 4-5'},
         {key: 'klasy 6-7'},
         {key: 'klasa 8'}
       ];