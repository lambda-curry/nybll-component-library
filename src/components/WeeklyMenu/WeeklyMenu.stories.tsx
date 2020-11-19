import React from 'react';
import { WeeklyMenu, Menu } from '.';

export default {
  title: 'Components/WeeklyMenu',
  component: WeeklyMenu
};

export const WeeklyMenuStory = () => {
  const flexitarianMenu: Menu = {
    id: 'flexitarian',
    name: 'Flexitarian',
    orderLink: '#',
    image: {
      webp: '',
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
    orderLink: '#',
    image: {
      webp: '',
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
    orderLink: '#',
    image: {
      webp: '',
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
    orderLink: '#',
    image: {
      webp: '',
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

  return <WeeklyMenu menu={menus} />;
};

WeeklyMenuStory.storyName = 'Default';
