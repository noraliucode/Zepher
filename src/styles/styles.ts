// styles.ts
import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    height: 50,
    backgroundColor: "#841584",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default styles;
