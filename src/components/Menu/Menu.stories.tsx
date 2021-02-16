import React from 'react';
import { Menu } from '.';
import primaryImage from '../../assets/images/weekly-menu-sample-image.jpg';
import secondaryImage from '../../assets/images/weekly-menu-sample-image-secondary.jpg';
import { Diet, Menu as MenuType } from './Menu.types';

export default {
  title: 'Components/Menu',
  component: Menu
};

const fetchMenuData = async () => {
  const response = await fetch(
    'https://admin.nybll.com/weekly-home-menu/find-for-week?includePrevious=true&includeNext=true',
    {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  return response.json();
};

export const MenuStory = () => {
  const orderLink = 'https://www.nybll.com/#meal-plans';

  const data = fetchMenuData();
  console.log({ data: data });

  const flexitarianMenu: MenuType = {
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

  const pescatarianMenu: MenuType = {
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

  const plantBasedMenu: MenuType = {
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

  const nonRedMeatMenu: MenuType = {
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

  const diets: Array<Diet> = [
    {
      id: '1',
      label: 'Flexitarian',
      type: 'flexitarian',
      menus: {
        current: {
          start: 'Feb 1st',
          menu: flexitarianMenu
        },
        next: {
          start: 'Feb 8th',
          menu: flexitarianMenu
        },
        previous: {
          start: 'Feb 15th',
          menu: flexitarianMenu
        }
      }
    },
    {
      id: '2',
      label: 'Pescatarian',
      type: 'pescatarian',
      menus: {
        current: {
          start: '',
          menu: pescatarianMenu
        },
        next: {
          start: '',
          menu: pescatarianMenu
        },
        previous: {
          start: '',
          menu: pescatarianMenu
        }
      }
    },
    {
      id: '3',
      label: 'Plant-Based',
      type: 'plant-based',
      menus: {
        current: {
          start: '',
          menu: plantBasedMenu
        },
        next: {
          start: '',
          menu: plantBasedMenu
        },
        previous: {
          start: '',
          menu: plantBasedMenu
        }
      }
    },
    {
      id: '4',
      label: 'Non-Red Meat',
      type: 'non-red-meat',
      menus: {
        current: {
          start: '',
          menu: nonRedMeatMenu
        },
        next: {
          start: '',
          menu: nonRedMeatMenu
        },
        previous: {
          start: '',
          menu: nonRedMeatMenu
        }
      }
    }
  ];

  return (
    <div className="nybll-container">
      <Menu diets={diets} />
    </div>
  );
};

MenuStory.storyName = 'Default';
