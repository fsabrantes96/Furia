export const styles = {
    scrollContainer: {
        paddingHorizontal: 100,
        paddingBottom: 100,
    },
    container: {
      flexGrow: 1,
      padding: 20,
    },
    title: {
      fontSize: 28,
      lineHeight: 22,
      color: '#6A5430',
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 14,
      color: '#a5a5a5',
      marginBottom: 30,
    },
    linkContainer: {
      flexDirection: 'row' as const,
      alignItems: 'center' as const,
      marginBottom: 15,
    },
    input: {
      flex: 1,
      backgroundColor: 'rgba(78, 77, 77, .65)',
      color: '#fff',
      padding: 15,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: '#333',
    },
    validInput: {
      borderColor: '#4CAF50',
    },
    validatingInput: {
      borderColor: '#FFC107',
    },
    removeButton: {
      marginLeft: 10,
    },
    addButton: {
      flexDirection: 'row' as const,
      alignItems: 'center' as const,
      marginTop: 10,
      marginBottom: 20,
    },
    addButtonText: {
      color: '#6A5430',
      marginLeft: 10,
      fontWeight: 'bold' as const,
    },
    validationContainer: {
      flexDirection: 'row' as const,
      alignItems: 'center' as const,
      marginBottom: 20,
    },
    validationText: {
      color: '#4CAF50',
      marginLeft: 10,
      fontSize: 14,
    },
    buttonContainer: {
      flexDirection: 'row' as const,
      justifyContent: 'space-between' as const,
      marginTop: 20,
      marginBottom: 30,
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