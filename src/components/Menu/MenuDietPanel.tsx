import React from 'react';
import { MenuContentPanel } from './index';
import { Menu } from './Menu.types';
import { Tabs } from '@lambdacurry/component-library';

export interface MenuDietPanelProps {
  className?: string;
  dates: {
    current: string;
    next: string;
    previous: string;
  };
  menus: {
    current?: Menu;
    next?: Menu;
    previous?: Menu;
  };
}

export const MenuDietPanel: React.FC<MenuDietPanelProps> = ({ className, dates, menus }) => {
  const { current, next, previous } = menus;

  const tabs = [
    {
      label: (
        <p className="font-weight-bold margin-0">
          Last Week
          <span>{dates.previous} delivery</span>
        </p>
      ),
      render: <MenuContentPanel id="1" menu={previous} />
    },
    {
      label: (
        <p className="font-weight-bold margin-0">
          Current Menu
          <span>{dates.current} delivery</span>
        </p>
      ),
      render: <MenuContentPanel id="2" menu={current} />
    },
    {
      label: (
        <p className="font-weight-bold margin-0">
          Next Week
          <span>{dates.next} delivery</span>
        </p>
      ),
      render: <MenuContentPanel id="3" menu={next} />
    }
  ];

  return (
    <div className={className}>
      <Tabs initialValue={1} tabs={tabs} />
    </div>
  );
};
