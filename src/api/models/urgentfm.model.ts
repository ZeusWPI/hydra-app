export interface UrgentfmWrapper {
    meta: UrgentfmMeta;
    name: string;
    url: string;
    validUntil: string;
}

export interface UrgentfmMeta {
    description: string;
    image: string;
    name: string;
}