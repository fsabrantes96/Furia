import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/navigation';
import RegistrationStepper from '../../components/RegistrationStepper';
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg';
import { 
  PersonalDataForm,
  LocationForm,
  InterestsForm,
  EventsForm,
  DocumentsForm,
  SocialForm,
  LinksForm,
  ConsentsForm 
} from '../../components/forms';
import { styles } from "../register/RegisterScreen.style";
import { FuriaText } from "../../components/FuriaText";
import { useNavigation } from '@react-navigation/native';
import { 
  AddressData as AddressDataType, 
  ConsentsData, 
  DocumentsData, 
  EventsData, 
  InterestsData, 
  LinksData, 
  PersonalData, 
  SocialData 
} from '../../types/registrationTypes';

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;

const RegisterScreen = () => {
    const navigation = useNavigation<RegisterScreenNavigationProp>();
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        { title: 'Dados Pessoais', completed: false, active: currentStep === 0 },
        { title: 'Localização', completed: false, active: currentStep === 1 },
        { title: 'Interesses', completed: false, active: currentStep === 2 },
        { title: 'Eventos', completed: false, active: currentStep === 3 },
        { title: 'Documentos', completed: false, active: currentStep === 4 },
        { title: 'Redes Sociais', completed: false, active: currentStep === 5 },
        { title: 'Links', completed: false, active: currentStep === 6 },
        { title: 'Permissões', completed: false, active: currentStep === 7 },
    ];

    const [formData, setFormData] = useState({
        personalData: {} as PersonalData,
        addressData: {} as AddressDataType,
        interestsData: {} as InterestsData,
        eventsData: {} as EventsData,
        documentsData: {} as DocumentsData,
        socialData: {} as SocialData,
        linksData: {} as LinksData,
        consentsData: {} as ConsentsData,
    });

    const handleNextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
    const handlePrevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

    const updateFormData = (step: keyof typeof formData, data: any) => {
        setFormData(prev => ({
            ...prev,
            [step]: data
        }));
        handleNextStep();
    };

    const handleSubmit = () => {
        console.log('Dados completos:', formData);
        // Enviar dados para o backend
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 0:
                return (
                    <PersonalDataForm
                        initialData={formData.personalData}
                        onSubmit={(data) => updateFormData('personalData', data)}
                        onBack={handlePrevStep}
                    />
                );
            case 1:
                return (
                    <LocationForm 
                        initialData={formData.addressData}
                        onSubmit={(data) => updateFormData('addressData', data)}
                        onBack={handlePrevStep}
                    />
                );
            case 2:
                return (
                    <InterestsForm 
                        initialData={formData.interestsData}
                        onSubmit={(data) => updateFormData('interestsData', data)}
                        onBack={handlePrevStep}
                    />
                );
            case 3:
                return (
                    <EventsForm 
                        initialData={formData.eventsData}
                        onSubmit={(data) => updateFormData('eventsData', data)}
                        onBack={handlePrevStep}
                    />
                );
            case 4:
                return (
                    <DocumentsForm 
                        initialData={formData.documentsData}
                        onSubmit={(data) => updateFormData('documentsData', data)}
                        onBack={handlePrevStep}
                    />
                );
            case 5:
                return (
                    <SocialForm 
                        initialData={formData.socialData}
                        onSubmit={(data) => updateFormData('socialData', data)}
                        onBack={handlePrevStep}
                    />
                );
            case 6:
                return (
                    <LinksForm 
                        initialData={formData.linksData}
                        onSubmit={(data) => updateFormData('linksData', data)}
                        onBack={handlePrevStep}
                    />
                );
            case 7:
                return (
                    <ConsentsForm 
                        initialData={formData.consentsData}
                        onSubmit={(data) => {
                            updateFormData('consentsData', data);
                            handleSubmit();
                        }}
                        onBack={handlePrevStep}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            <Svg height="100%" width="100%" style={StyleSheet.absoluteFillObject}>
                <Defs>
                    <RadialGradient
                        id="grad"
                        cx="50%"
                        cy="50%"
                        rx="50%"
                        ry="50%"
                        fx="50%"
                        fy="50%"
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop offset="0%" stopColor="#0D1221" stopOpacity="1" />
                        <Stop offset="100%" stopColor="#000000" stopOpacity="1" />
                    </RadialGradient>    
                </Defs>
                <Rect width="100%" height="100%" fill="url(#grad)" />
            </Svg>
            
            <View style={styles.content}>
                <View style={styles.textTop}>
                    <FuriaText style={styles.title}>TÁ COM FÚRIA?</FuriaText>
                    <FuriaText style={styles.title}>SE CADASTRE</FuriaText>
                </View>
                
                <RegistrationStepper steps={steps} currentStep={currentStep} />
                {renderStepContent()}
            </View>
        </View>
    );
};

export default RegisterScreen;