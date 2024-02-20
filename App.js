import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, View } from 'react-native';
import { styles } from './styles/styles.js';
import { Element} from './components/listElement.js'

export default function MainScreen() {

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

/*const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#f0f'
      },
})*/