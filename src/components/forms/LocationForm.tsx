import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import axios from 'axios';
import { AddressData as AddressDataType } from '../../types/registrationTypes';
import { styles } from './LocationForm.style';
import { maskCEP } from '../../utils/masks';

type AddressData = {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  number: string;
};

type LocationFormProps = {
  initialData?: Partial<AddressData>;
  onSubmit: (data: AddressData) => void;
  onBack: () => void;
};

const LocationForm: React.FC<LocationFormProps> = ({ onSubmit, onBack }) => {
  const [address, setAddress] = useState<AddressData>({
    cep: '',
    state: '',
    city: '',
    neighborhood: '',
    street: '',
    number: '',
  });
  const [loading, setLoading] = useState(false);
  const [cepError, setCepError] = useState('');

  const handleCepChange = (text: string) => {
    const maskedText = maskCEP(text); // Aplica a máscara
    setAddress({ ...address, cep: maskedText });
  };

  const handleCepBlur = async () => {
    const cleanCEP = address.cep.replace(/\D/g, '');

    if (cleanCEP.length !== 8) {
      setCepError('CEP deve conter 8 dígitos');
      return;
    }

    setLoading(true);
    setCepError('');

    try {
      const response = await axios.get(`http://localhost:3001/api/cep/${cleanCEP}`);

      setAddress(prev => ({
        ...prev,
        state: response.data.state,
        city: response.data.city,
        neighborhood: response.data.neighborhood,
        street: response.data.street,
      }));
    } catch (error) {
      setCepError('CEP não encontrado ou erro na consulta');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    onSubmit(address);
  };

  const isFormValid = () => {
    return (
      address.cep.trim() !== '' &&
      address.state.trim() !== '' &&
      address.city.trim() !== '' &&
      address.neighborhood.trim() !== '' &&
      address.street.trim() !== '' &&
      address.number.trim() !== ''
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.cepContainer}>
          <TextInput
            style={[styles.input, styles.cepInput]}
            value={address.cep}
            onChangeText={handleCepChange} // Usa a função com máscara
            onBlur={handleCepBlur}
            placeholder="CEP"
            placeholderTextColor="#666"
            keyboardType="numeric"
            maxLength={9} // 8 dígitos + hífen
          />
          {loading && <ActivityIndicator style={styles.loading} color="#e94560" />}
        </View>
        {cepError && <Text style={styles.errorText}>{cepError}</Text>}

        <TextInput
          style={styles.input}
          value={address.state}
          onChangeText={(text) => setAddress({ ...address, state: text })}
          placeholder="Estado"
          placeholderTextColor="#666"
          editable={!loading}
        />

        <TextInput
          style={styles.input}
          value={address.city}
          onChangeText={(text) => setAddress({ ...address, city: text })}
          placeholder="Cidade"
          placeholderTextColor="#666"
          editable={!loading}
        />

        <TextInput
          style={styles.input}
          value={address.neighborhood}
          onChangeText={(text) => setAddress({ ...address, neighborhood: text })}
          placeholder="Bairro"
          placeholderTextColor="#666"
          editable={!loading}
        />

        <TextInput
          style={styles.input}
          value={address.street}
          onChangeText={(text) => setAddress({ ...address, street: text })}
          placeholder="Rua"
          placeholderTextColor="#666"
          editable={!loading}
        />

        <TextInput
          style={styles.input}
          value={address.number}
          onChangeText={(text) => setAddress({ ...address, number: text })}
          placeholder="Número"
          placeholderTextColor="#666"
          keyboardType="numeric"
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.backButton]}
            onPress={onBack}
          >
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, !isFormValid() && styles.disabledButton]}
            onPress={handleSubmit}
            disabled={!isFormValid()}
          >
            <Text style={styles.buttonText}>Próximo</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>

  );
};

export default LocationForm;