import React from 'react';
import { Diet } from './Menu.types';
import { Tabs } from '@lambdacurry/component-library';
import { MenuDietPanel } from './index';
import './menu.scss';

export interface MenuProps {
  menu: {
    dates: {
      current: string;
      next: string;
      previous: string;
    };
    dietHistory: Diet[];
  };
}

export const Menu: React.FC<MenuProps> = ({ menu }) => {
  const { dates, dietHistory } = menu;

  const tabs = dietHistory.map(diet => ({
    label: diet.label,
    render: <MenuDietPanel className="nybll-menu--diet-panel" dates={dates} menus={diet.menus} />
  }));

  return (
    <div className="nybll-menu">
      <Tabs tabs={tabs} variant="scrollable" />
    </div>
  );
};
