import {StyleSheet} from 'react-native'

const border_radius = 10;


const containerStyle = {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
        borderWidth:1,
        borderColor:'#222',
        borderStyle:'solid'
};

const textStyle = {
    color:'#ddd',
    fontSize: 20,
    flexWrap:'wrap'
}

const elemListTouchStyle = {
    height:55,
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#333',
    margin:12,
    width: 200,
    //alignItems: 'center',
    paddingLeft: 25,
    justifyContent: 'center',
    borderRadius: border_radius
}

const headerStyle = {
    headerStyle:{backgroundColor:'#222'},
    headerTintColor: '#ddd',
    headerTitleStyle:{color:'#ddd'},
}

const loginButtonStyle = {
    backgroundColor : "#f00",
    color:"#ddd",
    padding:5,
    borderRadius:border_radius,
    borderWidth:1,
    borderColor:'#222',
    borderStyle:'solid'
}

const loginInput = {
    backgroundColor:'white',
    padding:10,
    color:'black',
    width:'80%'
}

const rowStyle = {

    flexDirection:'row',
}

const cellStyle = {
    borderWidth:1,
    borderColor:'white',
    borderStyle:'solid',
    width:120,
    paddingLeft:10,
}

const headerRowStyle = {
    flexDirection:'row',
    backgroundColor:"#2a2a2a"
}

const boldTextStyle = {
    ...textStyle,
    fontWeight:'bold'
}

export const styles = {
    container : containerStyle,
    text: textStyle,
    elemListTouch: elemListTouchStyle,
    header: headerStyle,
    loginButton: loginButtonStyle,
    logInInput: loginInput,
    row: rowStyle,
    cell: cellStyle,
    headerRow: headerRowStyle,
    boldText: boldTextStyle
}