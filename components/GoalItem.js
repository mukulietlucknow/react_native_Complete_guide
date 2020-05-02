import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity underlayColor={'#ccc'} onPress={() => props.onDelete(props.id)}>
            <View style={styles.listItem} >
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
        
    );
};

const styles = StyleSheet.create({
listItem :{
    padding :10,
    borderBottomColor: 'blueviolet', 
    borderBottomWidth: 1 
    },
})


export default GoalItem;