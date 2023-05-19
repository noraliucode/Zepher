// MainApp.tsx
import React, { useState } from "react";
import { View, StatusBar } from "react-native";
import UserLogin from "./UserLogin";
import Dashboard from "./Dashboard";
import styles from "../styles/styles";
import { User } from "@react-native-google-signin/google-signin";

const MainApp: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (user: User) => {
    setUser(user);
  };

  return (
    <View style={styles.container}>
      {!user ? (
        <UserLogin onLogin={handleLogin} />
      ) : (
        <Dashboard userId={user.user.id} />
      )}
      <StatusBar style="auto" />
    </View>
  );
};

export default MainApp;
