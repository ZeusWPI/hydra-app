export interface RestoMeal {
  kind: "soup" | "vegan" | "vegetarian" | "fish" | "meat";
  name: string;
  price: string;
  type: "side" | "main" | "cold";
}

export interface RestoMenu {
  date: string;
  meals: RestoMeal[];
  open: boolean;
  vegetables: string[];
}

export interface RestoOpening {
  resto: [string, string][]; // list of tuples (start, end)
  cafetaria: [string, string][]; // list of tuples (start, end)
}

export interface Resto {
  name: string;
  address: string;
  latitude: string;
  longitude: string;
  type: "resto" | "cafetaria";
  endpoint: string;
  open: RestoOpening;
}

export interface RestoList {
  locations: Resto[];
}
