import React, { useState } from "react";
import { Alert } from "react-native";
import { Layout, Input, Button } from "@ui-kitten/components";
import storage from "../services/storageService";
import { useAuth } from "../context/AuthContext";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const GoalSetup: React.FC = () => {
  const [goalName, setGoalName] = useState("");
  const [goalDescription, setGoalDescription] = useState("");

  const { user } = useAuth();

  const handleSubmit = async () => {
    if (goalName.trim() === "" || goalDescription.trim() === "") {
      Alert.alert("Please enter a goal name and description");
      return;
    }

    try {
      const newId = uuidv4();
      const goal = {
        name: goalName,
        description: goalDescription,
        createdTime: Date.now(),
        progress: [],
        id: newId,
      };
      if (user) {
        await storage.createGoal(user.user.id, goal);
      }
      setGoalName("");
      setGoalDescription("");
      Alert.alert("Goal created successfully");
    } catch (error) {
      console.error(error);
      Alert.alert("Error creating goal. Please try again.");
    }
  };

  return (
    <Layout
      style={{ flex: 1, justifyContent: "center", paddingHorizontal: 20 }}
    >
      <Input
        style={{ marginBottom: 20 }}
        value={goalName}
        placeholder="Enter your goal name"
        onChangeText={setGoalName}
      />
      <Input
        style={{ marginBottom: 20 }}
        value={goalDescription}
        placeholder="Enter your goal description"
        onChangeText={setGoalDescription}
      />
      <Button onPress={handleSubmit}>Submit Goal</Button>
    </Layout>
  );
};

export default GoalSetup;
