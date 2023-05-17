// UserLogin.tsx
import React, { useEffect } from "react";
import { View, StyleSheet, Alert, Button } from "react-native";
import authService from "../services/authService";

const UserLogin: React.FC = () => {
  return (
    <View style={styles.container}>
      <Button title="Sign in with Google" onPress={authService.signIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UserLogin;
