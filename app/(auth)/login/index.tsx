import { Button } from "@/src/components/button/Button";
import { Input } from "@/src/components/input/Input";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleLogin() {
    // TODO: Adicionar validação e lógica de autenticação
    setIsLoading(true);

    // Simula uma chamada de API
    setTimeout(() => {
      router.push("/(tabs)/home");
      //router.replace("/(tabs)/home");
      // Em um caso real, o setIsLoading(false) iria no bloco .finally() ou .catch()
    }, 1000);
  }

  function handleForgotPassword() {
    // TODO: Implementar navegação para a tela de recuperação de senha
    console.log("Esqueci a senha");
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerLogo}>
          <Image
            source={require("@/assets/images/logo_branca.png")}
            style={{ height: 50, width: 250 }}
          />
        </View>
        <View style={styles.containerLogin}>
          <ScrollView
            style={{ width: "100%" }}
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.loginTitle}>Login</Text>
            <View style={styles.form}>
              <Input
                label="E-mail"
                placeholder="Digite seu e-mail"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <Input
                label="Senha"
                placeholder="Digite sua senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>
            <TouchableOpacity
              style={styles.forgotPasswordButton}
              onPress={handleForgotPassword}
            >
              <Text style={styles.forgotPasswordText}>Esqueci a senha</Text>
            </TouchableOpacity>

            <Button
              title="Entrar"
              onPress={handleLogin}
              style={styles.button}
              isLoading={isLoading}
            />

            <View style={styles.registerContainer}>
              <Text style={styles.registerText}>Não tem uma conta? </Text>
              <Link href="/(auth)/register/index" asChild>
                <TouchableOpacity>
                  <Text style={styles.registerLink}>Cadastre-se</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
}
