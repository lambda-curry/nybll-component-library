import React from 'react';
import { Menu } from '.';
import { Diet } from './Menu.types';

export default {
  title: 'Components/Menu',
  component: Menu
};

export const MenuStory = () => {
  const menu: { dates: { current: string; next: string; previous: string }; dietHistory: Array<Diet> } = {
    dates: {
      current: 'Feb 8th',
      next: 'Feb 15th',
      previous: 'Feb 1st'
    },
    dietHistory: [
      {
        id: '1',
        label: 'Flexitarian',
        type: 'flexitarian',
        menus: {
          current: {
            type: 'Flexitarian',
            name: ' Nybll Home Week 7 Winter Menu 2 Flexitarian',
            image: 'https://admin.nybll.com/images/weekly-home-menu-default/flexitarian/primary_default_image.jpg',
            secondary_image:
              'https://admin.nybll.com/images/weekly-home-menu-default/flexitarian/secondary_default_image.jpg',
            dishes: [
              {
                type: '1st Entree',
                name: 'Herb Crusted Salmon + Confetti Quinoa + Kale'
              },
              {
                type: '1st Entree',
                name: 'Duck Confit + Crispy Potato Cakes + Charred Cabbage'
              },
              {
                type: '1st Entree',
                name: 'Chicken Parmesan + Alfredo Pasta + Herb Squash'
              },
              {
                type: '1st Entree',
                name: 'Chicken + Chorizo Paella + Sweet Pepper + Cauliflower'
              },
              {
                type: '1st Entree',
                name: 'Greek Steak + Vegetable Briami'
              },
              {
                type: 'Composed Salad',
                name: 'Kale + Apricot Salad + White Balsamic'
              },
              {
                type: 'Composed Salad',
                name: 'Beet + Apple Salad + Tarragon Vinaigrette'
              },
              {
                type: 'Soup',
                name: 'Corn + Potato Chowder'
              }
            ],
            allergens: ['fish', 'eggs', 'dairy', 'nuts', 'gluten', 'soy', 'tree nuts']
          },
          next: {
            type: 'Flexitarian',
            name: ' Nybll Home Week 8 Winter Menu 3 Flexitarian',
            image: 'https://admin.nybll.com/images/weekly-home-menu-default/flexitarian/primary_default_image.jpg',
            secondary_image:
              'https://admin.nybll.com/images/weekly-home-menu-default/flexitarian/secondary_default_image.jpg',
            dishes: [
              {
                type: '1st Entree',
                name: 'Herb Crusted Salmon + Confetti Quinoa + Kale'
              },
              {
                type: '1st Entree',
                name: 'Duck Confit + Crispy Potato Cakes + Charred Cabbage'
              },
              {
                type: '1st Entree',
                name: 'Chicken Parmesan + Alfredo Pasta + Herb Squash'
              },
              {
                type: '1st Entree',
                name: 'Chicken + Chorizo Paella + Sweet Pepper + Cauliflower'
              },
              {
                type: '1st Entree',
                name: 'Beef Stew + Roasted Root Vegetables + Green Beans'
              },
              {
                type: '1st Entree',
                name: 'Chicken Massaman Curry + Coconut Rice + Thai Vegetable'
              },
              {
                type: '1st Entree',
                name: 'Chimichurri Steak + Wild Rice + Asparagus'
              },
              {
                type: '1st Entree',
                name: 'Salad Nicoise with Seared Tuna'
              }
            ],
            allergens: ['fish', 'eggs', 'soy', 'tree nuts']
          },
          previous: {
            type: 'Flexitarian',
            name: 'Nybll Home Week 6 Winter Menu 1 Flexitarian',
            image: 'https://admin.nybll.com/images/weekly-home-menu-default/flexitarian/primary_default_image.jpg',
            secondary_image:
              'https://admin.nybll.com/images/weekly-home-menu-default/flexitarian/secondary_default_image.jpg',
            dishes: [
              {
                type: '1st Entree',
                name: 'Beef Stew + Roasted Root Vegetables + Green Beans'
              },
              {
                type: '1st Entree',
                name: 'Chicken Massaman Curry + Coconut Rice + Thai Vegetable'
              },
              {
                type: '1st Entree',
                name: 'Chimichurri Steak + Wild Rice + Asparagus'
              },
              {
                type: '1st Entree',
                name: 'Salad Nicoise with Seared Tuna'
              },
              {
                type: '1st Entree',
                name: 'Coq au Vin Chicken + Mashed Potatoes + Brussels Sprouts'
              },
              {
                type: 'Composed Salad',
                name: 'Kale + Brussels + Almonds + Cranberry Lemon Vinaigrette'
              },
              {
                type: 'Composed Salad',
                name: 'Radicchio + Spinach + Caramelized Carrots + Orange Vinaigrette'
              },
              {
                type: 'Soup',
                name: 'Roasted Butternut + Cauliflower Soup'
              }
            ],
            allergens: ['eggs', 'fish', 'nuts', 'tree nuts']
          }
        }
      },
      {
        id: '2',
        label: 'Pescatarian',
        type: 'pescatarian',
        menus: {
          current: {
            type: 'Pescatarian',
            name: 'Nybll Home Week 7 Winter Menu 2 Pescatarian',
            image: 'https://admin.nybll.com/images/weekly-home-menu-default/pescatarian/primary_default_image.jpg',
            secondary_image:
              'https://admin.nybll.com/images/weekly-home-menu-default/pescatarian/secondary_default_image.jpg',
            dishes: [
              {
                type: '1st Entree',
                name: 'Herb Crusted Salmon + Confetti Quinoa + Kale'
              },
              {
                type: '1st Entree',
                name: 'Mock Duck Confit + Crispy Potato Cakes + Charred Cabbage'
              },
              {
                type: '1st Entree',
                name: 'Garlic Shrimp + Alfredo Pasta + Herb Squash'
              },
              {
                type: '1st Entree',
                name: 'Vegan Sausage Paella + Sweet Pepper + Cauliflower'
              },
              {
                type: '1st Entree',
                name: 'Greek Market Fish + Vegetable Briami'
              },
              {
                type: 'Composed Salad',
                name: 'Kale + Apricot Salad + White Balsamic'
              },
              {
                type: 'Composed Salad',
                name: 'Beet + Apple Salad + Tarragon Vinaigrette'
              },
              {
                type: 'Soup',
                name: 'Corn + Potato Chowder'
              }
            ],
            allergens: ['fish', 'soy', 'gluten', 'dairy', 'nuts', 'shellfish', 'tree nuts']
          },
          next: {
            type: 'Pescatarian',
            name: 'Nybll Home Week 8 Winter Menu 3 Pescatarian',
            image: 'https://admin.nybll.com/images/weekly-home-menu-default/pescatarian/primary_default_image.jpg',
            secondary_image:
              'https://admin.nybll.com/images/weekly-home-menu-default/pescatarian/secondary_default_image.jpg',
            dishes: [
              {
                type: '1st Entree',
                name: 'Herb Crusted Salmon + Confetti Quinoa + Kale'
              },
              {
                type: '1st Entree',
                name: 'Mock Duck Confit + Crispy Potato Cakes + Charred Cabbage'
              },
              {
                type: '1st Entree',
                name: 'Garlic Shrimp + Alfredo Pasta + Herb Squash'
              },
              {
                type: '1st Entree',
                name: 'Vegan Sausage Paella + Sweet Pepper + Cauliflower'
              },
              {
                type: '1st Entree',
                name: 'Portobello Stew + Roasted Root Vegetables'
              },
              {
                type: '1st Entree',
                name: 'Chickpea Curry + Coconut Rice + Vegetables'
              },
              {
                type: '1st Entree',
                name: 'Chimichurri Fish + Wild Rice Pilaf + Asparagus'
              },
              {
                type: '1st Entree',
                name: 'Salad Nicoise with Seared Tuna'
              }
            ],
            allergens: ['fish', 'soy', 'gluten', 'dairy', 'nuts', 'shellfish', 'tree nuts']
          },
          previous: {
            type: 'Pescatarian',
            name: 'Nybll Home Week 6 Winter Menu 1 Pescatarian Menu',
            image: 'https://admin.nybll.com/images/weekly-home-menu-default/pescatarian/primary_default_image.jpg',
            secondary_image:
              'https://admin.nybll.com/images/weekly-home-menu-default/pescatarian/secondary_default_image.jpg',
            dishes: [
              {
                type: '1st Entree',
                name: 'Portobello Stew + Roasted Root Vegetables'
              },
              {
                type: '1st Entree',
                name: 'Chickpea Curry + Coconut Rice + Vegetables'
              },
              {
                type: '1st Entree',
                name: 'Chimichurri Fish + Wild Rice Pilaf + Asparagus'
              },
              {
                type: '1st Entree',
                name: 'Salad Nicoise with Seared Tuna'
              },
              {
                type: '1st Entree',
                name: 'Coq au Vin Salmon + Mashed Potatoes + Brussels'
              },
              {
                type: 'Composed Salad',
                name: 'Kale + Brussels + Almonds + Cranberry Lemon Vinaigrette'
              },
              {
                type: 'Composed Salad',
                name: 'Radicchio + Spinach + Caramelized Carrots + Orange Vinaigrette'
              },
              {
                type: 'Soup',
                name: 'Roasted Butternut + Cauliflower Soup'
              }
            ],
            allergens: ['fish', 'eggs', 'nuts', 'tree nuts']
          }
        }
      },
      {
        id: '3',
        label: 'Plant-Based',
        type: 'plant-based',
        menus: {
          current: {
            type: 'Plant Based',
            name: 'Nybll Home Week 7 Winter Menu 2 Plant Based',
            image: 'https://admin.nybll.com/images/weekly-home-menu-default/plant_based/primary_default_image.jpg',
            secondary_image:
              'https://admin.nybll.com/images/weekly-home-menu-default/plant_based/secondary_default_image.jpg',
            dishes: [
              {
                type: '1st Entree',
                name: 'Herb Crusted Tofu Plate'
              },
              {
                type: '1st Entree',
                name: 'Mock Duck Confit + Crispy Potato Cakes + Charred Cabbage'
              },
              {
                type: '1st Entree',
                name: 'Mushroom Parmesan + Alfredo Pasta + Herb Squash'
              },
              {
                type: '1st Entree',
                name: 'Vegan Sausage Paella + Sweet Pepper + Cauliflower'
              },
              {
                type: '1st Entree',
                name: 'Greek Eggplant Steaks + Vegetable Briami'
              },
              {
                type: 'Composed Salad',
                name: 'Kale + Apricot Salad + White Balsamic'
              },
              {
                type: 'Composed Salad',
                name: 'Beet + Apple Salad + Tarragon Vinaigrette'
              },
              {
                type: 'Soup',
                name: 'Corn + Potato Chowder'
              }
            ],
            allergens: ['soy', 'gluten', 'nuts', 'tree nuts']
          },
          next: {
            type: 'Plant Based',
            name: 'Nybll Home Week 8 Winter Menu 3 Plant Based',
            image: 'https://admin.nybll.com/images/weekly-home-menu-default/plant_based/primary_default_image.jpg',
            secondary_image:
              'https://admin.nybll.com/images/weekly-home-menu-default/plant_based/secondary_default_image.jpg',
            dishes: [
              {
                type: '1st Entree',
                name: 'Herb Crusted Tofu Plate'
              },
              {
                type: '1st Entree',
                name: 'Mock Duck Confit + Crispy Potato Cakes + Charred Cabbage'
              },
              {
                type: '1st Entree',
                name: 'Mushroom Parmesan + Alfredo Pasta + Herb Squash'
              },
              {
                type: '1st Entree',
                name: 'Vegan Sausage Paella + Sweet Pepper + Cauliflower'
              },
              {
                type: '1st Entree',
                name: 'Portobello Stew + Roasted Root Vegetables'
              },
              {
                type: '1st Entree',
                name: 'Chickpea Curry + Coconut Rice + Vegetables'
              },
              {
                type: '1st Entree',
                name: 'Chimichurri Vegan Sausage + Wild Rice + Asparagus'
              },
              {
                type: '1st Entree',
                name: 'Vegan Salad Nicoise'
              }
            ],
            allergens: ['soy', 'gluten', 'nuts', 'tree nuts']
          },
          previous: {
            type: 'Plant Based',
            name: 'Nybll Home Week 6 Winter Menu 1 Plant-Based Menu',
            image: 'https://admin.nybll.com/images/weekly-home-menu-default/plant_based/primary_default_image.jpg',
            secondary_image:
              'https://admin.nybll.com/images/weekly-home-menu-default/plant_based/secondary_default_image.jpg',
            dishes: [
              {
                type: '1st Entree',
                name: 'Portobello Stew + Roasted Root Vegetables'
              },
              {
                type: '1st Entree',
                name: 'Chickpea Curry + Coconut Rice + Vegetables'
              },
              {
                type: '1st Entree',
                name: 'Chimichurri Vegan Sausage + Wild Rice + Asparagus'
              },
              {
                type: '1st Entree',
                name: 'Vegan Salad Nicoise'
              },
              {
                type: '1st Entree',
                name: 'Tempeh + Mushroom  + Mashed Potatoes + Brussel Sprouts'
              },
              {
                type: 'Composed Salad',
                name: 'Kale + Brussels + Almonds + Cranberry Lemon Vinaigrette'
              },
              {
                type: 'Composed Salad',
                name: 'Radicchio + Spinach + Caramelized Carrots + Orange Vinaigrette'
              },
              {
                type: 'Soup',
                name: 'Roasted Butternut + Cauliflower Soup'
              }
            ],
            allergens: ['soy', 'nuts', 'tree nuts']
          }
        }
      },
      {
        id: '4',
        label: 'Non-Red Meat',
        type: 'non-red-meat',
        menus: {
          current: {
            type: 'No Red Meat',
            name: ' Nybll Home Week 7 Winter Menu 2 Flexitarian- NO Red Meat',
            image: 'https://admin.nybll.com/images/weekly-home-menu-default/no_red_meat/primary_default_image.jpg',
            secondary_image:
              'https://admin.nybll.com/images/weekly-home-menu-default/no_red_meat/secondary_default_image.jpg',
            dishes: [
              {
                type: '1st Entree',
                name: 'Herb Crusted Salmon + Confetti Quinoa + Kale'
              },
              {
                type: '1st Entree',
                name: 'Duck Confit + Crispy Potato Cakes + Charred Cabbage'
              },
              {
                type: '1st Entree',
                name: 'Chicken Parmesan + Alfredo Pasta + Herb Squash'
              },
              {
                type: '1st Entree',
                name: 'Vegan Sausage Paella + Sweet Pepper + Cauliflower'
              },
              {
                type: '1st Entree',
                name: 'Greek Market Fish + Vegetable Briami'
              },
              {
                type: 'Composed Salad',
                name: 'Kale + Apricot Salad + White Balsamic'
              },
              {
                type: 'Composed Salad',
                name: 'Beet + Apple Salad + Tarragon Vinaigrette'
              },
              {
                type: 'Soup',
                name: 'Corn + Potato Chowder'
              }
            ],
            allergens: ['fish', 'eggs', 'dairy', 'nuts', 'gluten', 'tree nuts', 'soy']
          },
          next: {
            type: 'No Red Meat',
            name: ' Nybll Home Week 7 Winter Menu 2 Flexitarian- NO Red Meat',
            image: 'https://admin.nybll.com/images/weekly-home-menu-default/no_red_meat/primary_default_image.jpg',
            secondary_image:
              'https://admin.nybll.com/images/weekly-home-menu-default/no_red_meat/secondary_default_image.jpg',
            dishes: [
              {
                type: '1st Entree',
                name: 'Herb Crusted Salmon + Confetti Quinoa + Kale'
              },
              {
                type: '1st Entree',
                name: 'Duck Confit + Crispy Potato Cakes + Charred Cabbage'
              },
              {
                type: '1st Entree',
                name: 'Chicken Parmesan + Alfredo Pasta + Herb Squash'
              },
              {
                type: '1st Entree',
                name: 'Vegan Sausage Paella + Sweet Pepper + Cauliflower'
              },
              {
                type: '1st Entree',
                name: 'Portobello Stew + Roasted Root Vegetables'
              },
              {
                type: '1st Entree',
                name: 'Chicken Massaman Curry + Coconut Rice + Thai Vegetable'
              },
              {
                type: '1st Entree',
                name: 'Chimichurri Fish + Wild Rice Pilaf + Asparagus'
              },
              {
                type: '1st Entree',
                name: 'Salad Nicoise with Seared Tuna'
              }
            ],
            allergens: ['fish', 'eggs', 'dairy', 'nuts', 'gluten', 'tree nuts', 'soy']
          },
          previous: {
            type: 'No Red Meat',
            name: 'Nybll Home Week 6 Winter Menu 1 Flexitarian Menu- NO Red Meat',
            image: 'https://admin.nybll.com/images/weekly-home-menu-default/no_red_meat/primary_default_image.jpg',
            secondary_image:
              'https://admin.nybll.com/images/weekly-home-menu-default/no_red_meat/secondary_default_image.jpg',
            dishes: [
              {
                type: '1st Entree',
                name: 'Portobello Stew + Roasted Root Vegetables'
              },
              {
                type: '1st Entree',
                name: 'Chicken Massaman Curry + Coconut Rice + Thai Vegetable'
              },
              {
                type: '1st Entree',
                name: 'Chimichurri Fish + Wild Rice Pilaf + Asparagus'
              },
              {
                type: '1st Entree',
                name: 'Salad Nicoise with Seared Tuna'
              },
              {
                type: '1st Entree',
                name: 'Coq au Vin Chicken + Mashed Potatoes + Brussels Sprouts'
              },
              {
                type: 'Composed Salad',
                name: 'Kale + Brussels + Almonds + Cranberry Lemon Vinaigrette'
              },
              {
                type: 'Composed Salad',
                name: 'Radicchio + Spinach + Caramelized Carrots + Orange Vinaigrette'
              },
              {
                type: 'Soup',
                name: 'Roasted Butternut + Cauliflower Soup'
              }
            ],
            allergens: ['fish', 'eggs', 'nuts', 'tree nuts']
          }
        }
      }
    ]
  };

  return (
    <div className="nybll-container">
      <Menu menu={menu} />
    </div>
  );
};

MenuStory.storyName = 'Default';
