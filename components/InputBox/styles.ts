import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create(
    {
        container:{
            flexDirection:'row',
            margin:10,
            alignItems:'flex-end',

        },
        mainContainer:{
            flexDirection:'row',
            backgroundColor:'white',
            padding:10,
            margin:10,
            borderRadius:50,
            marginRight:10,
            flex :1,
            alignItems:'flex-end',
        },
        TextInput:{
            flex:1,
            marginHorizontal:10,
        },
        icons:{
            
            marginHorizontal:5,
        },
        buttonContainer:{
            backgroundColor: Colors.light.tint,
            borderRadius:25,
            width:50,
            height:50,
            justifyContent:'center',
            alignItems :'center',

        }
    }
)
export default styles;