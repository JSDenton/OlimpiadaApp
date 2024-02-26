import { StatusBar } from 'expo-status-bar';
import {  Text, View, ScrollView } from 'react-native';
import { styles } from '../styles/styles.js';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

const headerData = [
    {key:'Kategoria', id:'Category'},
    {key:'Imię', id:'Name'},
    {key:'Nazwisko', id:'LastName'},
    {key:'Rzut', id:'Throw'},
    {key:'Koperta', id:'Envelope'},
    {key:'Skok', id:'Jump'},
    {key:'Brzuszki', id:'Situps'},
    {key:'Przysiady', id:'Squats'},
    {key:'Gibkość', id:'Flexibility'},
    {key:'Punkty', id:'Points'},
    {key:'Miejsce', id:'Ranking'},
]

const testData = [
{
    id:0,
    values:[
        {key:'klasa 0-1', id:'Category'},
        {key:'Franek', id:'Name'},
        {key:'Bobula', id:'LastName'},
        {key:'3', id:'Throw'},
        {key:'2', id:'Envelope'},
        {key:'345', id:'Jump'},
        {key:'5', id:'Situps'},
        {key:'43', id:'Squats'},
        {key:'7', id:'Flexibility'},
        {key:'9', id:'Points'},
        {key:'1', id:'Ranking'}
    ]
},
{
    id:1,
    values:[
        {key:'klasa 0-1', id:'Category'},
        {key:'Franek', id:'Name'},
        {key:'Bobula', id:'LastName'},
        {key:'3', id:'Throw'},
        {key:'2', id:'Envelope'},
        {key:'4', id:'Jump'},
        {key:'5', id:'Situps'},
        {key:'6', id:'Squats'},
        {key:'7', id:'Flexibility'},
        {key:'9', id:'Points'},
        {key:'1', id:'Ranking'}
    ]
},
{
    id:2,
        values:[
            {key:'klasa 0-1', id:'Category'},
            {key:'Domino', id:'Name'},
            {key:'', id:'LastName'},
            {key:'3', id:'Throw'},
            {key:'2', id:'Envelope'},
            {key:'4', id:'Jump'},
            {key:'12', id:'Situps'},
            {key:'6', id:'Squats'},
            {key:'7', id:'Flexibility'},
            {key:'9', id:'Points'},
            {key:'1', id:'Ranking'}
        ]
},
{
    id:3,
        values:[
            {key:'klasa 0-1', id:'Category'},
            {key:'Grubas', id:'Name'},
            {key:'Walaszek', id:'LastName'},
            {key:'3', id:'Throw'},
            {key:'2', id:'Envelope'},
            {key:'4', id:'Jump'},
            {key:'5', id:'Situps'},
            {key:'345', id:'Squats'},
            {key:'6', id:'Flexibility'},
            {key:'9', id:'Points'},
            {key:'1', id:'Ranking'}
        ]
}]

const columnBlackList = ["Points", "Ranking", "Category"]

export const Table = (props) => {

    const Cell = (props) => {
    let item = props.item
    let textStyle = props.header ? styles.boldText : styles.text;
    return(
            <View style={styles.cell}>
                <Text style={textStyle} allowFontScaling={true}>{item.key}</Text>
            </View>
        )

    }

    const Row = (props) => {
        let rowData = props.rowData
         if(rowData.id==0){//header
            return(
                <View style={styles.headerRow}>
                    {headerData.map((item, key) => {if(!columnBlackList.includes(item.id)) return <Cell item={item} header={true} />})}
                </View>
            )
         }
         else{
            //console.log(row)
            return(
                <View style={styles.row} >
                    {rowData.values.map((item, key) => {if(!columnBlackList.includes(item.id)) return <Cell item={item} header={false}/>})}
                </View>
            )
         }
    }

  return (
    <ScrollView>
        <ScrollView horizontal={true}>
        <View style={{justifyContent:'center', alignItems:'center'}}>
            {testData.map((row, i) => {return <Row rowData={row} key={i}/>})}
        </View>
        </ScrollView>
    </ScrollView>
  );
}
