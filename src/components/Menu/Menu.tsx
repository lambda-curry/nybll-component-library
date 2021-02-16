import React, { FC } from 'react';
import { Diet } from './Menu.types';
import { Tabs } from '@lambdacurry/component-library';
import { MenuDietPanel } from './index';
import './menu.scss';

export interface MenuProps {
  diets: Array<Diet>;
}

export const Menu: React.FC<MenuProps> = ({ diets }) => {
  const tabs = diets.map(diet => ({
    label: diet.label,
    render: <MenuDietPanel className="nybll-menu--diet-panel" menus={diet.menus} />
  }));

  return (
    <div className="nybll-menu">
      <Tabs tabs={tabs} variant="scrollable" />
    </div>
  );
};
