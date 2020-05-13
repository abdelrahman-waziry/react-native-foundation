import React from 'react'
import { View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './style'

class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    
    render(){
        return(
            <View style={styles.searchBarWrapper}>
                <MaterialIcons name='search' size={25} color='#999'/>
                <TextInput 
                    spellCheck 
                    placeholder='Search...'
                    placeholderTextColor='#999' 
                    style={styles.searchBarInput}
                />
            </View>
        )
    }
}

export default SearchBar