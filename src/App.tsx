import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { registerRootComponent } from "expo";
import UserLogin from "./components/UserLogin";
import GoalSetup from "./components/GoalSetup";

interface User {
  username: string;
  password: string;
}

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [goal, setGoal] = useState<string>("");
  const [time, setTime] = useState<number>(0);

  const handleLogin = (user: User) => {
    setUser(user);
  };

  const handleGoalSet = (goal: string, time: number) => {
    setGoal(goal);
    setTime(time);
  };

  return (
    <View style={styles.container}>
      {!user ? (
        <UserLogin onLogin={handleLogin} />
      ) : (
        <GoalSetup user={user} onGoalSet={handleGoalSet} />
      )}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

registerRootComponent(App);

export default App;
