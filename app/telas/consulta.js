import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
 
export default function Consulta() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.titulo}>Minhas Consultas</Text>
               
                <View style={styles.botao}>
                    <TouchableOpacity>
                        <Text style={styles.agendar}>
                            Agendar Outra Consulta
                        </Text>
                    </TouchableOpacity>
                </View>
 
                <Text style={styles.subtitulo}>Próximas consultas</Text>
 
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
                            Cancelar
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text>
                    ____________________________________________________________
                </Text>
 
                <Text style={styles.subtitulo}>Consultas Passadas</Text>
 
                <View style={styles.consult}>
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
 
                <View style={styles.consult}>
                    <Image source={require("../../src/imagens/ellipsenegro.png")} style={styles.imagem} />
                    <View style={styles.textContainer}>
                        <Text style={styles.nome}>Dr. Paulo Matos</Text>
                        <Text style={styles.especialidade}>Otorrinolaringologista</Text>
                        <Text style={styles.data}>09/08/2022</Text>
                    </View>
                </View>
 
                <View style={styles.botcancel}>
                    <TouchableOpacity>
                        <Text style={styles.cancel}>
                        Agendar Consulta
                        </Text>
                    </TouchableOpacity>
                </View>
 
                <View style={styles.consult}>
                    <Image source={require("../../src/imagens/ellipsesorriso.png")} style={styles.imagem} />
                    <View style={styles.textContainer}>
                        <Text style={styles.nome}>Dra. Mariana Luz</Text>
                        <Text style={styles.especialidade}>Mastologista</Text>
                        <Text style={styles.data}>07/10/2022</Text>
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
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        color: '#339CFF'
    },
    subtitulo: {
        fontSize: 25,
        textAlign: 'left',
        marginTop: 20,
        color: '#339CFF',
        width: '100%',
        paddingHorizontal: 20,
    },
    botao: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 20,
        color: 'white',
        backgroundColor: '#0B3B60',
        width: "80%",
        borderRadius: 10,
        padding: 20,
    },
    agendar: {
        color: '#ffffff',
        fontSize: 20,
        textAlign: 'center'
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
    consult: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#C2E1FF',
        padding: 10,
        borderRadius: 10,
        width: '90%',
        borderColor: '#C2E1FF',
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
    },
    cancel: {
        color: '#ffffff',
        fontSize: 16,
        textAlign: 'center'
    }
});