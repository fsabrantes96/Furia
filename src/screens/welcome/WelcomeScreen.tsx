import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types/navigation";
import { StackNavigationProp } from "@react-navigation/stack";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./WelcomeScreen.style";
import icons from "../../constants/icons";
import { FuriaText } from "../../components/FuriaText";

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

const WelcomeScreen = () => {
    const navigation = useNavigation<WelcomeScreenNavigationProp>();

    return (
        <ImageBackground source={icons.bg} resizeMode="cover" style={styles.fundo}>
            <FuriaText style={styles.slogan}>Mais que torcer, é fazer parte. Viva a FURIA de dentro, com quem joga por você.</FuriaText>
            <View style={styles.textContainer}>
                <Text style={styles.textAccess}>ENTRAR COM A CONTA <Text style={styles.link} onPress={() => navigation.navigate('Login')}>CLIQUE AQUI!</Text></Text>
                <Text style={styles.textRegister}>OU CADASTRE-SE <Text style={styles.link} onPress={() => navigation.navigate('Register')}>AQUI!</Text></Text>
            </View>
        </ImageBackground>
    );
}

export default WelcomeScreen;