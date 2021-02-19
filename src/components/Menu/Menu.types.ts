import { Dish } from '../WeeklyMenu/WeeklyMenu.types';

export interface Menu {
  name: string;
  type: string;
  allergens: Array<string>;
  dishes: Array<Dish>;
  image: string;
  secondary_image?: string;
  orderLink?: string;
}

export interface Diet {
  id: string;
  label: string;
  type: string;
  menus: {
    current: Menu;
    next: Menu;
    previous: Menu;
  };
}
