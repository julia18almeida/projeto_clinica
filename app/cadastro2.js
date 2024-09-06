import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    ScrollView,
  } from "react-native";
  import { Link } from "expo-router";
  import { useState } from "react";
   
  export default function Cadastro2() {
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [comp, setComp] = useState("");
    const [tel, setTel] = useState("");
   
    return (
      <ScrollView>
   
      <View style={styles.container}>
        <Image source={require("../src/imagens/logo1.png")} style={styles.imagem} />
        <Text style={styles.titulo}>
          Agora, mais Alguns Dados Básicos sobre você:
        </Text>
   
        <View style={styles.inputContainer}>
          <Text style={styles.texto}>CEP</Text>
          <TextInput
            placeholder="Insira seu CEP"
            style={styles.campo}
            keyboardType='numeric'
            onChangeText={(text) => setCep(text)}
            />
   
          <Text style={styles.texto}>Endereço</Text>
          <TextInput
            placeholder="Insira seu endereço"
            style={styles.campo}
            onChangeText={(text) => setEndereco(text)}
            />
   
          <Text style={styles.texto}>Número</Text>
          <TextInput
            placeholder="Insira seu número"
            style={styles.campo}
            onChangeText={(text) => setNumero(text)}
            />
   
          <Text style={styles.texto}>Complemento</Text>
          <TextInput
            placeholder="Insira seu complemento"
            style={styles.campo}
            onChangeText={(text) => setComp(text)}
            />
   
          <Text style={styles.texto}>Telefone</Text>
          <TextInput
            placeholder="(00) 00000-0000"
            style={styles.campo}
            keyboardType="phone-pad"
            onChangeText={(text) => setTel(text)}
            />
        </View>
   
        <Link href={"/cadastro1"} style={styles.botaov}>
         
          Voltar
        </Link>
        <Link href={"/cadastro3"} style={styles.botaoav}>
         
          Avançar
        </Link>
      </View>
  </ScrollView>
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
      fontSize: 25,
      margin: 10,
      padding: 10,
      textAlign: "center",
      fontWeight: "bold",
      color: '#6B6E71'
    },
   
    inputContainer: {
      width: "80%",
      alignSelf: "center",
    },
   
    texto: {
      fontSize: 20,
      color: "#0B3B60",
      marginBottom: 5,
      fontWeight: "bold",
    },
   
    campo: {
      padding: 10,
      marginBottom: 15,
      borderWidth: 1,
      borderRadius: 5,
      fontSize: 16,
      backgroundColor: "#F8F8F8",
      borderColor: "#e6e6e6",
    },
   
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 20,
      width: "80%",
    },
   
    botaoav: {
      fontSize: 20,
      textAlign: "center",
      margin: 10,
      backgroundColor: "#0B3B60",
      width: "80%",
      borderRadius: 10,
      padding: 15,
      color: "white",
      fontWeight: "bold",
    },
    botaov: {
      fontSize: 20,
      textAlign: "center",
      margin: 10,
      backgroundColor: "#90989F",
      width: "80%",
      borderRadius: 10,
      padding: 15,
      color: "white",
      fontWeight: "bold",
    },
  });
   