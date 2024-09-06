import { View, Text, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';
 
export default function Perfil() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Meu Perfil</Text>
            <Image source={require("../../src/imagens/perfil.png")} style={styles.imagem} />
            <Text style={styles.info}>Informaçoes Pessoais</Text>
 
            <Text style={styles.nome}>Joana Magahães Souza</Text>
        <Text style={styles.nome}>28/05/1990</Text>
        <Text style={styles.nome}>São Paulo - SP</Text>
        <Text>
            __________________________________________________
        </Text>
 
        <Text style={styles.info}> Histórico Médico </Text>
        <Text style={styles.nome}> ° Bronquite </Text>
        <Text style={styles.nome}> ° Sinusite </Text>
        </View>
    );
}
 
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    titulo: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#339CFF',
       
    },
 
    botao: {
        fontSize:20,
        textAlign: 'center',
        margin: 10,
        color: 'white',
        backgroundColor: '#005ce6',
        width: "80%",
        borderRadius:10,
        padding: 20
 
    },
    info: {
        color: '#339CFF',
        fontSize: 20,
        margin: 20
    },
    imagem: {
        width: 120,
        height: 120,
    },
    nome:
    {
        fontSize: 20,
    }
});