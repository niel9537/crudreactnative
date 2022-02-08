import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

export default function CardComponent({data}) {
  return (
    <TouchableOpacity style={styles.container}>
        <Icon name='x' size={24} style={styles.title} />
        <Text>{data.name}</Text>
        <Text>{data.gender}</Text>
        <Text>{data.email}</Text>
        <Text>{data.status}</Text>     
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        height: 124,
        backgroundColor: 'white',
        display: 'flex',
        borderRadius: 8,
        marginBottom: 10,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        position: 'absolute',
        top: 10,
        right: 10
    },
});
