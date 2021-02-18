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
    current: Menu;
    next: Menu;
    previous: Menu;
  };
}

export const MenuDietPanel: React.FC<MenuDietPanelProps> = ({ className, dates, menus }) => {
  const { current, next, previous } = menus;

  const tabs = [
    {
      label: `Last Week ${dates.previous}`,
      render: <MenuContentPanel id="1" menu={previous} />
    },
    {
      label: `Current Menu ${dates.current}`,
      render: <MenuContentPanel id="2" menu={current} />
    },
    {
      label: `Next Week ${dates.next}`,
      render: <MenuContentPanel id="3" menu={next} />
    }
  ];

  return (
    <div className={className}>
      <Tabs tabs={tabs} />
    </div>
  );
};
