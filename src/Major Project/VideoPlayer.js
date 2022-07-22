import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import Constant from "expo-constants";
import WebView from 'react-native-webview';

const VideoPlayer = (route) => {
  const {videoId, videoTitle} = route
  return (
    <View style={{ flex: 1, marginTop: Constant.statusBarHeight }}>
      <View style={{ width: "100%", height: 200 }}>
        <WebView
        // javaScriptEnabled={true}
        // domStorageEnabled={true}
          source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
        />
      </View>
      <Text numberOfLines={2} ellipsizeMode="tail" style={{fontSize: 20, margin: 9, width: Dimensions.get("screen").width-50}}>{videoTitle}</Text>
      <View style={{borderBottomWidth: 1}}/>
    </View>
  )
}

export default VideoPlayer

const styles = StyleSheet.create({})