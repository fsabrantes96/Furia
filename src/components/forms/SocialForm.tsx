import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TextInput, TouchableOpacity, Linking, ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SocialData } from '../../types/registrationTypes';
import { styles } from './SocialForm.style';
import { FuriaText } from '../FuriaText';

interface SocialFormProps {
  initialData: SocialData;
  onSubmit: (data: SocialData) => void;
  onBack: () => void;
}

const socialPlatforms = [
  { id: 'twitter', name: 'X (Twitter)', icon: 'twitter' },
  { id: 'instagram', name: 'Instagram', icon: 'instagram' },
  { id: 'twitch', name: 'Twitch', icon: 'twitch' },
  { id: 'discord', name: 'Discord', icon: 'discord' },
];

const SocialForm: React.FC<SocialFormProps> = ({ initialData, onSubmit, onBack }) => {
  const [socialData, setSocialData] = useState<SocialData>(initialData || {});
  const [validation, setValidation] = useState<Record<string, boolean>>({});

  const handleChange = (platform: string, value: string) => {
    setSocialData(prev => ({
      ...prev,
      [platform]: value
    }));

    // Validação básica
    setValidation(prev => ({
      ...prev,
      [platform]: value.trim() !== '' && isValidUsername(platform, value)
    }));
  };

  const isValidUsername = (platform: string, username: string) => {
    const patterns = {
      twitter: /^[a-zA-Z0-9_]{1,15}$/,
      instagram: /^[a-zA-Z0-9._]{1,30}$/,
      twitch: /^[a-zA-Z0-9_]{4,25}$/,
      discord: /^.{3,32}#[0-9]{4}$/
    };

    return patterns[platform as keyof typeof patterns].test(username);
  };

  const handleSubmit = () => {
    onSubmit(socialData);
  };

  const connectSocial = async (platform: string) => {
    const urls = {
      twitter: 'https://twitter.com/',
      instagram: 'https://instagram.com/',
      twitch: 'https://twitch.tv/',
      discord: 'https://discord.com/'
    };

    try {
      await Linking.openURL(urls[platform as keyof typeof urls]);
    } catch (error) {
      console.error(`Failed to open ${platform}:`, error);
    }
  };

  const isFormValid = Object.values(socialData).some(value => value?.trim() !== '');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={[styles.scrollContainer, { flexGrow: 1 }]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <FuriaText style={styles.title}>Conecte suas Redes Sociais</FuriaText>
          <Text style={styles.subtitle}>
            Permita acesso para identificarmos seu envolvimento com e-sports.
          </Text>

          {socialPlatforms.map(platform => (
            <View key={platform.id} style={styles.inputContainer}>
              <View style={styles.platformHeader}>
                <MaterialCommunityIcons
                  name={platform.icon as any}
                  size={24}
                  color="#6A5430"
                  style={styles.icon}
                />
                <Text style={styles.platformName}>{platform.name}</Text>
              </View>

              <TextInput
                style={[
                  styles.input,
                  socialData[platform.id as keyof SocialData] && styles.inputFilled,
                  validation[platform.id] === false && styles.inputError
                ]}
                value={socialData[platform.id as keyof SocialData] || ''}
                onChangeText={(text) => handleChange(platform.id, text)}
                placeholder={`Seu @ do ${platform.name}`}
                placeholderTextColor="#666"
                autoCapitalize="none"
              />

              <TouchableOpacity
                style={styles.connectButton}
                onPress={() => connectSocial(platform.id)}
              >
                <Text style={styles.connectButtonText}>Conectar</Text>
              </TouchableOpacity>

              {validation[platform.id] === false && (
                <Text style={styles.errorText}>
                  Formato inválido para {platform.name}
                </Text>
              )}
            </View>
          ))}
          <Text style={styles.subtitle}>(O app solicitará permissões de leitura de dados públicos apenas)</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.backButton} onPress={onBack}>
              <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.nextButton, !isFormValid && styles.disabledButton]}
              onPress={handleSubmit}
              disabled={!isFormValid}
            >
              <Text style={styles.buttonText}>Próximo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>

  );
};

export default SocialForm;