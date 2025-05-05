import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { EventsData } from '../../types/registrationTypes';
import { styles } from './EventsForm.style';
import { FuriaText } from '../FuriaText';

interface EventsFormProps {
  initialData: EventsData;
  onSubmit: (data: EventsData) => void;
  onBack: () => void;
}

const productTypes = [
  'Camiseta oficial',
  'Ingresso para evento',
  'Colecionáveis',
  'Assinatura premium',
  'Periféricos'
];

const EventsForm: React.FC<EventsFormProps> = ({ initialData, onSubmit, onBack }) => {
  const [eventName, setEventName] = useState(initialData.eventName || '');
  const [selectedProducts, setSelectedProducts] = useState<string[]>(initialData.products?.map(p => p.type) || []);
  const [customProduct, setCustomProduct] = useState(
    initialData.products?.find(p => p.type === 'other')?.customProduct || ''
  );
  const [amountSpent, setAmountSpent] = useState(
    initialData.products?.find(p => p.type === 'other')?.amountSpent?.toString() || ''
  );

  const toggleProduct = (product: string) => {
    setSelectedProducts(prev =>
      prev.includes(product)
        ? prev.filter(p => p !== product)
        : [...prev, product]
    );
  };

  const handleSubmit = () => {
    const baseProducts = selectedProducts
      .filter(p => p !== 'other')
      .map(type => ({ type }));

    // Inclui o produto customizado apenas se houver valor digitado
    const completeProducts = [
      ...baseProducts,
      ...(customProduct.trim() ? [{ type: 'other', customProduct, amountSpent: Number(amountSpent) || 0 }] : [])
    ];

    onSubmit({
      eventName,
      products: completeProducts
    });
  };

  const isFormValid = eventName.trim() !== '' && selectedProducts.length > 0;

  const renderCheckbox = (item: string) => (
    <TouchableOpacity
      key={item}
      style={styles.checkboxContainer}
      onPress={() => toggleProduct(item)}
    >
      <View style={[styles.customCheckbox, selectedProducts.includes(item) && styles.customCheckboxChecked]}>
        {selectedProducts.includes(item) && <Text style={styles.checkmark}>✓</Text>}
      </View>
      <Text style={styles.label}>{item}</Text>
    </TouchableOpacity>
  );

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
          <FuriaText style={styles.sectionTitle}>Quais eventos de e<Text style={{ fontFamily: 'Arial' }}>-</Text>sports você participou no último ano?</FuriaText>
          <TextInput
            style={styles.input}
            value={eventName}
            onChangeText={setEventName}
            placeholder="Nome do evento"
            placeholderTextColor="#666"
          />

          <FuriaText style={styles.sectionTitle}>Produtos comprados:</FuriaText>
          {/* Inputs sempre visíveis (removida a condicional) */}
          <View style={{borderWidth: 1, borderColor: '#6A5430', padding: 20}}>
            {productTypes.map(renderCheckbox)}
            {renderCheckbox('other')}
            <TextInput
              style={styles.input}
              value={customProduct}
              onChangeText={setCustomProduct}
              placeholder="Especifique o produto (opcional)"
              placeholderTextColor="#666"
            />
            <TextInput
              style={styles.input}
              value={amountSpent}
              onChangeText={setAmountSpent}
              placeholder="Valor gasto (R$) (opcional)"
              placeholderTextColor="#666"
              keyboardType="numeric"
            />

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

export default EventsForm;