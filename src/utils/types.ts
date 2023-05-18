import { User } from "@react-native-google-signin/google-signin";

export type IOnLogin = (user: User | undefined) => void;
