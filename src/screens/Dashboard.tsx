// Dashboard.tsx
import React, { useEffect, useState } from "react";
import storage from "../services/storageService";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";
import {
  Layout,
  Text,
  Card,
  Button,
  List,
  ListItem,
  Divider,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";

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
    <Card
      style={{
        flex: 1,
        margin: 5,
        height: 200,
        backgroundColor: "#FFA7A7",
        borderRadius: 10,
      }}
      onPress={() => handleGoalPress(item)}
    >
      <Text category="h6">{item.name}</Text>
      <Text category="s2">{item.description}</Text>
    </Card>
  );

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Layout style={{ flex: 1, padding: 16 }}>
          <Text category="h1" style={{ marginBottom: 16 }}>
            Dashboard
          </Text>
          <List
            data={goals}
            renderItem={renderItem}
            ItemSeparatorComponent={Divider}
            style={{ marginBottom: 16 }}
            numColumns={2}
          />
          <Button onPress={() => navigation.navigate("GoalSetup")}>
            Set New Goal
          </Button>
        </Layout>
      </ApplicationProvider>
    </>
  );
};

export default Dashboard;
