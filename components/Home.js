import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, View} from 'react-native';
import { styles } from '../styles/styles.js';
import { Element} from './listElement.js'

export default function Home() {
  return (
    <View style={styles.container}>
      <FlatList data={dataTest} renderItem={({item}) => <Element item={item.key} nextScreen='Sekcje'/> }/>
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