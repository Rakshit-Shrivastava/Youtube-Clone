import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const Card = (props) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
        onPress={()=>{navigation.navigate("VideoPlayer", {videoId: props.videoId, videoTitle: props.title})}}
        >
        <View style={{ marginBottom: 10 }}>
            <View>
                <Image style={styles.imageStyle} source={{ uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg` }} />
            </View>
            <View style={styles.videoDescStyle}>
                <View style={styles.channelImageStyle}>
                    <MaterialIcons name="account-circle" size={28} color="black" />
                </View>
                <View>
                    <Text style={{ fontSize: 20, width: Dimensions.get("screen").width - 50 }} ellipsizeMode="tail" numberOfLines={2}>{props.title}</Text>
                    <Text>{props.channelName}</Text>
                </View>
            </View>
        </View>
        </TouchableOpacity>
    )
}

export default Card

const styles = StyleSheet.create({
    imageStyle: {
        width: "100%",
        height: 180,
    },
    videoDescStyle: {
        flexDirection: "row",
        margin: 5
    },
    channelImageStyle: {
        margin: 5,
    }
})