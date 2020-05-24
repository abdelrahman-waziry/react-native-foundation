import React from 'react'
import { View, Image, Text, FlatList, Dimensions, TouchableHighlight, Linking} from 'react-native'
import * as FileSystem from 'expo-file-system';
import { connectActionSheet, ActionSheetProvider } from '@expo/react-native-action-sheet'
import Unsplash, { toJson } from 'unsplash-js'
import { styles } from './style'
import {Entypo} from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

class HomeGrid extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            photos: [],
            page: 1,
            refreshing: false,
            viewType: 'Grid',
            width: Dimensions.get('window').width * 0.84 / 2
        }
        this.fetchPopularPhotos()
    }

    fetchPopularPhotos = () => {
        const unsplash = new Unsplash({ accessKey: "xBET85rZXCEg6BqrcJMfZ78aULYhPXxnOYktknjciNo" });
        unsplash.photos.listPhotos(this.state.page, 15, 'recent').then(toJson).then(json => {
            this.setState({
                photos: this.state.photos.concat(json),
                refreshing: false
            })
        })
    }
    
    render(){
        return(
            <View style={styles.gridWrapper}>
                <Text style={styles.title}>Featured</Text>
                <View style={styles.gridStyleBar}>
                    <Text style={styles.gridStyleBarText}>
                        {this.state.viewType}
                    </Text>
                    <TouchableHighlight onPress={() => {
                        this.setState({
                            viewType: this.state.viewType === 'List' ? 'Grid' : 'List',
                        }, () => {
                            this.setState({
                                width: this.state.viewType === 'List' ? Dimensions.get('window').width * 0.88 : Dimensions.get('window').width * 0.84 / 2
                            })
                        })
                    }}>
                        <Entypo
                            style={styles.gridStyleBarIcon} 
                            size={25} 
                            name={this.state.viewType === 'List' ? 'grid' : 'list'}
                        />
                    </TouchableHighlight>
                </View>
                <FlatList
                    onRefresh={() => {
                        this.setState({
                            page: 1,
                            refreshing: true
                        }, () => {
                            this.fetchPopularPhotos()
                        })
                    }}
                    refreshing={this.state.refreshing}
                    data={this.state.photos}
                    key={this.state.viewType}
                    numColumns={this.state.viewType === 'Grid' ? 2 : 1}
                    keyExtractor={(item, i) => i}
                    renderItem={({ item }) => (
                        <TouchableWithoutFeedback 
                            onLongPress={() => {
                                const cancelButtonIndex = 2;
                                this.props.showActionSheetWithOptions(
                                    {
                                        options: ['Download', `Visit @${item.user.first_name} Page`, 'Cancel'],
                                        cancelButtonIndex,
                                    },
                                    buttonIndex => {
                                        if(buttonIndex === 0){
                                            FileSystem.downloadAsync(item.links.download, `${FileSystem.documentDirectory} ${item.id}`).then(({uri}) => {
                                                console.log(uri)
                                            })
                                        }
                                        else if (buttonIndex === 1){
                                            Linking.openURL(item.user.links.html);
                                        }
                                    },
                                );
                            }}
                            onPress={() => {
                                this.props.navigateToPost(item)
                            }}
                        >
                            <Image 
                                source={{uri: item.urls.full}} 
                                style={{...styles.imageContainer, width: this.state.width}}
                            />
                        </TouchableWithoutFeedback>
                    )}
                    onEndReached={() => {
                        this.setState({
                            page: this.state.page + 1,
                        }, () => {
                            this.fetchPopularPhotos()
                        })
                    }}
                    showsVerticalScrollIndicator={false}
                    onEndReachedThreshold={50}
                />
            </View>
        )
    }
}

const connectedHomeGrid = connectActionSheet(HomeGrid)

export default connectedHomeGrid