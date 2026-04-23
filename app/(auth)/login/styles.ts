import { theme } from "@/src/styles/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  containerLogin: {
    flex: 2,
    bottom: 0,
    width: "100%",
    backgroundColor: theme.colors.background,
  },
  scrollContainer: {
    padding: theme.spacing.lg,
    alignItems: "center",
  },
  containerLogo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    fontSize: theme.typography.size.xxl,
    fontWeight: "bold",
    color: theme.colors.background,
  },
  loginTitle: {
    fontSize: theme.typography.size.xxl,
    fontWeight: "bold",
    color: theme.colors.primaryDark,
    marginBottom: theme.spacing.xl,
  },
  form: {
    width: "100%",
    gap: theme.spacing.sm,
  },
  button: {
    width: "100%",
    marginTop: theme.spacing.md,
  },
  forgotPasswordButton: {
    alignSelf: "flex-end",
    paddingVertical: theme.spacing.sm,
  },
  forgotPasswordText: {
    color: theme.colors.primary,
    fontSize: theme.typography.size.sm,
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing.xl,
  },
  registerText: {
    fontSize: theme.typography.size.sm,
    color: theme.colors.textSecondary,
  },
  registerLink: {
    fontSize: theme.typography.size.sm,
    color: theme.colors.primary,
    fontWeight: "bold",
  },
});

export default styles;
