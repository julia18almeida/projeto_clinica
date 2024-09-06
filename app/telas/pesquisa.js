import { View, Text, StyleSheet, ScrollView,TextInput,TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import { useState } from "react";
 
 
export default function Pesquisa() {
    const [esp, setEsp] = useState("");
    const [loc, setLoc] = useState("");
    return (
        <ScrollView>
           
        <View style={styles.container}>
            <View style={styles.quadro}>
                <TextInput  
                placeholder='Digite a Especialidade'
                style={styles.campo}
                onChangeText={(text) => setEsp(text)}/>
 
                <TextInput  
                placeholder='Digite sua Localização'
                style={styles.campo}
                onChangeText={(text) => setLoc(text)}/>
 
                <View style={styles.botao}>
                    <TouchableOpacity
                    onPress={() => {
                    alert("E aí");
                  }}
                >
                    <Text style={styles.bus}>Buscar</Text>
                    </TouchableOpacity>
                 </View>
            </View>
 
           
            <Text style={styles.subtitulo}>Resultado Da Busca</Text>
 
<View style={styles.consulta}>
    <Image source={require("../../src/imagens/ellipse4.png")} style={styles.imagem} />
    <View style={styles.textContainer}>
        <Text style={styles.nome}>Dra. Ana Lúcia</Text>
        <Text style={styles.especialidade}>Angiologista</Text>
        <Text style={styles.data}>03/03/2023</Text>
    </View>
</View>
 
<View style={styles.botcancel}>
    <TouchableOpacity>
        <Text style={styles.cancel}>
            Agendar Consulta
        </Text>
    </TouchableOpacity>
</View>
<View style={styles.consulta}>
<Image source={require("../../src/imagens/ellipse4.png")} style={styles.imagem} />
    <View style={styles.textContainer}>
        <Text style={styles.nome}>Dra. Ana Lúcia</Text>
        <Text style={styles.especialidade}>Angiologista</Text>
        <Text style={styles.data}>03/03/2023</Text>
    </View>
</View>
 
<View style={styles.botcancel}>
    <TouchableOpacity>
        <Text style={styles.cancel}>
            Agendar Consulta
        </Text>
    </TouchableOpacity>
</View>
<View style={styles.consulta}>
<Image source={require("../../src/imagens/ellipse4.png")} style={styles.imagem} />
    <View style={styles.textContainer}>
        <Text style={styles.nome}>Dra. Ana Lúcia</Text>
        <Text style={styles.especialidade}>Angiologista</Text>
        <Text style={styles.data}>03/03/2023</Text>
    </View>
</View>
 
<View style={styles.botcancel}>
    <TouchableOpacity>
        <Text style={styles.cancel}>
            Agendar Consulta
        </Text>
    </TouchableOpacity>
</View>
<View style={styles.consulta}>
<Image source={require("../../src/imagens/ellipse4.png")} style={styles.imagem} />
    <View style={styles.textContainer}>
        <Text style={styles.nome}>Dra. Ana Lúcia</Text>
        <Text style={styles.especialidade}>Angiologista</Text>
        <Text style={styles.data}>03/03/2023</Text>
    </View>
</View>
 
<View style={styles.botcancel}>
    <TouchableOpacity>
        <Text style={styles.cancel}>
            Agendar Consulta
        </Text>
    </TouchableOpacity>
</View>
           
        </View>
        </ScrollView>
 
    );
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 20,
        padding: 10
    },
    titulo: {
        fontSize: 25,
        marginLeft: 25,
        color: '#339CFF'
       
    },
 
    campo: {
        backgroundColor: '#F8F8F8',
        margin: 5,
        marginLeft: 20,
        padding: 10,
        borderRadius: 10,
        width: '90%',
        borderColor: '#f3f2f2',
        borderWidth: 5
    },
    botao: {
        fontSize:20,
        textAlign: 'center',
        marginLeft: 20,
        marginTop: 10,
        color: 'white',
        backgroundColor: '#0B3B60',
        width: "90%",
        borderRadius:10,
        padding: 20
 
    },
 
    bus: {
        color: 'white',
        textAlign: 'center',
        fontSize: 17
    },
    quadro: {
        backgroundColor: 'white',
        margin: 20,
        padding: 10,
        borderRadius: 10,
        width: '90%',
        borderColor: '#f3f2f2',
        borderWidth: 5,
 
    },
    subtitulo: {
        fontSize: 25,
        textAlign: 'center',
        marginTop: 20,
        color: '#339CFF',
        width: '100%',
        paddingHorizontal: 20,
    },
    consulta: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 10,
        width: '90%',
        borderColor: '#D1D2D2',
        borderWidth: 2,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 5,
    },
   
    imagem: {
        width: 80,
        height: 80,
        marginRight: 15,
        borderRadius: 40,
    },
    textContainer: {
        flex: 1,
    },
    nome: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    especialidade: {
        fontSize: 16,
        color: '#666',
    },
    data: {
        fontSize: 14,
        color: '#999',
    },
    botcancel: {
        backgroundColor: '#0B3B60',
        borderRadius: 5,
        padding: 10,
        width: "90%",
        marginTop: 10,
        alignItems: 'center',
        marginBottom: 20
    },
    cancel: {
        color: '#ffffff',
        fontSize: 16,
        textAlign: 'center'
    }
});