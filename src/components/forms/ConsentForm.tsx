import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import Checkbox from 'expo-checkbox';  // <- substituição aqui
import { ConsentsData } from '../../types/registrationTypes';
import { styles } from './ConsenteForm.style';

interface ConsentFormProps {
  initialData: ConsentsData;
  onSubmit: (data: ConsentsData) => void;
  onBack: () => void;
}

const ConsentForm: React.FC<ConsentFormProps> = ({ initialData, onSubmit, onBack }) => {
  const [consents, setConsents] = useState<ConsentsData>(initialData || {
    dataUsage: false,
    socialAnalysis: false,
    aiProcessing: false
  });

  const [allChecked, setAllChecked] = useState(false);

  const handleConsentChange = (key: keyof ConsentsData) => {
    const newConsents = {
      ...consents,
      [key]: !consents[key]
    };
    setConsents(newConsents);
    setAllChecked(Object.values(newConsents).every(v => v));
  };

  const toggleAllConsents = () => {
    const newValue = !allChecked;
    setConsents({
      dataUsage: newValue,
      socialAnalysis: newValue,
      aiProcessing: newValue
    });
    setAllChecked(newValue);
  };

  const handleSubmit = () => {
    onSubmit(consents);
  };

  const openPrivacyPolicy = () => {
    Linking.openURL('https://www.furia.com/privacy');
  };

  const isFormValid = Object.values(consents).some(v => v);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
          <Text style={styles.title}>Termos e Consentimentos</Text>
          <Text style={styles.subtitle}>
            Por favor, revise e aceite os termos para completar seu cadastro no FURIAHUB
          </Text>

          <View style={styles.fullConsentContainer}>
            <Checkbox
              value={allChecked}
              onValueChange={toggleAllConsents}
              color={allChecked ? '#6A5430' : undefined}
              style={styles.checkbox}
            />
            <Text style={styles.fullConsentText}>Aceitar todos os termos</Text>
          </View>

          <View style={styles.consentItem}>
            <Checkbox
              value={consents.dataUsage}
              onValueChange={() => handleConsentChange('dataUsage')}
              color={consents.dataUsage ? '#6A5430' : undefined}
              style={styles.checkbox}
            />
            <View style={styles.consentTextContainer}>
              <Text style={styles.consentTitle}>
                Uso de dados conforme a LGPD
              </Text>
              <Text style={styles.consentDescription}>
                Autorizo o uso dos meus dados pessoais de acordo com a
                <Text style={styles.linkText} onPress={openPrivacyPolicy}> Política de Privacidade</Text>.
              </Text>
            </View>
          </View>

          <View style={styles.consentItem}>
            <Checkbox
              value={consents.socialAnalysis}
              onValueChange={() => handleConsentChange('socialAnalysis')}
              color={consents.socialAnalysis ? '#6A5430' : undefined}
              style={styles.checkbox}
            />
            <View style={styles.consentTextContainer}>
              <Text style={styles.consentTitle}>
                Análise de redes sociais
              </Text>
              <Text style={styles.consentDescription}>
                Permito que minhas interações em redes sociais conectadas sejam analisadas para fins de engajamento com o time.
              </Text>
            </View>
          </View>

          <View style={styles.consentItem}>
            <Checkbox
              value={consents.aiProcessing}
              onValueChange={() => handleConsentChange('aiProcessing')}
              color={consents.aiProcessing ? '#6A5430' : undefined}
              style={styles.checkbox}
            />
            <View style={styles.consentTextContainer}>
              <Text style={styles.consentTitle}>
                Processamento por IA
              </Text>
              <Text style={styles.consentDescription}>
                Estou ciente que meu conteúdo será avaliado por inteligência artificial para validação e personalização.
              </Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.backButton} onPress={onBack}>
              <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.nextButton, !isFormValid && styles.disabledButton]}
              onPress={handleSubmit}
              disabled={!isFormValid}
            >
              <Text style={styles.buttonText}>Finalizar Cadastro</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>

  );
};

export default ConsentForm;
