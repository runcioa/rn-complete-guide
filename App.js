// App.js
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

import GoalItem from "./component/GoalItem";
import GoalInput from "./component/GoalInput";

export default function App() {
 
  const [courseGoal, setcourseGoal] = useState([]);
  
  const addGoalHandler = (goalTitle) => {
    setcourseGoal((currentGoals) => [
      ...courseGoal,
      { id: Math.random().toString(), value: goalTitle },
    ]);
  };

  return (
    <View style={style.screen}>
     <GoalInput onAddGoal={addGoalHandler}/>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoal}
        renderItem={(itemData) => (
          <GoalItem title={itemData.item.value} />
        )}
      >
        )
      </FlatList>
    </View>
  );
}

const style = StyleSheet.create({
  screen: {
    padding: 50,
  },
 
  
});
