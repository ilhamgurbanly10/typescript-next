interface Phone {
    number: string
}

export interface Socials {
    facebook: string | null;
    instagram: string | null;
    whatsapp: string | null;
    youtube: string | null;
    email: string | null;
    phone: Phone[];
}
  