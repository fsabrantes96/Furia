export const styles = {
    container: {
        flexDirection: 'row' as const,
        justifyContent: 'space-between' as const,
        alignItems: 'center' as const,
        marginBottom: 30,
    },
    active: {},
    stepContainer: {
        alignItems: 'center' as const,
        width: 60,
    },
    stepCircle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#16213e',
        justifyContent: 'center' as const,
        alignItems: 'center' as const,
        marginBottom: 5,
    },
    activeStep: {
        backgroundColor: '#e94560' 
    },
    completedStep: {
        backgroundColor: '#4CAF50',
    },
    stepText: {
        color: '#fff',
        fontWeight: 'bold' as const,
    },
    stepTitle: {
        fontSize: 12,
        color: '#a5a5a5',
        texteAlign: 'center' as const,
    },
    activeTitle: {
        color: '#fff',
        fontWeight: 'bold' as const,
    },
    completedTitle: {
        color: '#4CAF50',
    },
    connector: {
        flex: 1,
        height: 2,
        backgroundColor: '#16213e',
        marginHorizontal: 5,
    },
    completedConnector: {
        backgroundColor: '#4CAF50',
    },
}