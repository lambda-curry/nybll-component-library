import { Dish } from '../../types/shared.types';

export interface WeeklyMenu {
  id: string;
  name: string;
  dishes: Array<{ category: string; items: Dish[] }>;
  image: string;
  secondary_image?: string;
  orderLink?: string;
}

export interface MiseMenu {
  type: string;
  name: string;
  image: string;
  secondary_image: string;
  allergens: string;
  dishes: Dish[];
}
