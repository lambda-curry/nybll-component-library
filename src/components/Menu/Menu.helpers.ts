export const categorizeDishesByType = (
  dishes: Array<{ name: string; type: string }>
): Array<{ heading: string; dishes: Array<any> }> => {
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

  let categorizedDishes: { [key: string]: Array<{}> } = {};

  dishes.forEach(({ name, type }) => {
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

  const categorizedDishEntries = Object.entries(categorizedDishes);
  const dishEntriesAsArray: Array<any> = categorizedDishEntries.map((item: Array<any>): {
    heading: string;
    dishes: Array<any>;
  } => ({
    heading: item[0],
    dishes: item[1]
  }));

  return dishEntriesAsArray;
};
