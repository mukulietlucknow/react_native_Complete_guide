import React , {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button , Modal} from 'react-native';

const GoalInput = props => {
    const [enteredGoal , setenteredGoal] = useState();

    const goalInputHandler = (enteredText) => {
        setenteredGoal(enteredText);
      }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setenteredGoal('');
    }


    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Cource level" 
                style={styles.input} 
                onChangeText={goalInputHandler}
                value={enteredGoal}/>
                <View style = {styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" color='red' onPress = {props.onCancel}/>
                    </View>
                    <View style={styles.button} >
                        <Button title="ADD" onPress={addGoalHandler }/>
                    </View>                    
                    
                </View>
                
            </View>
        </Modal>
        
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        flex:1,
        justifyContent: 'center',
        alignItems : 'center',
        marginBottom : 10,
      },
      input: { 
        width: '80%', 
        borderBottomColor: 'blueviolet', 
        borderBottomWidth: 1 ,
        marginBottom:10,
    },
    buttonContainer : {
        flexDirection : "row",
        justifyContent : 'space-between',
        width : '80%',
    },
    button:{
        flex : 1,
    }
})


export default GoalInput;