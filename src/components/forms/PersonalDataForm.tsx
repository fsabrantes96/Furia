import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert
} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';
import { styles } from "./PersonalDataForm.style";
import { PersonalData } from "../../types/registrationTypes";
import { maskCPF } from "../../utils/masks";
import { validateEmail } from "../../utils/validations";

interface PersonalDataFormProps {
  initialData?: Partial<PersonalData>;
  onSubmit: (data: PersonalData) => void;
  onBack: () => void;
}

const PersonalDataForm: React.FC<PersonalDataFormProps> = ({
  initialData = {},
  onSubmit,
  onBack
}) => {
  const [name, setName] = useState(initialData.name || '');
  const [cpf, setCpf] = useState(initialData.cpf || '');
  const [birthDate, setBirthDate] = useState<Date>(initialData.birthDate || new Date());
  const [gender, setGender] = useState(initialData.gender || '');
  const [email, setEmail] = useState(initialData.email || '');
  const [password, setPassword] = useState(initialData.password || '');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const genders = [
    { label: 'Masculino', value: 'male' },
    { label: 'Feminino', value: 'female' },
    { label: 'Não-Binário', value: 'non_binary' },
    { label: 'Prefiro não informar', value: 'not_informed' },
  ];

  const handleCpfChange = (text: string) => {
    const maskedText = maskCPF(text);
    setCpf(maskedText);
  };

  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const today = new Date();
      const minDate = new Date();
      minDate.setFullYear(today.getFullYear() - 12); // Mínimo 12 anos

      if (selectedDate > minDate) {
        Alert.alert("Idade inválida", "Você deve ter pelo menos 12 anos para se cadastrar");
        return;
      }
      setBirthDate(selectedDate);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!name.trim() || name.split(' ').length < 2) {
      newErrors.name = "Digite seu nome completo";
    }

    if (cpf.replace(/\D/g, '').length !== 11) {
      newErrors.cpf = "CPF inválido";
    }

    if (!validateEmail(email)) {
      newErrors.email = "E-mail inválido";
    }

    if (password.length < 6) {
      newErrors.password = "Senha deve ter no mínimo 6 caracteres";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "As senhas não coincidem";
    }

    if (!gender) {
      newErrors.gender = "Selecione um gênero";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit({
        name,
        cpf: cpf.replace(/\D/g, ''),
        birthDate,
        gender,
        email,
        password,
      });
    }
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
        <View>
          {/* Nome Completo */}
          {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
          <TextInput
            style={[styles.input, errors.name && styles.inputError]}
            value={name}
            onChangeText={setName}
            placeholder="Digite seu nome completo"
            placeholderTextColor="#666"
          />


          {/* CPF */}
          <TextInput
            style={[styles.input, errors.cpf && styles.inputError]}
            value={cpf}
            onChangeText={handleCpfChange}
            placeholder="Digite seu CPF"
            placeholderTextColor="#666"
            keyboardType="numeric"
            maxLength={14}
          />
          {errors.cpf && <Text style={styles.errorText}>{errors.cpf}</Text>}

          {/* Data de Nascimento */}
          <Text style={styles.label}>Data de Nascimento</Text>
          {errors.birthDate && <Text style={styles.errorText}>{errors.birthDate}</Text>}
          <TouchableOpacity
            style={[styles.dateInput, errors.birthDate && styles.inputError]}
            onPress={() => setShowDatePicker(true)}
          >
            <Text style={styles.dateText}>
              {birthDate.toLocaleDateString('pt-BR')}
            </Text>
          </TouchableOpacity>


          {showDatePicker && (
            <DateTimePicker
              value={birthDate}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
              onChange={handleDateChange}
              maximumDate={new Date(new Date().setFullYear(new Date().getFullYear() - 12))}
              locale="pt-BR"
            />
          )}

          {/* Gênero */}
          {errors.gender && <Text style={styles.errorText}>{errors.gender}</Text>}
          <View style={[styles.pickerContainer, errors.gender && styles.inputError]}>
            <RNPickerSelect
              onValueChange={(value) => setGender(value)}
              items={genders}
              placeholder={{ label: 'Selecione seu gênero', value: null }}
              style={pickerSelectStyles}
              value={gender}
            />
          </View>


          {/* Email */}
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
          <TextInput
            style={[styles.input, errors.email && styles.inputError]}
            value={email}
            onChangeText={setEmail}
            placeholder="Digite seu email"
            placeholderTextColor="#666"
            keyboardType="email-address"
            autoCapitalize="none"
          />


          {/* Senha */}
          {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
          <TextInput
            style={[styles.input, errors.password && styles.inputError]}
            value={password}
            onChangeText={setPassword}
            placeholder="Digite sua senha"
            placeholderTextColor="#666"
            secureTextEntry
          />


          {/* Confirmar Senha */}
          {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
          <TextInput
            style={[styles.input, errors.confirmPassword && styles.inputError]}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirme sua senha"
            placeholderTextColor="#666"
            secureTextEntry
          />


          {/* Botão */}
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Próximo</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    color: '#fff',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  inputAndroid: {
    color: '#fff',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
});

export default PersonalDataForm;