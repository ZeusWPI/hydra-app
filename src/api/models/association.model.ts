///<reference path="global.ts" />

export interface Association {
  abbreviation: string;
  description?: string;
  email: mailString;
  logo?: string;
  name: string;
  path: string[];
  website?: urlString;
}

export interface AssociationWrapper {
  associations: Association[];
}

export interface AEvent {
  address?: addressString;
  advertise: boolean;
  association: string;
  description?: string;
  end_time: dateString;
  id: number;
  infolink?: urlString;
  location: string;
  start_time: dateString; // what is this ordering?
  sync_data?: Object; // seems to be null everywhere so idk?
  terrain: string;
  title: string;
  type: string;
}

export interface EventMeta {
  authenticated: boolean;
  params: Object; // we don't seem to be authenticated, so let's just ignore this one?
}

export interface EventPage {
  entries: AEvent[];
  page_number: number;
  page_size: number;
  total_entries: number;
  total_pages: number;
}

export interface EventWrapper {
  meta: EventMeta;
  page: EventPage;
}
