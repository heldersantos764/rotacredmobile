import PageContainer from "@/src/components/page/container/PageContainer";
import { theme } from "@/src/styles/theme";
import { StyleSheet, View } from "react-native";

export default function Home() {
  return (
    <PageContainer>
      <View style={styles.header}>
        <View></View>
      </View>
      <View style={styles.body}></View>
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 120,
    backgroundColor: theme.colors.primary,
  },
  body: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: theme.colors.success,
  },
});
