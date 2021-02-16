export interface Dish {
  type: string;
  name: string;
  containsGluten?: boolean;
}

export interface Menu {
  id: string;
  name: string;
  dishes: Array<{ category: string; items: Dish[] }>;
  image: string;
  secondary_image?: string;
  orderLink?: string;
}

export interface Diet {
  id: string;
  label: string;
  type: string;
  menus: {
    current: {
      start: string;
      menu: Menu;
    };
    next: {
      start: string;
      menu: Menu;
    };
    previous: {
      start: string;
      menu: Menu;
    };
  };
}
