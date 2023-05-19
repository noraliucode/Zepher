// MainApp.tsx
import React, { useState } from "react";
import { View, StatusBar } from "react-native";
import UserLogin from "./UserLogin";
import Dashboard from "./Dashboard";
import styles from "../styles/styles";
import { useAuth } from "../context/AuthContext";

const MainApp: React.FC = () => {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      {!user ? <UserLogin /> : <Dashboard />}
      <StatusBar style="auto" />
    </View>
  );
};

export default MainApp;
