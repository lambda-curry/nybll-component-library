import React from 'react';
import { WeeklyMenu } from './';
import { WeeklyMenuType } from '../../types/WeeklyMenu.types';
import primaryImage from '../../assets/images/weekly-menu-sample-image.jpg';
import secondaryImage from '../../assets/images/weekly-menu-sample-image-secondary.jpg';

export default {
  title: 'Components/WeeklyMenu',
  component: WeeklyMenu
};

export const WeeklyMenuStory = () => {
  const orderLink = 'https://www.nybll.com/#meal-plans';

  const flexitarianMenu: WeeklyMenuType = {
    id: 'flexitarian',
    name: 'Flexitarian',
    orderLink,
    image: primaryImage,
    secondary_image: secondaryImage,
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

  const pescatarianMenu: WeeklyMenuType = {
    id: 'pescatarian',
    name: 'Pescatarian',
    orderLink,
    image: primaryImage,
    secondary_image: secondaryImage,
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

  const plantBasedMenu: WeeklyMenuType = {
    id: 'plant-based',
    name: 'Plant-Based',
    orderLink,
    image: primaryImage,
    secondary_image: secondaryImage,
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

  const nonRedMeatMenu: WeeklyMenuType = {
    id: 'non-red-meat',
    name: 'Non-Red Meat',
    image: primaryImage,
    secondary_image: secondaryImage,
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
