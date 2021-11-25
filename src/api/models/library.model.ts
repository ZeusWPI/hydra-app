// format: https://widgets.lib.ugent.be/library_groups/main.json
export interface Library {
  campus: string;
  reading_room: string;
  created_at: string;
  name_en: string;
  active: number;
  image_url: string;
  door_number: string;
  email_acquisition: string;
  email: string;
  name: string;
  has_hours: number;
  link_nl: string;
  link_en?: string;
  name_nl: string;
  faculty: string;
  cubee_id?: string;
  lat: number; // latitude; longitude follows somewhere later
  pickup_locations: string[];
  code: string;
  telephone: string[];
  updated_at: string;
  shipment_library_code?: string;
  address: string[];
  department: string;
  long: number; // longitude; remember latitude from earlier?
  thumbnail_url: string;
  contact: string;
  sap_id: string;
  link: string;
}

export interface LibraryWrapper {
  updated_at: string;
  created_at: string;
  libraries_limit: number;
  libraries_start: number;
  code: string;
  name_en: string;
  libraries: Library[];
  name: string;
  libaries_total: number;
  name_nl: string;
}
