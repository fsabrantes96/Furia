export const maskCPF = (value: string) => {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1');
}

export const maskCEP = (value: string) => {
    return value
      .replace(/\D/g, '') // Remove tudo que não é dígito
      .replace(/(\d{5})(\d)/, '$1-$2') // Coloca hífen após 5 dígitos
      .replace(/(-\d{3})\d+?$/, '$1'); // Impede mais dígitos após o hífen
  };