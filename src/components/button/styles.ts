import { theme } from "@/src/styles/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: theme.borderRadius.md,
    alignItems: "center",
    marginTop: 10,
    backgroundColor: theme.colors.primary,
  },
  text: {
    color: theme.colors.background,
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default styles;
