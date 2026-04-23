import { theme } from "@/src/styles/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.md,
  },

  label: {
    fontSize: theme.typography.size.sm,
    color: theme.colors.textSecondary,
    marginBottom: 6,
  },

  inputContainer: {
    height: 50,
    borderRadius: 12,
    paddingHorizontal: theme.spacing.md,

    backgroundColor: theme.colors.inputBg,
    borderWidth: 1,
    borderColor: theme.colors.border,

    justifyContent: "center",
  },

  input: {
    fontSize: theme.typography.size.md,
    color: theme.colors.text,
  },

  focused: {
    borderColor: theme.colors.primary,
  },

  errorBorder: {
    borderColor: theme.colors.error,
  },

  errorText: {
    marginTop: 4,
    color: theme.colors.error,
    fontSize: theme.typography.size.sm,
  },
});

export default styles;
