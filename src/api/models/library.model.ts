///<reference path="global.ts" />

// format: https://widgets.lib.ugent.be/library_groups/main.json
export interface Library {
  campus: string;
  reading_room: string;
  created_at: dateString;
  name_en: string;
  active: number;
  image_url: urlString;
  door_number: string;
  email_acquisition: mailString;
  email: mailString;
  name: string;
  has_hours: number;
  link_nl: urlString;
  link_en?: urlString;
  name_nl: string;
  faculty: string;
  cubee_id?: string;
  lat: number; // latitude; longitude follows somewhere later
  pickup_locations: string[];
  code: string;
  telephone: phoneString[];
  updated_at: dateString;
  shipment_library_code?: string;
  address: string[];
  department: string;
  long: number; // longitude; remember latitude from earlier?
  thumbnail_url: urlString;
  contact: string;
  sap_id: string;
  link: urlString;
}

export interface LibraryWrapper {
  updated_at: dateString;
  created_at: dateString;
  libraries_limit: number;
  libraries_start: number;
  code: string;
  name_en: string;
  libraries: Library[];
  name: string;
  libaries_total: number;
  name_nl: string;
}
