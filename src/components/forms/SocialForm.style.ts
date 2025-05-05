export const styles = {
    scrollContainer: {
        paddingHorizontal: 100,
        paddingBottom: 100,
    },
    container: {
      flex: 1,
      paddingTop: 20,
    },
    title: { 
        lineHeight: 20,
      fontSize: 28,
      color: '#6A5430',
      marginBottom: 8,
    },
    subtitle: {
        textAlign: 'center' as const,
        color: '#FF0000',
      fontSize: 14,
      marginBottom: 30,
    },
    inputContainer: {
      marginBottom: 25,
    },
    platformHeader: {
      flexDirection: 'row' as const,
      alignItems: 'center' as const,
      marginBottom: 8,
    },
    platformName: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600' as const,
      marginLeft: 10,
    },
    icon: {
      
    },
    input: {
      backgroundColor: 'rgba(78, 77, 77, .65)',
      color: '#fff',
      padding: 15,
      borderRadius: 50,
    },
    inputFilled: {
      borderColor: '#e94560',
    },
    inputError: {
      borderColor: '#ff4757',
    },
    connectButton: {
      position: 'absolute' as const,
      right: 10,
      top: 45,
      backgroundColor: '#252f3e',
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 5,
    },
    connectButtonText: {
      color: '#fff',
      fontSize: 12,
    },
    errorText: {
      color: '#ff4757',
      fontSize: 12,
      marginTop: 5,
    },
    buttonContainer: {
      flexDirection: 'row' as const,
      justifyContent: 'space-between' as const,
      marginTop: 20,
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
  }