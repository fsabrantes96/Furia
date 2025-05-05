export const styles = {
    scrollContainer: {
        paddingHorizontal: 100,
        paddingBottom: 100,
    },
    container: {
      flex: 1,
      paddingTop: 20,
    },
    sectionTitle: {
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold' as const,
      marginBottom: 10,
    },
    subtitle: {
      color: '#FF0000',
      fontSize: 14,
      marginBottom: 30,
      textAlign: 'center' as const
    },
    uploadSection: {
      borderWidth: 1,
      borderColor: '#6A5430',
      padding: 20,
      marginBottom: 30,
    },
    uploadTitle: {
      color: '#6A5430',
      fontSize: 28,
      lineHeight: 20
    },
    uploadDescription: {
      color: '#a5a5a5',
      fontSize: 14,
      marginBottom: 15,
    },
    uploadButton: {
      flexDirection: 'row' as const,
      alignItems: 'center' as const,
      justifyContent: 'center' as const,
      backgroundColor: 'rgba(78, 77, 77, .45)',
      padding: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#6A5430',
      borderStyle: 'dashed' as const,
    },
    uploadButtonText: {
      color: '#6A5430',
      marginLeft: 10,
      fontSize: 16,
      fontWeight: 'bold' as const,
    },
    previewContainer: {
      alignItems: 'center' as const,
    },
    imagePreview: {
      width: '100%' as const,
      height: 200,
      borderRadius: 10,
      marginBottom: 10,
      resizeMode: 'contain' as const,
      backgroundColor: '#16213e',
    },
    changeButton: {
      padding: 10,
      borderRadius: 5,
      backgroundColor: '#16213e',
    },
    changeButtonText: {
      color: '#e94560',
      fontWeight: 'bold' as const,
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
      borderRadius: 5,
      flex: 1,
      marginRight: 10,
      alignItems: 'center' as const,
    },
    nextButton: {
      backgroundColor: '#6A5430',
      padding: 15,
      borderRadius: 5,
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
  };