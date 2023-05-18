import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import Config from "react-native-config";

GoogleSignin.configure({
  webClientId: Config.WEB_CLIENT_ID,
  offlineAccess: true,
});

const authService = {
  signIn: async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      return userInfo;
      // TODO: handle user login here
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
      // Alert.alert('Login Failed', 'An error occurred while logging in.');
      console.error(error);
    }
  },
  // Implement other methods like logout, register, etc.
};

export default authService;
