import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Todo({item, pressHandler}) {
 
    return (
     <TouchableOpacity onPress={() => pressHandler(item.key)}>
         <Text style={styles.item}>{item.text}</Text>
     </TouchableOpacity>
     //passed in pressHandler function from app.js
 )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: 'coral',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }
});