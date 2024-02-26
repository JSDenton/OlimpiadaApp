import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, View } from 'react-native';
import { styles } from '../styles/styles.js';
import { Element} from './listElement.js'
import {Table} from './Table.js'

export default function Section() {

  return (
    <View style={styles.container}>
     <Table/>
    </View>
  );
}

const dataTest = [
         {key: 'Franek Bobula'},
         {key: 'Janek Kowalski'},
         {key: 'Ziemowit Jasny'},
         {key: 'Kinga Turas'},
         {key: 'Grubas Walaszek'},
         {key: 'Domino'},
         {key: 'Kapitan Bomba'}
       ];