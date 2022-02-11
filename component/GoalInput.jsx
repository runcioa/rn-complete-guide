// component\GoalInput.jsx

import {useState} from "react";
import { TextInput, View, Button, StyleSheet } from "react-native";

const GoalInput = ({onAddGoal}) => {
    const [enteredGoal, setEnteredGoal] = useState("");

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      };


  return (
    <View style={style.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={style.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={onAddGoal.bind(this, enteredGoal)} />
    </View>
  );
};

const style = StyleSheet.create({
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

export default GoalInput;
