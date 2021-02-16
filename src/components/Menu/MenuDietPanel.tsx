import React, { FC } from 'react';
import { MenuContentPanel } from './index';
import { Menu } from './Menu.types';
import { Tabs } from '@lambdacurry/component-library';

export interface MenuDietPanelProps {
  className?: string;
  menus: {
    current: {
      start: string;
      menu: Menu;
    };
    next: {
      start: string;
      menu: Menu;
    };
    previous: {
      start: string;
      menu: Menu;
    };
  };
}

export const MenuDietPanel: React.FC<MenuDietPanelProps> = ({ className, menus }) => {
  const { current, next, previous } = menus;

  const tabs = [
    {
      label: `Last Week ${previous.start}`,
      render: <MenuContentPanel id="1" menu={previous.menu} />
    },
    {
      label: `Current Menu ${current.start}`,
      render: <MenuContentPanel id="2" menu={current.menu} />
    },
    {
      label: `Next Week ${next.start}`,
      render: <MenuContentPanel id="3" menu={next.menu} />
    }
  ];

  return (
    <div className={className}>
      <Tabs tabs={tabs} />
    </div>
  );
};
