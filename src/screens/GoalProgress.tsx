// GoalProgress.tsx
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import storage from "../services/storageService";
import { Goal } from "../utils/types";
import { StackNavigationProp } from "@react-navigation/stack";

type IProps = {
  route: {
    params: {
      userId: string;
      goalId: string;
    };
  };
  navigation: StackNavigationProp<any>;
};

const GoalProgress: React.FC<IProps> = ({ route, navigation }) => {
  const { userId, goalId } = route.params;
  const [goal, setGoal] = useState<Goal | null>(null);

  const fetchGoal = async () => {
    const goal = await storage.getGoal(userId, goalId);
    setGoal(goal);
  };

  useEffect(() => {
    fetchGoal();
  }, []);

  const handlePressLink = (url: string) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log(`Don't know how to open URL: ${url}`);
      }
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Goal Progress</Text>
        {goal &&
          goal.progress.map((progressDay, index) => (
            <View key={index} style={styles.progressDay}>
              <Text style={styles.day}>Day {progressDay.day}</Text>
              <Text style={styles.date}>
                Date:{" "}
                {new Date(progressDay.timestamp * 1000).toLocaleDateString()}
              </Text>
              <TouchableOpacity
                onPress={() => handlePressLink(progressDay.link || "")}
              >
                <Text style={styles.link}>View Progress</Text>
              </TouchableOpacity>
              <View style={styles.separator} />
            </View>
          ))}
      </View>
      <Button
        title="Upload Progress"
        onPress={() =>
          navigation.navigate("ProgressUpload", { userId, goalId })
        }
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  progressDay: {
    marginBottom: 20,
  },
  day: {
    fontSize: 18,
    fontWeight: "bold",
  },
  date: {
    fontSize: 16,
    color: "#555",
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
  separator: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 10,
  },
});

export default GoalProgress;
