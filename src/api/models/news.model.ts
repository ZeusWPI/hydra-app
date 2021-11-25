///<reference path="global.ts" />

export interface NewsItem {
  content: htmlString;
  id: string;
  link: urlString;
  published: dateString;
  summary: string;
  title: string;
  updated: dateString;
}

export interface NewsWrapper {
  entries: NewsItem[];
  generator: string;
  id: string;
  language: string;
  link: urlString;
  logo: urlString;
  title: string;
  updated: dateString;
}
