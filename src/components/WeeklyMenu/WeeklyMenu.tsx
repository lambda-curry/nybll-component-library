import React, { FC } from 'react';
import { Tabs } from '@lambdacurry/component-library';
import { WeeklyMenuFooter, WeeklyMenuTabPanel } from '.';
import { WeeklyMenu as WeeklyMenuType } from './WeeklyMenu.types';

import './weekly-menu.scss';

export interface WeeklyMenuProps {
  menus: WeeklyMenuType[];
}

export const WeeklyMenu: FC<WeeklyMenuProps> = ({ menus }) => {
  const tabs = menus.map(item => ({
    label: item.name,
    render: <WeeklyMenuTabPanel id={item.id} menu={item} className="nybll-section padding-b-0" />
  }));

  return (
    <div className="nybll-weekly-menu-widget-app nybll-typography">
      <Tabs tabs={tabs} variant="scrollable" />
      <WeeklyMenuFooter />
    </div>
  );
};
