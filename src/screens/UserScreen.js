import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import CardComponent from '../components/CardComponent';
import SearchComponent from '../components/SearchComponent';
import VectorIcon from 'react-native-vector-icons/Ionicons'

const dataUser = [{
    name : 'Otniel',
    gender : 'Laki-laki',
    email : 'niel.zebua8@gmail.com',
    status : 'Active'
}]

export default function UserScreen() {
    return (
        <View style={styles.container}>
            <SearchComponent placeholder='Cari' sortTitle='Filter' />  
            <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>User Screen</Text>
            <FlatList
                data={dataUser}
                renderItem={({ item }) => <CardComponent data={item}/>}
                keyExtractor={(id)=>id}
                />
            <VectorIcon 
                name='add-circle' 
                size={50} 
                style={{position:'absolute',bottom:10,right:10,color:'orange'}} 
                onPress={()=>setModalVisible(!modalVisible)}/>
        </View>
      );
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    }
});


