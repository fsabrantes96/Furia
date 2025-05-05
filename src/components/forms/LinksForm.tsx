import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView,
  Platform, Alert
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinksData } from '../../types/registrationTypes';
import { styles } from './LinkForm.style';
import { FuriaText } from '../FuriaText';

interface LinksFormProps {
  initialData: LinksData;
  onSubmit: (data: LinksData) => void;
  onBack: () => void;
}

const LinksForm: React.FC<LinksFormProps> = ({ initialData, onSubmit, onBack }) => {
  const [links, setLinks] = useState<string[]>(initialData.profileLinks || ['']);
  const [isValidating, setIsValidating] = useState(false);

  const handleLinkChange = (text: string, index: number) => {
    const newLinks = [...links];
    newLinks[index] = text;
    setLinks(newLinks);
  };

  const addLinkField = () => {
    if (links.length < 5) {
      setLinks([...links, '']);
    }
  };

  const removeLinkField = (index: number) => {
    if (links.length > 1) {
      const newLinks = links.filter((_, i) => i !== index);
      setLinks(newLinks);
    }
  };

  const validateLinks = async () => {
    setIsValidating(true);
    // Simulação de validação por IA (implementação real seria via API)
    const isValid = links.some(link => link.trim() !== '');

    await new Promise(resolve => setTimeout(resolve, 1000)); // Simula tempo de processamento

    setIsValidating(false);
    return isValid;
  };

  const handleSubmit = async () => {
    const isValid = await validateLinks();
    if (isValid) {
      onSubmit({
        profileLinks: links.filter(link => link.trim() !== '')
      });
    } else {
      Alert.alert('Validação necessária', 'Por favor, adicione pelo menos um link válido');
    }
  };

  const isFormValid = links.some(link => link.trim() !== '');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <FuriaText style={styles.title}>Você possui perfis ou páginas relacionadas a e<Text style={{fontFamily: 'Arial'}}>-</Text>sports?</FuriaText>
        <Text style={styles.subtitle}>
          Adicione links de seus perfis em plataformas de e-sports para validação
        </Text>

        {links.map((link, index) => (
          <View key={index} style={styles.linkContainer}>
            <TextInput
              style={[
                styles.input,
                link.trim() !== '' && styles.validInput,
                isValidating && styles.validatingInput
              ]}
              value={link}
              onChangeText={(text) => handleLinkChange(text, index)}
              placeholder="https://exemplo.com/seuperfil"
              placeholderTextColor="#666"
              keyboardType="url"
              autoCapitalize="none"
            />
            {links.length > 1 && (
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeLinkField(index)}
              >
                <MaterialIcons name="remove-circle" size={24} color="#ff4757" />
              </TouchableOpacity>
            )}
          </View>
        ))}

        {links.length < 5 && (
          <TouchableOpacity style={styles.addButton} onPress={addLinkField}>
            <MaterialIcons name="add-circle" size={24} color="#6A5430" />
            <Text style={styles.addButtonText}>Adicionar outro link</Text>
          </TouchableOpacity>
        )}

        <View style={styles.validationContainer}>
          {isValidating && (
            <>
              <MaterialIcons name="verified" size={20} color="#4CAF50" />
              <Text style={styles.validationText}>Validando links com IA...</Text>
            </>
          )}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.backButton} onPress={onBack}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.nextButton, (!isFormValid || isValidating) && styles.disabledButton]}
            onPress={handleSubmit}
            disabled={!isFormValid || isValidating}
          >
            {isValidating ? (
              <Text style={styles.buttonText}>Validando...</Text>
            ) : (
              <Text style={styles.buttonText}>Próximo</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>

  );
};

export default LinksForm;