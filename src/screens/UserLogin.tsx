import React from "react";
import { View, StyleSheet, Button } from "react-native";
import authService from "../services/authService";
import { useAuth } from "../context/AuthContext";

const UserLogin: React.FC = () => {
  const { handleLogin } = useAuth();
  const signIn = async () => {
    try {
      const user = await authService.signIn();
      if (user) {
        handleLogin(user);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Sign in with Google" onPress={signIn} />
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
