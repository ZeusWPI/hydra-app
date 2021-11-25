///<reference path="global.ts" />

export interface UrgentfmWrapper {
  meta: UrgentfmMeta;
  name: string;
  url: urlString;
  validUntil: dateString;
}

export interface UrgentfmMeta {
  description: string;
  image: urlString;
  name: string;
}
