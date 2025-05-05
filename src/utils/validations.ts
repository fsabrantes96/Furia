export const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

export const validateName = (name: string) => {
    return name.trim().split(' ').length >= 2;
};