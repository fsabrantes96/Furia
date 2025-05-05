export const styles = {
     scrollContainer: {
        flexGrow: 1,
        paddingHorizontal: 100,
        paddingBottom: 100
      },
      label: {
        color: '#fff',
        marginBottom: 8,
        fontSize: 14,
      },
      input: {
        width: "100%" as const,
        height: 50,
        backgroundColor: 'rgba(78, 77, 77, .65)',
        color: '#fff',
        padding: 10,
        borderRadius: 15,
        marginBottom: 30,
      },
      cepContainer: {
        flexDirection: 'row' as const,
        alignItems: 'center' as const,
      },
      cepInput: {
        flex: 1,
      },
      loading: {
        marginLeft: 10,
      },
      errorText: {
        color: '#e94560',
        marginBottom: 20,
        fontSize: 12,
      },
      buttonContainer: {
        flexDirection: 'row' as const,
        justifyContent: 'space-between' as const,
        marginTop: 20,
      },
      button: {
        flex: 1,
        padding: 15,
        borderRadius: 5,
        alignItems: 'center' as const,
        backgroundColor: '#6A5430 as const'
      },
      backButton: {
        backgroundColor: '#6A5430',
        marginRight: 10,
      },
      disabledButton: {
        backgroundColor: '#96876E',
      },
      buttonText: {
        color: '#fff',
        fontWeight: 'bold' as const,
      },
}