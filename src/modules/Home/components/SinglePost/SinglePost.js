import React from 'react'
import { View, ImageBackground, TouchableHighlight } from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import { styles } from './style'
import { TouchableOpacity } from 'react-native-gesture-handler'

class SinglePost extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    
    render(){
        const {item} = this.props.route.params
        return(
            <View style={styles.singlePostWrapper}>
                <ImageBackground
                    resizeMode='cover'
                    style={styles.singlePostImage}
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
            </View>
        )
    }
}

export default SinglePost