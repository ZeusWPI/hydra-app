export interface NewsItem {
    content: string;
    id: string;
    link: string;
    published: string;
    summary: string;
    title: string;
    updated: string;
}

export interface NewsList {
    entries: NewsItem[];
    generator: string;
    id: string;
    language: string;
    link: string;
    logo: string;
    title: string;
    updated: string;
}
