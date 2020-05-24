import React from 'react'
import { View, ImageBackground, TouchableHighlight, Image, Text } from 'react-native'
import * as FileSystem from 'expo-file-system';
import {AntDesign} from '@expo/vector-icons'
import { styles } from './style'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'

class SinglePost extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    
    render(){
        const {item} = this.props.route.params
        return(
            <ScrollView style={styles.singlePostWrapper}>
                <ImageBackground
                    resizeMode='cover'
                    style={styles.singlePostImage}
                    imageStyle={{borderBottomRightRadius: 35, borderBottomLeftRadius: 35}}
                    source={{uri: item.urls.full}}
                >
                    <TouchableOpacity 
                        style={styles.backIcon}
                        onPress={() => {
                            this.props.navigation.goBack()
                        }}
                    >
                            <AntDesign style={{color: '#222'}} name='arrowleft' size={30}/>
                    </TouchableOpacity>
                </ImageBackground>
                <View style={styles.infoContainer}>
                    <Image 
                        source={{uri: item.user.profile_image.medium}} 
                        style={styles.infoHeaderAvatar}
                        resizeMode={'cover'}
                    />
                    <View style={styles.infoHeader}>
                        <Text style={styles.infoHeaderUsername}>
                            {item.user.name}
                        </Text>
                        <Text style={styles.infoHeaderDate}>
                            {item.user.username}
                        </Text>
                    </View>
                </View>
                <TouchableHighlight onPress={() => {
                    FileSystem.downloadAsync(item.links.download, `${FileSystem.documentDirectory} ${item.id}`).then(({uri}) => {
                        console.log(uri)
                    })
                }} style={styles.downloadButton}>
                    <Text style={styles.downloadButtonText}>
                        Download
                    </Text>
                </TouchableHighlight>
            </ScrollView>
        )
    }
}

export default SinglePost