import React from "react";
import { Layout, Button } from "@ui-kitten/components";
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
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button onPress={signIn}>Sign in with Google</Button>
    </Layout>
  );
};

export default UserLogin;
