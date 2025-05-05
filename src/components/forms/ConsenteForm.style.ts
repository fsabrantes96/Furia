export const styles = {
    scrollContainer: {
        flex: 1,
        paddingHorizontal: 100,
        paddingBottom: 100,
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold' as const,
      color: '#fff',
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 14,
      color: '#a5a5a5',
      marginBottom: 30,
    },
    fullConsentContainer: {
      flexDirection: 'row' as const,
      alignItems: 'center' as const,
      marginBottom: 30,
      padding: 15,
      backgroundColor: '#16213e',
      borderRadius: 8,
    },
    fullConsentText: {
      color: '#fff',
      fontWeight: 'bold' as const,
      fontSize: 16,
      marginLeft: 15,
    },
    consentItem: {
      flexDirection: 'row' as const,
      alignItems: 'flex-start' as const,
      marginBottom: 25,
    },
    consentTextContainer: {
      flex: 1,
      marginLeft: 15,
    },
    consentTitle: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600' as const,
      marginBottom: 5,
    },
    consentDescription: {
      color: '#a5a5a5',
      fontSize: 14,
      lineHeight: 20,
    },
    linkText: {
      color: '#e94560',
      textDecorationLine: 'underline' as const,
    },
    buttonContainer: {
      flexDirection: 'row' as const,
      justifyContent: 'space-between' as const,
      marginTop: 30,
      marginBottom: 20,
    },
    backButton: {
      backgroundColor: '#6A5430',
      padding: 15,
      borderRadius: 8,
      flex: 1,
      marginRight: 10,
      alignItems: 'center' as const,
    },
    nextButton: {
      backgroundColor: '#6A5430',
      padding: 15,
      borderRadius: 8,
      flex: 1,
      alignItems: 'center' as const,
    },
    disabledButton: {
      backgroundColor: '#96876E',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold' as const,
    },
    checkbox: {
      width: 24,
      height: 24,
    },
  }