import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import { useState } from "react";
 
export default function Home() {
    const [esp, setEsp] = useState("");
    const [loc, setLoc] = useState("");
    return (
        <ScrollView>
           
        <View style={styles.container}>
           
        <Image source={require("../../src/imagens/gat.png")} style={styles.imagem} />
            <Text style={styles.titulo}>Boas Vindas!</Text>
 
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
 
                 <Text style={styles.dep}>
                    Depoimentos
                 </Text>
 
                  <View style={styles.grande}>
 
                  <Text style={styles.teal}>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                  </Text>
                  <Text style={styles.pessoa}>
                  Júlio, 40 anos, São Paulo/SP.
                  </Text>
 
                <Text>
                    ____________________________________________________
                </Text>
 
                  <Text style={styles.teal}>
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                  </Text>
                  <Text style={styles.pessoa}>
                  Júlio, 40 anos, São Paulo/SP.
                  </Text>
                <Text>
                    ____________________________________________________
                </Text>
 
                  <Text style={styles.teal}>
                  Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores.
                  </Text>
                  <Text style={styles.pessoa}>
                  Júlio, 40 anos, São Paulo/SP.
                  </Text>
                <Text style={styles.linha}>
                    _________________________________________________
                </Text>
 
                  </View>
        </View>
       
        </ScrollView>
    );
}
 
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff'
    },
    titulo: {
        fontSize: 25,
        marginLeft: 25,
        color: '#339CFF'
       
    },
 
    campo: {
        backgroundColor: 'white',
        margin: 5,
        marginLeft: 30,
        padding: 10,
        borderRadius: 10,
        width: '80%',
        borderColor: '#f3f2f2',
        borderWidth: 5
    },
 
    botao: {
        fontSize:20,
        textAlign: 'center',
        marginLeft: 30,
        marginTop: 10,
        color: 'white',
        backgroundColor: '#0B3B60',
        width: "80%",
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
        borderWidth: 5
 
    },
    dep: {
        fontSize: 30,
        textAlign: 'center'
 
    },
    grande: {
        width: '90%',
        alignItems: 'center',
        paddingLeft: 30,
        paddingTop: 10
    },
    pessoa: {
        padding: 5,
        fontSize: 20
    },
    teal: {
        paddingTop: 20
    },
    imagem: {
        marginLeft: 25
    },
    linha: {
        margin: 10
    }
});