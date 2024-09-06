import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import CheckBox from "expo-checkbox";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
 
export default function Cadastro3() {
  const [sulamerica, Sulamerica] = useState(false);
  const [unimed, Unimed] = useState(false);
  const [bradesco, Bradesco] = useState(false);
  const [amil, Amil] = useState(false);
  const [biosaude, Biosaude] = useState(false);c
  const [biovida, Biovida] = useState(false);
  const [outros, Outros] = useState(false);
  const [splano, Splano] = useState(false);
 
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require("../src/imagens/logo1.png")}
          style={styles.imagem}
        />
 
        <Text style={styles.titulo}>
          Para finalizar, qual seu plano de saúde?
        </Text>
 
        <View style={styles.box}>
          <CheckBox
            style={styles.checkbox}
            value={sulamerica}
            onValueChange={Sulamerica}
            color={sulamerica ? "#0B3B60" : undefined}
          />
          <Text style={styles.text}>Sulamerica</Text>
        </View>
 
        <View style={styles.box}>
          <CheckBox
            style={styles.checkbox}
            value={unimed}
            onValueChange={Unimed}
            color={unimed ? "#0B3B60" : undefined}
          />
          <Text style={styles.text}>Unimed</Text>
        </View>
 
        <View style={styles.box}>
          <CheckBox
            style={styles.checkbox}
            value={bradesco}
            onValueChange={Bradesco}
            color={bradesco ? "#0B3B60" : undefined}
          />
          <Text style={styles.text}>Bradesco</Text>
        </View>
 
        <View style={styles.box}>
          <CheckBox
            style={styles.checkbox}
            value={amil}
            onValueChange={Amil}
            color={amil ? "#0B3B60" : undefined}
          />
          <Text style={styles.text}>Amil</Text>
        </View>
 
        <View style={styles.box}>
          <CheckBox
            style={styles.checkbox}
            value={biosaude}
            onValueChange={Biosaude}
            color={biosaude ? "#0B3B60" : undefined}
          />
          <Text style={styles.text}>Biosaúde</Text>
        </View>
 
        <View style={styles.box}>
          <CheckBox
            style={styles.checkbox}
            value={biovida}
            onValueChange={Biovida}
            color={biovida ? "#0B3B60" : undefined}
          />
          <Text style={styles.text}>Biovida</Text>
        </View>
 
        <View style={styles.box}>
          <CheckBox
            style={styles.checkbox}
            value={outros}
            onValueChange={Outros}
            color={outros ? "#0B3B60" : undefined}
          />
          <Text style={styles.text}>Outros</Text>
        </View>
 
        <View style={styles.box}>
          <CheckBox
            style={styles.checkbox}
            value={splano}
            onValueChange={Splano}
            color={splano ? "#0B3B60" : undefined}
          />
          <Text style={styles.text}>Não tenho Plano</Text>
        </View>
 
        <Link href={"/cadastro2"} style={styles.botaov}>
          Voltar
        </Link>
        <Link href={"/"} style={styles.botaoav}>
          Cadastrar!
        </Link>
      </View>
    </ScrollView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 22,
    margin: 5,
    alignSelf: "flex-start",
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  checkbox: {
    width: 35,
    height: 35,
    marginRight: 8,
    borderRadius: 8,
  },
  imagem: {
    marginLeft: 130,
  },
 
  titulo: {
    fontSize: 25,
    margin: 10,
    padding: 40,
    textAlign: "center",
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
    marginLeft: 40,
    fontWeight: "bold",
  },
  botaov: {
    fontSize: 20,
    textAlign: "center",
    margin: 12,
    backgroundColor: "#90989F",
    width: "80%",
    borderRadius: 10,
    padding: 15,
    color: "white",
    marginLeft: 40,
    fontWeight: "bold",
  },
});