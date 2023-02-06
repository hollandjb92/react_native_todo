import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Button,
  View,
  Modal,
  Image,
} from "react-native";

const GoalInput = ({ onAddGoal, visibility, onCancel }) => {
  const [goalInput, setGoalInput] = useState("");

  const handleChange = (text) => {
    setGoalInput(text);
  };

  const handleAddGoal = (newGoal) => {
    onAddGoal(newGoal);
    setGoalInput("");
  };

  return (
    <Modal visible={visibility} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your Goals!"
          onChangeText={handleChange}
          value={goalInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={() => handleAddGoal(goalInput)}
              color="#b180f0"
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "100%",
    padding: 16,
    borderRadius: 6,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311bcb",
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
