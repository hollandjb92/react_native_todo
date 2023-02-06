import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalInput from "./components/GoalInput";

import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const handleAddGoal = (newGoal) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: newGoal, id: Math.random().toString() },
    ]);
    handleCloseModal();
  };

  const handleDeleteGoal = (goalId) => {
    setGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.id !== goalId)
    );
  };

  const handleModalVisibility = () => {
    setIsVisible(true);
  };

  const handleCloseModal = () => {
    setIsVisible(false);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          onPress={handleModalVisibility}
          color="#a065ec"
        />
        <GoalInput
          onAddGoal={handleAddGoal}
          visibility={isVisible}
          onCancel={handleCloseModal}
        />
        <View style={styles.goalContainer}>
          <FlatList
            data={goals}
            keyExtractor={(item, index) => item.id}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={handleDeleteGoal}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 75,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#1e085a",
  },

  goalContainer: {
    flex: 4,
  },
});
