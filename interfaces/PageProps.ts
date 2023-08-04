import {Post, PostsPerCategory} from './Post'

export interface Home {
    lastPosts: Post[];
    postsPerCategory: PostsPerCategory[];
    vipPosts: Post[];
};
