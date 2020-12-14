import { MiseMenu, Menu } from '.';

export const groupMenuDishesByType = (menus: MiseMenu[]): Menu[] =>
  menus.map(({ dishes, type, ...menu }) => {
    const dishTypesCategoryMap = [
      {
        category: 'Entrees',
        types: ['Main Entree', '1st Entree', '2nd Entree', 'Vegan Entree', 'Vegetarian Entree']
      },
      {
        category: 'Salads and Soups',
        types: ['Soup', '2nd Soup', 'Composed Salad', 'Salad Bar', 'Salad Bar Addition', 'Dressing']
      },
      {
        category: 'Breakfast Items',
        types: ['Breakfast Item']
      },
      {
        category: 'Side Items',
        types: ['Grain/Pasta', 'Vegetable Side', '2nd Vegetable Side', 'Fruit']
      },
      {
        category: 'Desserts',
        types: ['Dessert']
      },
      {
        category: 'Drinks',
        types: ['Drink']
      }
    ];

    return {
      ...menu,
      id: type.toLowerCase().replace(' ', '-'),
      name: type,
      dishes: dishTypesCategoryMap.map(({ category, types }) => ({
        category,
        items: dishes.filter(dish => types.includes(dish.type))
      }))
    };
  });
