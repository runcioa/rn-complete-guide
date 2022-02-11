// App.js

import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={style.screen}>
      <View style={style.inputContainer}>
        <TextInput placeholder="Course Goal" style={style.input} />
        <Button title="ADD" />
      </View>
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
