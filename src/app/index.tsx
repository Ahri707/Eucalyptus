import { View, Text, StyleSheet, TextInput, StatusBar, Alert  } from "react-native"
import { Button } from "../components/button"
import { Input } from "../components/input"
import { router } from "expo-router"
import * as SystemUI from 'expo-system-ui'
import React, { useEffect } from 'react'

SystemUI.setBackgroundColorAsync("#efeae4");

export default function Index() {
    function handleLogin(){
        router.navigate("/loginscreen")
    }
    function handleSignUp(){
        router.navigate("/signupscreen");
    }
    return (
        <View style={styles.container}>
                
            <StatusBar backgroundColor="#efeae4" barStyle="light-content" />
            <Text style={styles.title}> Olá, seja bem vindo </Text>
            <Input onChangeText={(text) => console.log(text)}/>

            
                <View style={styles.buttonContainer}>
                    <Button title="Faça login" onPress={handleLogin} />
                    <Button title="Cadastre-se" onPress={handleSignUp} style={{ backgroundColor: "#595B5A" }}/>
                </View>
            


        </View>
    )
}



       

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 32,
        backgroundColor: "#efeae4",
        justifyContent: "space-between",
        gap: 16,
    },
    title: {
        color: "#000",
        fontSize: 30,
        fontWeight: "600",
        marginVertical: 80,
        borderColor: "black",


    },
      buttonContainer: {
        gap: 15,
    },
    
 
})


