import React from "react";
import { Text, View } from "react-native";
import styles from "./Header.style"


const Header=()=>{
    return(
        <View  style={styles.container}>
            <Text  style={styles.text}>Yapılacaklar</Text>
            <Text style={styles.count} >count</Text>

        </View>
    )
}

export default Header;