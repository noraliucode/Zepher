// Dashboard.tsx
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import storage from "../services/storageService";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const navigation = useNavigation();
  const [goals, setGoals] = useState<Array<any>>([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchGoals = async () => {
      const goals = await storage.getGoals(user?.user.id);
      setGoals(goals);
    };
    fetchGoals();
  }, []);

  const handleGoalPress = (goal: any) => {
    navigation.navigate("GoalProgress", {
      goalId: goal.id,
      userId: user?.user.id,
    });
  };

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity onPress={() => handleGoalPress(item)}>
      <View style={styles.goal}>
        <Text style={styles.goalName}>{item.name}</Text>
        <Text style={styles.goalDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <FlatList
        data={goals}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.name}_${index}`}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  goal: {
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  goalName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  goalDescription: {
    fontSize: 14,
  },
});

export default Dashboard;
