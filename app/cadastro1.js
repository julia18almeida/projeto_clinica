import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';
 
export default function Cadastro1() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
 
    return (
        <View style={styles.container}>
            <Image
                source={require('../src/imagens/logo1.png')}
                style={styles.imagem}
            />
            <Text style={styles.titulo}>Insira Alguns Dados Básicos:</Text>
 
            <View style={styles.inputContainer}>
                <Text style={styles.texto}>Nome</Text>
                <TextInput
                    placeholder='Digite seu nome completo'
                    style={styles.campo}
                    onChangeText={(text) => setNome(text)}
                />
 
                <Text style={styles.texto}>Email</Text>
                <TextInput
                    placeholder='Insira seu endereço de email'
                    style={styles.campo}
                    keyboardType="email-address"
                    onChangeText={(text) => setEmail(text)}
                />
 
                <Text style={styles.texto}>Crie uma Senha</Text>
                <TextInput
                    placeholder='Insira sua senha'
                    style={styles.campo}
                    onChangeText={(text) => setSenha(text)}
                />
 
                <Text style={styles.texto}>Repita a Senha</Text>
                <TextInput
                    placeholder='Insira sua senha'
                    style={styles.campo}
                    onChangeText={(text) => setSenha(text)}
                />
            </View>
 
            <Link href={"/cadastro2"} style={styles.botaoav}> Avançar </Link>
        </View>
    );
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
 
    titulo: {
        fontSize: 30,
        margin: 10,
        padding: 30,
        textAlign: 'center',
        fontWeight: "bold",
        color: '#6B6E71'
    },
 
    inputContainer: {
        width: '80%',
        alignSelf: 'center',
    },
 
    texto: {
        fontSize: 20,
        color: '#0B3B60',
        marginBottom: 5,
        fontWeight: "bold",
    },
 
    campo: {
        padding: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 16,
        backgroundColor: '#F8F8F8',
        borderColor: '#e6e6e6',
    },
 
    botaoav: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        backgroundColor: '#0B3B60',
        width: "80%",
        borderRadius: 10,
        padding: 20,
        color: 'white',
        fontWeight: "bold",
    },
});
 