export const categorizeDishesByType = (dishes: Array<{ name: string; type: string }>): Array<{}> => {
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

  let categorizedDishes: { [key: string]: Array<any> } = {};

  dishes.map(({ name, type }) => {
    dishTypesCategoryMap.forEach(({ category, types }) => {
      if (types.includes(type)) {
        if (Object.keys(categorizedDishes).includes(category)) {
          categorizedDishes[category].push(name);
        } else {
          categorizedDishes[category] = [name];
        }
      }
    });
  });

  return Object.entries(categorizedDishes);
};
