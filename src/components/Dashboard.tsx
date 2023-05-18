import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

interface DashboardProps {
  goal: string;
  totalTime: number;
  onNavigateToGoalTracking: () => void;
  onNavigateToProgressUpload: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({
  goal,
  totalTime,
  onNavigateToGoalTracking,
  onNavigateToProgressUpload,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.text}>{`Current Goal: ${goal}`}</Text>
      <Text
        style={styles.text}
      >{`Total Time Spent: ${totalTime} seconds`}</Text>
      <Button title="Track Goal" onPress={onNavigateToGoalTracking} />
      <Button title="Upload Progress" onPress={onNavigateToProgressUpload} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default Dashboard;
