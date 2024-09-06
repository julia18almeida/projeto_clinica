import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import {  View, Text, StyleSheet, ScrollView } from "react-native";
import { setStatusBarBackgroundColor } from "expo-status-bar";
 
export default function Layout() {
  return (
    <Tabs
      screenOptions={{
      tabBarStyle: styles.tabBarStyle,
      tabBarActiveTintColor: styles.tabBarActiveTintColor.color,
      tabBarInactiveTintColor: styles.tabBarInactiveTintColor.color,
    }}>
      <Tabs.Screen
        name="home"
        style={styles.fundo}
        options={{
          title: "Home",
          tabBarIcon: ({ focused, size, color }) => {
            return <FontAwesome name="home" size={30} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="consulta"
        options={{
          title: "Consulta",
          tabBarIcon: ({ focused, size, color }) => {
            return <FontAwesome name="calendar" size={30} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="pesquisa"
        options={{
          title: "Pesquisa",
          tabBarIcon: ({ focused, size, color }) => {
            return <FontAwesome name="search" size={30} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",
          tabBarIcon: ({ focused, size, color }) => {
            return <FontAwesome name="user" size={30} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
 
const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "#003366",
  },
  tabBarActiveTintColor: {
    color: "#339CFF",
  },
  tabBarInactiveTintColor: {
    color: "#ffffff",
  },
 
 
})
 
 