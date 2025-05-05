import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types/navigation";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { styles } from "../register/RegisterScreen.style";

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;

const LoginScreen = () => {
    const navigation = useNavigation<LoginScreenNavigationProp>();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>
            <Text style={styles.subtitle}>Vamos começar criando sua conta</Text>
        </View>
    )
}

export default LoginScreen;