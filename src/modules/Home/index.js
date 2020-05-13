import React from 'react'
import { View, Text } from 'react-native'
import SearchBar from './components/SearchBar/SearchBar'
import HomeGrid from './components/HomeGrid/HomeGrid'
import { styles } from './style'

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    
    render(){
        return(
            <View style={styles.homeWrapper}>
                <SearchBar/>
                <HomeGrid navigateToPost={(item) => {
                    this.props.navigation.navigate('Post', {
                        item
                    })
                }}/>
            </View>
        )
    }
}

export default Home