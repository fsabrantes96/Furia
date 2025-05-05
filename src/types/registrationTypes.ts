export type RegistrationStep = {
    title: string;
    completed: boolean;
    active: boolean;
  };
  
  export type PersonalData = {
    name: string;
    cpf: string;
    birthDate: Date;
    gender: string;
    email: string;
    password: string;
  };
  
  export type AddressData = {
    cep: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
    number: string;
  };
  
  export type InterestsData = {
    teams: string[];
    games: string[];
    customGame?: string;
    participatesCommunity: boolean;
    communityName?: string;
  };
  
  export type EventsData = {
    eventName: string;
    products: {
      type: string;
      customProduct?: string;
      amountSpent?: number;
    }[];
  };
  
  export type DocumentsData = {
    documentUri: string;
    selfieUri: string;
  };
  
  export type SocialData = {
    twitter?: string;
    instagram?: string;
    twitch?: string;
    discord?: string;
  };
  
  export type LinksData = {
    profileLinks: string[];
  };
  
  export type ConsentsData = {
    dataUsage: boolean;
    socialAnalysis: boolean;
    aiProcessing: boolean;
  };