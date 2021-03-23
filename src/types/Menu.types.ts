import { Dish } from '..';

export interface MenuType {
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
    current?: MenuType;
    next?: MenuType;
    previous?: MenuType;
  };
}
