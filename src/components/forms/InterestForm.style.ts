export const styles = {
  scrollContainer: {
    paddingHorizontal: 100,
    paddingBottom: 100,
  },
  container:{
    flex: 1
  },
  sectionTitle: {
    color: '#6A5430',
    fontSize: 28,
    marginBottom: 15,
    lineHeight: 20
  },
  checkbox: {
    width: 17,
    height: 17,
    borderRadius: 5,
    backgroundColor: '#e8e8e8',
    borderWidth: 0
  },
  checkboxChecked: {
    backgroundColor: '#6A5430'
  },
  checkboxContainer: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    marginBottom: 10,
    borderColor: '#fff'
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
    backgroundColor: 'rgba(78, 77, 77, .65)'
  },
  radioContainer: {
    flexDirection: 'row' as const,
    justifyContent: 'space-around' as const,
    marginBottom: 20
  },
  radioButton: {
    padding: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
  },
  radioSelected: {
    backgroundColor: '#6A5430',
    borderColor: '#6A5430',
  },
  radioText: {
    color: '#fff',
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
    color: 'white',
    fontSize: 16,
  }
}