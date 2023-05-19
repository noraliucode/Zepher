import { User } from "@react-native-google-signin/google-signin";
import React, {
  createContext,
  useState,
  FunctionComponent,
  useContext,
  ReactNode,
} from "react";

type AuthContextType = {
  user: User | null;
  handleLogin: (user: User) => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  handleLogin: () => {},
});

export const useAuth = () => useContext(AuthContext);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: FunctionComponent<AuthProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (user: User) => {
    setUser(user);
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
