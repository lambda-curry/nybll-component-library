import React from 'react';
import { Dish } from '../..';

interface MenuContentListProps {
  dishes: Dish[];
  heading: string;
}

export const MenuContentList: React.FC<MenuContentListProps> = ({ dishes, heading }) => {
  if (dishes.length < 1) return null;

  return (
    <div className="nybll-menu--content-list">
      <h6 className="font-family-secondary font-weight-bold text-transform-upper">{heading}</h6>

      <ul className="padding-l-0">
        {dishes.map(dish => {
          return (
            <li key={dish.name} className="nybll-menu--content-list-item font-family-secondary font-size-sm">
              {dish}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
