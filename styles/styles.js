import {StyleSheet} from 'react-native'

const containerStyle = {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
};

const textStyle = {
    color:'#ddd',
    fontSize: 20
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
    borderRadius: 5
}

const headerStyle = {
    headerStyle:{backgroundColor:'#222'},
    headerTintColor: '#ddd',
    headerTitleStyle:{color:'#ddd'},
}

const loginButtonStyle = {
    backgroundColor : "#f00",
    color:"#ddd",
    padding:5
}

const loginInput = {
    backgroundColor:'white',
    padding:10,
    color:'black',
    width:'80%'
}

export const styles = {
    container : containerStyle,
    text: textStyle,
    elemListTouch: elemListTouchStyle,
    header: headerStyle,
    loginButton: loginButtonStyle,
    logInInput: loginInput
}