import React from 'react';
import { WeeklyMenu, Menu } from '.';

export default {
  title: 'Components/WeeklyMenu',
  component: WeeklyMenu
};

export const WeeklyMenuStory = () => {
  const imageUrl = 'https://www.nybll.com/wp-content/plugins/nybll-weekly-menu/public/assets/imgs/menus/';
  const orderLink = 'https://www.nybll.com/#meal-plans';

  const flexitarianMenu: Menu = {
    id: 'flexitarian',
    name: 'Flexitarian',
    orderLink,
    image: `${imageUrl}weekly-menu-flexitarian.webp`,
    dishes: [
      {
        category: 'Entrees',
        items: [
          {
            type: 'Main Entree',
            name: 'Jackfruit Fajita + Rice + Beans + Peppers and Salsa'
          }
        ]
      },
      {
        category: 'Salads & Soups',
        items: [
          { type: 'Composed Salad', name: 'Spinach Caraway Carrot Salad' },
          { type: 'Soup', name: 'Black Bean + Soy Chorizo Soup' }
        ]
      }
    ]
  };

  const pescatarianMenu: Menu = {
    id: 'pescatarian',
    name: 'Pescatarian',
    orderLink,
    image: `${imageUrl}weekly-menu-pescatarian.webp`,
    dishes: [
      {
        category: 'Entrees',
        items: [
          {
            type: 'Main Entree',
            name: 'Jackfruit Fajita + Rice + Beans + Peppers and Salsa'
          }
        ]
      },
      {
        category: 'Salads & Soups',
        items: [
          { type: 'Composed Salad', name: 'Spinach Caraway Carrot Salad' },
          { type: 'Soup', name: 'Black Bean + Soy Chorizo Soup' }
        ]
      }
    ]
  };

  const plantBasedMenu: Menu = {
    id: 'plant-based',
    name: 'Plant-Based',
    orderLink,
    image: `${imageUrl}weekly-menu-plant-based.webp`,
    dishes: [
      {
        category: 'Entrees',
        items: [
          {
            type: 'Main Entree',
            name: 'Jackfruit Fajita + Rice + Beans + Peppers and Salsa'
          }
        ]
      },
      {
        category: 'Salads & Soups',
        items: [
          { type: 'Composed Salad', name: 'Spinach Caraway Carrot Salad' },
          { type: 'Soup', name: 'Black Bean + Soy Chorizo Soup' }
        ]
      }
    ]
  };

  const nonRedMeatMenu: Menu = {
    id: 'non-red-meat',
    name: 'Non-Red Meat',
    orderLink,
    image: `${imageUrl}weekly-menu-non-red-meat.webp`,
    dishes: [
      {
        category: 'Entrees',
        items: [
          {
            type: 'Main Entree',
            name: 'Jackfruit Fajita + Rice + Beans + Peppers and Salsa'
          }
        ]
      },
      {
        category: 'Salads & Soups',
        items: [
          { type: 'Composed Salad', name: 'Spinach Caraway Carrot Salad' },
          { type: 'Soup', name: 'Black Bean + Soy Chorizo Soup' }
        ]
      }
    ]
  };

  const menus = [flexitarianMenu, pescatarianMenu, plantBasedMenu, nonRedMeatMenu];

  return (
    <div className="nybll-container">
      <WeeklyMenu menus={menus} />
    </div>
  );
};

WeeklyMenuStory.storyName = 'Default';
