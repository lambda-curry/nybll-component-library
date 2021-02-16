import React, { FC } from 'react';
import { ReactComponent as SvgIconGluten } from '../../assets/icons/gluten.svg';
import { Dish } from './Menu.types';

interface MenuContentListProps {
  dishes: Dish[];
  heading: string;
}

export const MenuContentList: FC<MenuContentListProps> = ({ dishes, heading }) => {
  if (dishes.length < 1) return null;

  return (
    <div className="nybll-weekly-menu-tab-panel-content-list">
      <h6 className="font-family-sans-serif font-weight-bold">{heading}</h6>

      <ul className="padding-l-0">
        {dishes.map(dish => (
          <li key={dish.name} className="nybll-weekly-menu-tab-panel-item">
            {dish.name}
            {dish.containsGluten && (
              <div className="contains-gluten">
                <SvgIconGluten />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
