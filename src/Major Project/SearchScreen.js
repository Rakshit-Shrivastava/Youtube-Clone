import React, { useState } from 'react'
import Constant from "expo-constants";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, ActivityIndicator } from 'react-native'
import MiniCard from './MiniCard';
import { useSelector, useDispatch } from 'react-redux';

const SearchScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const [value, setValue] = useState("")
  // const [payload, setPayload] = useState([])
  const payload = useSelector(state => {
    return state
  })
  const [loading, setLoading] = useState(false)
  const fetchData = () => {
    setLoading(true)
    fetch(``)
      .then(response => response.json())
      .then(data => {
        setLoading(false)
        // setPayload(data.items)
        dispatch({type: "add", payload: data.items})
      })
  }
  return (
    <View style={{ flex: 1, }}>
      <View style={styles.searchContainer}>
        <AntDesign name="arrowleft" size={24} color="black" onPress={()=>navigation.goBack()}/>
        <TextInput
          value={value}
          onChangeText={(text) => { setValue(text) }}
          style={{ width: "70%", backgroundColor: "#e6e6e6" }}
        />
        <MaterialIcons name="send" size={24} color="black" onPress={() => { fetchData() }} />
      </View>
      {loading ? <ActivityIndicator size={"large"} style={{ marginTop: 10 }} /> : null}
      <FlatList
        data={payload}
        keyExtractor={item => item.id.videoId}
        renderItem={({ item }) => {
          return (
            <MiniCard
              videoId={item.id.videoId}
              title={item.snippet.title}
              channelName={item.snippet.channelTitle}
            />
          )
        }}
      />
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  searchContainer: {
    // width: "100%",
    height: 40,
    padding: 5,
    marginTop: Constant.statusBarHeight,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    elevation: 5,
  }
})