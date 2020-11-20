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
    image: {
      webp: `${imageUrl}weekly-menu-flexitarian.webp`,
      png: ''
    },
    items: [
      {
        type: 'entree',
        name: 'Chicken Fajita + Rice + Beans + Peppers and Salsa'
      },
      {
        type: 'salad',
        name: 'Garden Salad + Balsamic Vinaigrette'
      },
      {
        type: 'soup',
        name: 'Curried Carrot and Apple Soup'
      }
    ]
  };

  const pescatarianMenu: Menu = {
    id: 'pescatarian',
    name: 'Pescatarian',
    orderLink,
    image: {
      webp: `${imageUrl}weekly-menu-pescatarian.webp`,
      png: ''
    },
    items: [
      {
        type: 'entree',
        name: 'Jackfruit Fajita + Rice + Beans + Peppers and Salsa'
      },
      {
        type: 'salad',
        name: 'Garden Salad + Balsamic Vinaigrette'
      },
      {
        type: 'soup',
        name: 'Curried Carrot and Apple Soup'
      }
    ]
  };

  const plantBasedMenu: Menu = {
    id: 'plant-based',
    name: 'Plant-Based',
    orderLink,
    image: {
      webp: `${imageUrl}weekly-menu-plant-based.webp`,
      png: ''
    },
    items: [
      {
        type: 'entree',
        name: 'Jackfruit Fajita + Rice + Beans + Peppers and Salsa'
      },
      {
        type: 'salad',
        name: 'Garden Salad + Balsamic Vinaigrette'
      },
      {
        type: 'soup',
        name: 'Curried Carrot and Apple Soup'
      }
    ]
  };

  const nonRedMeatMenu: Menu = {
    id: 'non-red-meat',
    name: 'Non-Red Meat',
    orderLink,
    image: {
      webp: `${imageUrl}weekly-menu-non-red-meat.webp`,
      png: ''
    },
    items: [
      {
        type: 'entree',
        name: 'Chicken Fajita + Rice + Beans + Peppers and Salsa'
      },
      {
        type: 'salad',
        name: 'Garden Salad + Balsamic Vinaigrette'
      },
      {
        type: 'soup',
        name: 'Curried Carrot and Apple Soup'
      }
    ]
  };

  const menus = [flexitarianMenu, pescatarianMenu, plantBasedMenu, nonRedMeatMenu];

  return (
    <div className="nybll-container">
      <WeeklyMenu menu={menus} />
    </div>
  );
};

WeeklyMenuStory.storyName = 'Default';
