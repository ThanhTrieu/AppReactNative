import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
    // style layout
    container: {
        flex: 1,
    },
    content: {
        flex: 7
    },
    notification: {
        flex: 1,
        backgroundColor:'pink',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#ccc'
    },
    boxContent: {
        flex: 6
    },
    result: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    caculate: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    logo: {
        fontSize: 20,
        color: 'red',
        paddingTop: 30
    },
    textResut: {
        fontSize: 50,
        color: 'black',
        fontWeight: 'bold',
        paddingTop: 20,
    },
    submit:{
        marginRight:5,
        marginLeft:5,
        marginTop:12,
        paddingTop:14,
        paddingBottom:14,
        paddingRight:14,
        paddingLeft:14,
        backgroundColor:'#68a0cf',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    submitText:{
        color:'#fff',
        textAlign:'center',
        fontWeight: 'bold',
    }
});