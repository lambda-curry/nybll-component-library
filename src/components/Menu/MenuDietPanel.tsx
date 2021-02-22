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
          <br />
          <span className="font-size-xs font-weight-normal">{dates.previous} delivery</span>
        </p>
      ),
      render: <MenuContentPanel id="1" menu={previous} />,
      value: 'last-week'
    },
    {
      label: (
        <p className="font-weight-bold margin-0">
          Current Menu
          <br />
          <span className="font-size-xs font-weight-normal">{dates.current} delivery</span>
        </p>
      ),
      render: <MenuContentPanel id="2" menu={current} />,
      value: 'current-menu'
    },
    {
      label: (
        <p className="font-weight-bold margin-0">
          Next Week
          <br />
          <span className="font-size-xs font-weight-normal">{dates.next} delivery</span>
        </p>
      ),
      render: <MenuContentPanel id="3" menu={next} />,
      value: 'next-week'
    }
  ];

  return (
    <div className={className}>
      <Tabs initialValue="current-menu" tabs={tabs} />
    </div>
  );
};
