export interface Library {
  department: string;
  email: string;
  addresses: string[];
  name: string;
  nameTransl: string[]; // translated names
  code: string;
  phoneNumbers: string[];
  active: boolean;
  thumbnail: string;
  image: string;
  coords: [string, string]; // latitude, longitude
  comments: string[];
  contact: string;
  campus: string;
  faculty: string;
  link: string;
  favorite: boolean;
}
