import React, { useState } from 'react';
import {
  View,
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Alert, 
  Image, 
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { DocumentsData } from '../../types/registrationTypes';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './DocumentsForm.style';
import { FuriaText } from '../FuriaText';

interface DocumentsFormProps {
  initialData: DocumentsData;
  onSubmit: (data: DocumentsData) => void;
  onBack: () => void;
}

const DocumentsForm: React.FC<DocumentsFormProps> = ({ initialData, onSubmit, onBack }) => {
  const [documentUri, setDocumentUri] = useState(initialData.documentUri || '');
  const [selfieUri, setSelfieUri] = useState(initialData.selfieUri || '');

  const pickDocument = async (source: 'camera' | 'gallery') => {
    try {
      let result;

      if (source === 'camera') {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permissão necessária', 'Precisamos da permissão para acessar sua câmera');
          return;
        }
        result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 0.7,
        });
      } else {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permissão necessária', 'Precisamos da permissão para acessar sua galeria');
          return;
        }
        result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 0.7,
        });
      }

      if (!result.canceled && result.assets && result.assets.length > 0) {
        return result.assets[0].uri;
      }
    } catch (error) {
      console.error('Erro ao selecionar imagem:', error);
      Alert.alert('Erro', 'Não foi possível selecionar a imagem');
    }
    return null;
  };

  const handleDocumentUpload = async (type: 'document' | 'selfie') => {
    Alert.alert(
      'Selecionar documento',
      'Como deseja enviar seu documento?',
      [
        {
          text: 'Tirar foto',
          onPress: async () => {
            const uri = await pickDocument('camera');
            if (uri) {
              type === 'document' ? setDocumentUri(uri) : setSelfieUri(uri);
            }
          },
        },
        {
          text: 'Escolher da galeria',
          onPress: async () => {
            const uri = await pickDocument('gallery');
            if (uri) {
              type === 'document' ? setDocumentUri(uri) : setSelfieUri(uri);
            }
          },
        },
        {
          text: 'Cancelar',
          style: 'cancel',
        },
      ]
    );
  };

  const handleSubmit = () => {
    onSubmit({
      documentUri,
      selfieUri,
    });
  };

  const isFormValid = documentUri !== '' && selfieUri !== '';

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
          <Text style={styles.subtitle}>*Esses dados serão usados apenas para validação de identidade conforme LGPD.</Text>

          <View style={styles.uploadSection}>
            <FuriaText style={styles.uploadTitle}>Documento de Identificação</FuriaText>
            <Text style={styles.uploadDescription}>
              Envie uma foto do seu RG, CNH ou outro documento oficial com foto
            </Text>

            {documentUri ? (
              <View style={styles.previewContainer}>
                <Image source={{ uri: documentUri }} style={styles.imagePreview} />
                <TouchableOpacity
                  style={styles.changeButton}
                  onPress={() => handleDocumentUpload('document')}
                >
                  <Text style={styles.changeButtonText}>Alterar</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
                style={styles.uploadButton}
                onPress={() => handleDocumentUpload('document')}
              >
                <MaterialIcons name="cloud-upload" size={24} color="#6A5430" />
                <Text style={styles.uploadButtonText}>Enviar Documento</Text>
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.uploadSection}>
            <FuriaText style={styles.uploadTitle}>Selfie com documento</FuriaText>
            <Text style={styles.uploadDescription}>
              Tire uma selfie segurando o documento (rosto e documento visíveis)
            </Text>

            {selfieUri ? (
              <View style={styles.previewContainer}>
                <Image source={{ uri: selfieUri }} style={styles.imagePreview} />
                <TouchableOpacity
                  style={styles.changeButton}
                  onPress={() => handleDocumentUpload('selfie')}
                >
                  <Text style={styles.changeButtonText}>Alterar</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
                style={styles.uploadButton}
                onPress={() => handleDocumentUpload('selfie')}
              >
                <MaterialIcons name="camera-alt" size={24} color="#6A5430" />
                <Text style={styles.uploadButtonText}>Tirar Selfie</Text>
              </TouchableOpacity>
            )}
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
              <Text style={styles.buttonText}>Próximo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>

  );
};

export default DocumentsForm;