import { theme } from "@/src/styles/theme";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
      }}
    >
      <StatusBar style="light" backgroundColor={theme.colors.primary} />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: insets.bottom + 16, // evita cortar conteúdo
          flexGrow: 1, // faz o conteúdo ocupar toda a tela
        }}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </View>
  );
}
