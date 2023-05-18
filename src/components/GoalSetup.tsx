// GoalSetup.tsx
import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";
import storage from "../services/storageService";
import { User } from "@react-native-google-signin/google-signin";

type IProps = {
  user: User;
};

const GoalSetup: React.FC<IProps> = (props) => {
  const [goalName, setGoalName] = useState("Test");
  const [goalDescription, setGoalDescription] = useState("Test Description");

  const { user } = props;

  const handleGoalNameChange = (text: string) => {
    setGoalName(text);
  };

  const handleGoalDescriptionChange = (text: string) => {
    setGoalDescription(text);
  };

  const handleSubmit = async () => {
    if (goalName.trim() === "" || goalDescription.trim() === "") {
      Alert.alert("Please enter a goal name and description");
      return;
    }

    try {
      const goal = {
        name: goalName,
        description: goalDescription,
        createdTime: Date.now(),
        progress: [],
      };
      console.log("user.user.id", user.user.id);
      console.log("goal", goal);

      await storage.createGoal(user.user.id, goal);
      setGoalName("");
      setGoalDescription("");
      Alert.alert("Goal created successfully");
    } catch (error) {
      console.error(error);
      Alert.alert("Error creating goal. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleGoalNameChange}
        value={goalName}
        placeholder="Enter your goal name"
      />
      <TextInput
        style={styles.input}
        onChangeText={handleGoalDescriptionChange}
        value={goalDescription}
        placeholder="Enter your goal description"
      />
      <Button title="Submit Goal" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
});

export default GoalSetup;
