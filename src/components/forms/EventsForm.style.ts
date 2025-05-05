export const styles = {
    scrollContainer: {
        paddingHorizontal: 100,
        paddingBottom: 100,
    },
    container: {
        flex: 1
    },
    sectionTitle: {
        color: '#6A5430',
        fontSize: 28,
        marginBottom: 15,
        lineHeight: 20
    },
    checkboxContainer: {
        flexDirection: 'row' as const,
        alignItems: 'center' as const,
        marginBottom: 10,
    },
    customCheckbox: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderColor: '#6A5430',
        borderRadius: 4,
        justifyContent: 'center' as const,
        alignItems: 'center' as const,
        marginRight: 8,
    },
    customCheckboxChecked: {
        backgroundColor: '#6A5430',
    },
    checkmark: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold' as const,
    },
    label: {
        color: '#fff',
        marginLeft: 10,
    },
    input: {
        color: '#fff',
        width: '100%' as const,
        height: 50,
        padding: 15,
        borderRadius: 50,
        backgroundColor: 'rgba(78, 77, 77, .65)',
        marginBottom: 20
    },
    buttonContainer: {
        flexDirection: 'row' as const,
        justifyContent: 'space-between' as const,
        marginTop: 30,
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
}