import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
    container:{
        padding:8,
        margin:10,
        borderRadius:5,
        alignItems:'center',
        backgroundColor:colors.green
    },
    button_container:{
        flexDirection:'row',
        alignItems:'center'

    },
    title:{ 
        color:'white',
        fontSize:17,
        fontWeight:'bold',
        margin:5
    }
})