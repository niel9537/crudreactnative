import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather'


const widths = Dimensions.get('window').width;const width = Dimensions.get('window').width;

export default function SearchComponent({handleSort,handleSearchInput,placeholder,sortTitle}) {
  return (
    <View style={styles.container}>
        <Feather name='search' size={24} color='#aaa' style={{alignSelf: 'center', padding:10}}/>
        <TextInput 
            placeholder={placeholder}
            style={styles.search}
            onChangeText={(text)=>handleSearchInput(text)}/>
        <TouchableOpacity
            style={{
            flex:1,
            justifyContent: 'center',
            paddingHorizontal: 12,
            backgroundColor:'#fffff'}}
            onPress={handleSort}
        >
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ color: 'orange', fontSize: 16 }}>{sortTitle}</Text>
            <Feather name='chevron-down' size={26} color='orange' style={{ alignSelf: 'center' }} />
        </View>  
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
    container : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 64,
        width: widths - 20,
        borderColor: 4,
        backgroundColor: '#fff',
        margin: 10
    },
    search : {
        flex : 2,
    }
});
