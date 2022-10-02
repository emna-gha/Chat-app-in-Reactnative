import {StyleSheet} from 'react-native';

const styles = StyleSheet.create (
    {
        container:{
            flexDirection:'row',
            width:"100%",
            flex:1,
            justifyContent:'space-between',
            padding:10,
        },
        lefContainer:{
            flexDirection:'row',
            flex:1,
        },
        midContainer:{
            justifyContent: 'space-around',
        },
        avatr:{
            width: 60,
            height:60,
            borderRadius:50,
            marginRight:10,
            
        },
        username:{
            fontWeight:'bold',
            fontSize:16,

        },
        lastMessage:{
            fontSize:16,
            color:'grey',
            width :'100%',
          
        },
        time:{
            fontSize:14,
            color:'grey',
        }

    }
);
export default styles;