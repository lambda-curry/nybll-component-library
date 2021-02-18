import React from 'react';
import { Dish } from './Menu.types';

interface MenuContentListProps {
  dishes: Dish[];
  heading: string;
}

export const MenuContentList: React.FC<MenuContentListProps> = ({ dishes, heading }) => {
  if (dishes.length < 1) return null;

  return (
    <div className="nybll-menu--content-list">
      <h6 className="font-family-sans-serif font-weight-bold">{heading}</h6>

      <ul className="padding-l-0">
        {dishes.map(dish => {
          return <li className="nybll-menu--content-list-item">{dish}</li>;
        })}
      </ul>
    </div>
  );
};
