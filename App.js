import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button , ScrollView  , FlatList} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {

  
  const [courseGoals ,setCourseGoals] = useState([]);
  const [isAddMode ,setIsAddMode ] = useState(false);
  

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [...courseGoals ,
      {id : Math.random().toString() ,value : goalTitle} ]);
    setIsAddMode(false);
  }

  const removeHandler = (id) =>{
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id );
    })
  }

  const cancelGoalAdditionhandler  = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="add new goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionhandler}/>
      <FlatList 
      keyExtractor = {(item , index) => item.id}
      data={courseGoals} 
      renderItem={itemData => (
      <GoalItem id={itemData.item.id} title={itemData.item.value} onDelete={removeHandler}/>
      )}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 80,
  },
});
