interface Additional {
    id: number;
    slug: string;
    title: string;
    icon: string | null | undefined;
    parent: any;
}

export interface Card {
    title: string;
    created_at: any;
    img: string;
    additionals: Additional[];
    slug: string;
    is_vip: boolean;
    is_premium: boolean;
}