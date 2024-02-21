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


export const styles = {
    container : containerStyle,
    text: textStyle,
    elemListTouch: elemListTouchStyle
}