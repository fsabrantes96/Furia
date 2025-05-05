import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  FlatList,
} from 'react-native';
import { InterestsData } from '../../types/registrationTypes';
import { styles } from './InterestForm.style';
import { FuriaText } from '../FuriaText';

interface InterestsFormProps {
  initialData: InterestsData;
  onSubmit: (data: InterestsData) => void;
  onBack: () => void;
}

const teams = ['FURIA', 'MIBR', 'paiN', 'LOUD', 'Vivo Keyd', 'INTZ', 'Team oNe', 'Red Canids Kalunga', 'SG Esports', 'Imperial'];
const games = ['CS:GO', 'Valorant', 'League of Legends', 'Dota 2', 'Fortnite'];

const InterestsForm: React.FC<InterestsFormProps> = ({ initialData, onSubmit, onBack }) => {
  const [selectedTeams, setSelectedTeams] = useState<string[]>(initialData.teams || []);
  const [selectedGames, setSelectedGames] = useState<string[]>(initialData.games || []);
  const [customGame, setCustomGame] = useState(initialData.customGame || '');
  const [participatesCommunity, setParticipatesCommunity] = useState(initialData.participatesCommunity || false);
  const [communityName, setCommunityName] = useState(initialData.communityName || '');

  const toggleTeam = (team: string) => {
    setSelectedTeams(prev =>
      prev.includes(team)
        ? prev.filter(t => t !== team)
        : [...prev, team]
    );
  };

  const toggleGame = (game: string) => {
    setSelectedGames(prev =>
      prev.includes(game)
        ? prev.filter(g => g !== game)
        : [...prev, game]
    );
  };

  const handleSubmit = () => {
    onSubmit({
      teams: selectedTeams,
      games: selectedGames,
      customGame: customGame.trim() !== '' ? customGame : undefined,
      participatesCommunity,
      communityName: participatesCommunity ? communityName : undefined,
    });
  };

  const isFormValid = selectedTeams.length > 0 && selectedGames.length > 0;

  const renderTeamItem = ({ item }: { item: string }) => (
    <View style={styles.checkboxContainer}>
      <TouchableOpacity
        style={[
          styles.customCheckbox,
          selectedTeams.includes(item) && styles.customCheckboxChecked
        ]}
        onPress={() => toggleTeam(item)}
      >
        {selectedTeams.includes(item) && <Text style={styles.checkmark}>✓</Text>}
      </TouchableOpacity>
      <Text style={styles.label}>{item}</Text>
    </View>
  );

  const renderGameItem = ({ item }: { item: string }) => (
    <View style={styles.checkboxContainer}>
      <TouchableOpacity
        style={[
          styles.customCheckbox,
          selectedGames.includes(item) && styles.customCheckboxChecked
        ]}
        onPress={() => toggleGame(item)}
      >
        {selectedGames.includes(item) && <Text style={styles.checkmark}>✓</Text>}
      </TouchableOpacity>
      <Text style={styles.label}>{item}</Text>
    </View>
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
        <FuriaText style={styles.sectionTitle}>Times Favoritos</FuriaText>
        <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: '#6A5430', padding: 20, marginBottom: 20 }}>
          <View style={{ flex: 1 }}>
            <FlatList
              data={teams.slice(0, 5)}
              renderItem={renderTeamItem}
              keyExtractor={(item) => item}
              scrollEnabled={false}
            />
          </View>
          <View style={{ flex: 1 }}>
            <FlatList
              data={teams.slice(5)}
              renderItem={renderTeamItem}
              keyExtractor={(item) => item}
              scrollEnabled={false}
            />
          </View>
        </View>

        <FuriaText style={styles.sectionTitle}>Jogos que Acompanha</FuriaText>
        <View style={{ borderWidth: 1, borderColor: '#6A5430', padding: 20, marginBottom: 20 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <FlatList
                data={games.slice(0, 3)}
                renderItem={renderGameItem}
                keyExtractor={(item) => item}
                scrollEnabled={false}
              />
            </View>
            <View style={{ flex: 1 }}>
              <FlatList
                data={games.slice(3)}
                renderItem={renderGameItem}
                keyExtractor={(item) => item}
                scrollEnabled={false}
              />
            </View>
          </View>
          <TextInput
            style={styles.input}
            value={customGame}
            onChangeText={setCustomGame}
            placeholder="Outro jogo (especifique)"
            placeholderTextColor="#666"
          />
        </View>

        <FuriaText style={styles.sectionTitle}>Participa de Comunidades?</FuriaText>
        <View style={{ borderWidth: 1, borderColor: '#6A5430', padding: 20, marginBottom: 20 }}>
          <View style={styles.radioContainer}>
            <TouchableOpacity
              style={[styles.radioButton, participatesCommunity && styles.radioSelected]}
              onPress={() => setParticipatesCommunity(true)}
            >
              <Text style={styles.radioText}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.radioButton, !participatesCommunity && styles.radioSelected]}
              onPress={() => setParticipatesCommunity(false)}
            >
              <Text style={styles.radioText}>Não</Text>
            </TouchableOpacity>
          </View>
          {participatesCommunity && (
            <TextInput
              style={styles.input}
              value={communityName}
              onChangeText={setCommunityName}
              placeholder="Nome da comunidade"
              placeholderTextColor="#666"
            />
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default InterestsForm;