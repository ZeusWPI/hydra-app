export interface RestoMeal {
  name: string;
  price: string; // inheriting type choice from legacy
  type: "main" | "side" | "cold" | string;
  kind: "soup" | string; // probably one of [ 'all', 'soup', 'main' ]
}

export interface RestoMenu {
  open: boolean;
  date: Date;
  meals: RestoMeal[]; // can be filtered down to main, cold, soup
  vegetables: string[];
  message: string;
}

export interface Resto {
  menu: RestoMenu;
  choice: [string, string]; // form: [name, endpoint]
  kind: string;
}
