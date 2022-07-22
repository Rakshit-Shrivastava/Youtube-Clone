import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import React from 'react'
import Header from './Header'
import Card from './Card'
import SearchScreen from './SearchScreen'
import Constant from "expo-constants";
import { useSelector } from 'react-redux'


const Home = () => {
  const cardData = useSelector(state => {
    return state
  })
  return (
    <View style={{flex:1}}>
        <Header/>
        <FlatList
        data={cardData}
        keyExtractor={item => item.id.videoId}
        renderItem={({item})=>{
          return <Card
          videoId={item.id.videoId}
          title={item.snippet.title}
          channelName={item.snippet.channelTitle}
          />
        }}        
        />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})