import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const MiniCard = (props) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
        onPress={()=>{navigation.navigate("VideoPlayer", {videoId: props.videoId, videoTitle: props.title})}}
        >
        <View style={{ margin: 10, marginBottom: 0, flexDirection: "row" }}>
            <Image style={styles.imageStyle} source={{ uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg` }} />
            <View style={{ marginLeft: 5 }}>
                <Text style={{ fontSize: 17, width: Dimensions.get("screen").width / 2 }} ellipsizeMode="tail" numberOfLines={3}>{props.title}</Text>
                <Text>{props.channelName}</Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}

export default MiniCard

const styles = StyleSheet.create({
    imageStyle: {
        width: "50%",
        height: 100,
    },
})