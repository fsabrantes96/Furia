import React from "react";
import { View, Text } from "react-native";
import { styles } from "../components/RegistrationStepper.style";

type Step = {
    title: string;
    completed: boolean;
    active: boolean;
};

type RegistrationStepperProps = {
    steps: Step[];
    currentStep: number;
};

const RegistrationStepper: React.FC<RegistrationStepperProps> = ({ steps, currentStep }) => {
    return(
        <View style={styles.container}>
            {steps.map((step, index) => (
                <React.Fragment key={index}>
                    <View style={styles.stepContainer}>
                        <View style={[
                            styles.stepCircle,
                            step.active && styles.active,
                            step.completed && styles.completedStep
                        ]}>
                            {step.completed ? (
                                <Text style={styles.stepText}>✓</Text>
                            ) : (
                                <Text style={styles.stepText}>{index + 1}</Text>
                            )}
                        </View>
                        <Text style={[
                            styles.stepTitle,
                            step.active && styles.activeTitle,
                            step.completed && styles.completedTitle
                        ]}>
                            {step.title}
                        </Text>
                    </View>
                    {index < steps.length - 1 && (
                        <View style={[
                            styles.connector,
                            step.completed && styles.completedConnector
                        ]} />
                    )}
                </React.Fragment>
            ))}
        </View>
    );
};

export default RegistrationStepper;