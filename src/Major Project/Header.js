import React from 'react';
import {AntDesign, MaterialIcons } from "@expo/vector-icons";
import Constant from "expo-constants";
import { StyleSheet, Text, View} from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
          <AntDesign name='youtube' size={28} color='red' style={{marginLeft:5}}/>
          <Text style={{fontSize:22, marginLeft:5}}>Youtube</Text>
      </View>
      <View style={styles.searchContainer}>
      <AntDesign name="search1" size={24} color="black" onPress={()=>{navigation.navigate("SearchScreen")}}/>
      <MaterialIcons name="account-circle" size={28} color="black" />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        height: 40,
        marginTop: Constant.statusBarHeight,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // borderBottomWidth: 2,
        elevation: 5
    },
    logoContainer:{
        flexDirection: "row",
        margin: 5,
    },
    searchContainer:{
        flexDirection: "row",
        width: 100,
        justifyContent: "space-evenly",
        alignItems: "center"
    }
})