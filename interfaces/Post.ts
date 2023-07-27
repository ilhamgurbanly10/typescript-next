interface AdditionalParent {
    id: number;
    icon: any;
    title: string;
    slig: string;
}

interface Additional {
    id: number;
    slug: string;
    title: string;
    icon: string;
    parent: AdditionalParent;
}

interface Category {
    id: number;
    slug: string;
    title: string;
    name: string;
    parent: any;
    icon: string | null;
}

interface Image {
    id: number;
    image: string;
    key: string | null;
}

export interface Post {
    additional: Additional[];
    id: number;
    name: string;
    area: number;
    author: any;
    category: Category;
    city: any;
    created_at: string | null;
    description: string;
    district: any;
    image: null | string;
    images: Image[];
    location: string;
    is_agency: boolean;
    is_expired: boolean;
    is_ipotech: boolean;
    is_kupcha: boolean;
    is_living: boolean;
    is_new: boolean;
    is_pending: boolean;
    is_premium: boolean;
    is_rejected: boolean;
    is_trade: boolean;
    is_verified_by_admin: boolean;
    is_vip: boolean;
    office_type: any;
    plot_of_land: null | number;
    price: string;
    rank: any;
    rank_count: any;
    rent: any;
    room_count: any;
    sell: any;
    slug: string;
    updated_at: string;
    view_count: number | null;
    village: any;
}

export interface PostsPerCategory {
    title: string;
    data: Post[];
    slug: string;
}
  