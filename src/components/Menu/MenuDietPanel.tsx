import React from 'react';
import { MenuContentPanel } from './index';
import { Tabs } from '@lambdacurry/component-library';
import { MenuType } from '../../types/types';

export interface MenuDietPanelProps {
  className?: string;
  tabValue?: number;
  setWeekTabsValue: (weekTabsValue: number) => void;
  dates: {
    current: string;
    next: string;
    previous: string;
  };
  menus: {
    current?: MenuType;
    next?: MenuType;
    previous?: MenuType;
  };
}

export const MenuDietPanel: React.FC<MenuDietPanelProps> = ({
  className,
  dates,
  menus,
  tabValue = 1,
  setWeekTabsValue
}) => {
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
      <Tabs
        onChange={({}, index: number) => setWeekTabsValue(index)}
        tabs={tabs}
        value={tabValue}
        variant="fullWidth"
      />
    </div>
  );
};
