import React, { FC } from 'react';
import { Tabs } from '@lambdacurry/component-library';
import { WeeklyMenuFooter, WeeklyMenuTabPanel } from '.';
import { Menu } from './WeeklyMenu.types';

import './weekly-menu.scss';

export interface WeeklyMenuProps {
  menu: Menu[];
}

export const WeeklyMenu: FC<WeeklyMenuProps> = ({ menu }) => {
  const tabs = menu.map(item => ({
    label: item.name,
    render: <WeeklyMenuTabPanel id={item.id} menu={item} className="nybll-section padding-b-0" />
  }));

  return (
    <div className="nybll-weekly-menu-widget-app">
      <Tabs tabs={tabs} variant="scrollable" />
      <WeeklyMenuFooter />
    </div>
  );
};
