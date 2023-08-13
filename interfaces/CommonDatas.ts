interface Phone {
    number: string
}

export interface Socials {
    facebook?: string | null;
    instagram?: string | null;
    whatsapp?: string | null;
    youtube?: string | null;
    email?: string | null;
    phone?: Phone[];
}

export interface Metro {
    slug: string;
    name: string;
}

export interface Target {
    slug: string;
    name: string;
}

export interface Cities {
    slug: string;
    name: string;
    metro: Metro[];
    target: Target[];
    district: any;
}


export interface Regions {
    slug: string;
    name: string;
    metro: Metro[];
    target: Target[];
    village: any;
}

export interface Loader {
    state: boolean,
    loop: number,
    percent: number
}
  