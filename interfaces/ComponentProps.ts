import {Post} from './Post'

export interface CardList {
    data: Post[];
    title: string;
    link: string;
    className?: string;
    loading?: boolean;
};

export interface SliderCardList {
    data: Post[];
    title: string;
    link: string;
    className?: string;
    loading?: boolean;
};

export interface CardListHead {
    title: string;
    link: string;
    arrows?: boolean;
};

