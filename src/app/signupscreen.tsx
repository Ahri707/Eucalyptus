import { View, Text, StyleSheet } from "react-native";

export default function SignUp(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Sign Up </Text>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
})