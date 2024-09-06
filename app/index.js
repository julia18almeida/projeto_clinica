import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";
 
export default function Index() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
 
  return (
    <View style={styles.container}>
      <Image source={require("../src/imagens/logo1.png")} style={styles.imagem} />
 
      <Text style={styles.titulo}>Faça login em sua conta</Text>
 
      <Text style={styles.texto}>Email</Text>
      <TextInput
        placeholder="Insira seu endereço de email"
        style={styles.campo}
        onChangeText={(text) => setEmail(text)}
      />
 
      <Text style={styles.texto}>Senha</Text>
      <TextInput
        placeholder="Insira sua senha"
        style={styles.campo}
        secureTextEntry={true}
        onChangeText={(text) => setSenha(text)}
      />
 
      <Link href='/telas/home' style={styles.botaoh}>
        <Text style={styles.linkText}>Entrar</Text>
      </Link>
      <Link href="/" style={styles.es}>
        <Text>Esqueceu sua Senha?</Text>
      </Link>
 
      <View style={styles.cadastroContainer}>
        <Text style={styles.co}>Ainda não tem Conta?</Text>
        <Link href="/cadastro1" style={styles.botaoc}>
          <Text style={styles.linkTextc}>Faça seu Cadastro!</Text>
        </Link>
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 20,
    margin: 10,
    padding: 40,
    textAlign: "center",
    fontWeight: "bold",
  },
  botaoh: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    backgroundColor: "#0B3B60",
    width: "80%",
    borderRadius: 10,
    padding: 20,
  },
  linkText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  linkTextc: {
    color: "blue",
  },
  campo: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 16,
    width: "80%",
    backgroundColor: "#F8F8F8",
    borderColor: "#e6e6e6",
  },
  texto: {
    fontSize: 20,
    color: "#0B3B60",
    alignSelf: "flex-start",
    marginLeft: "10%",
    marginBottom: 5,
    fontWeight: "bold",
  },
  es: {
    color: "#0B3B60",
    fontSize: 16,
    marginTop: 10,
    textDecorationLine: 'underline'
  },
  cadastroContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  co: {
    fontSize: 16,
    marginRight: 5,
  },
});