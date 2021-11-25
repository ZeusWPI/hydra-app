export interface Association {
  abbreviation: string;
  description?: string;
  email: string;
  logo?: string;
  name: string;
  path: string[];
  website?: string;
}

export interface AssociationWrapper {
  associations: Association[];
}

export interface AEvent {
  address?: string;
  advertise: boolean;
  association: string;
  description?: string;
  end_time: string;
  id: number;
  infolink?: string;
  location: string;
  start_time: string; // what is this ordering?
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
