export interface Dish {
  type: 'entree' | 'soup' | 'salad';
  name: string;
  containsGluten?: boolean; // Note: I believe all food is now gluten-free
}

export interface Menu {
  id: 'flexitarian' | 'pescatarian' | 'plant-based' | 'non-red-meat';
  name: string;
  items: Dish[];
  image: {
    webp: string;
    png: string;
  };
  orderLink: string;
}
