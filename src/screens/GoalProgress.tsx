// GoalProgress.tsx
import React, { useEffect, useState } from "react";
import { Linking } from "react-native";
import storage from "../services/storageService";
import { Goal } from "../utils/types";
import { StackNavigationProp } from "@react-navigation/stack";
import { Layout, Text, Button, Card, Divider } from "@ui-kitten/components";

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
    <>
      <Layout style={{ flex: 1, padding: 16 }}>
        <Text category="h1">Goal Progress</Text>
        {goal &&
          goal.progress.map((progressDay, index) => (
            <Card key={index} style={{ marginVertical: 8 }}>
              <Text category="h5">Day {progressDay.day}</Text>
              <Text category="p1">
                Date:{" "}
                {new Date(progressDay.timestamp * 1000).toLocaleDateString()}
              </Text>
              <Button
                appearance="ghost"
                status="info"
                onPress={() => handlePressLink(progressDay.link || "")}
              >
                View Progress
              </Button>
              <Divider />
            </Card>
          ))}
        <Button
          style={{ marginTop: 16 }}
          onPress={() =>
            navigation.navigate("ProgressUpload", { userId, goalId })
          }
        >
          Upload Progress
        </Button>
      </Layout>
    </>
  );
};

export default GoalProgress;
