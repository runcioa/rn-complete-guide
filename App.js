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

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoal, setcourseGoal] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setcourseGoal((currentGoals) => [
      ...courseGoal,
      { id: Math.random().toString(), value: enteredGoal },
    ]);
  };

  return (
    <View style={style.screen}>
      <View style={style.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={style.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
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
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
  },
  
});
