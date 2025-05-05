export const styles = {
    scrollContainer: {
        flexGrow: 1,
        paddingHorizontal: 100,
        paddingBottom: 100
        
    },
    label: {
        color: "#fff",
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
    inputError: {
        borderColor: '#e94560',
    },
    errorText: {
        color: '#e94560',
        marginBottom: 10,
        fontSize: 14,
    },
    dateInput: {
        width: '100%' as const,
        backgroundColor: 'rgba(78, 77, 77, .65)',
        padding: 15,
        borderRadius: 15,
        marginBottom: 20,
        borderWidth: 1,
        height: 50,  
    },
    dateText: {
        color: '#fff',
        fontSize: 16,
        textAlignVertical: 'center' as const, 
        lineHeight: 20,  
    },
    pickerContainer: {
        width: "100%" as const,
        backgroundColor: 'rgba(78, 77, 77, .65)',
        borderRadius: 15,
        marginBottom: 20,
        overflow: 'hidden' as const,
    },
    button: {
        backgroundColor: '#6A5430',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center' as const,
        marginTop: 20,
    },
    disabledButton: {
        backgroundColor: '#96876E',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold' as const,
    },
};