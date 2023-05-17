import React from "react";
import { View, StyleSheet, Button } from "react-native";
import authService from "../services/authService";
import { IOnLogin } from "../utils/types";

interface IProps {
  onLogin: IOnLogin;
}

const UserLogin: React.FC<IProps> = ({ onLogin }) => {
  const signIn = async () => {
    try {
      const user = await authService.signIn();
      onLogin(user);
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
