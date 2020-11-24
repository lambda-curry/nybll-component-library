import React, { FC } from 'react';
import { WeeklyMenuTabPanelContentList } from './WeeklyMenuTabPanelContentList';
import { Menu } from './WeeklyMenu.types';

export interface WeeklyMenuTabPanelProps {
  id: string;
  menu: Menu;
  className?: string;
}

export const WeeklyMenuTabPanel: FC<WeeklyMenuTabPanelProps> = ({ className, id, menu }) => {
  if (menu.dishes?.length < 1) return <>No dishes available...</>;

  return (
    <div key={id} className={className}>
      <div className="nybll-container padding-l-0 padding-r-0">
        <div className="nybll-grid">
          <div className="nybll-grid__col-xs-12 nybll-grid__col-md-5 align-items-center">
            <img src={menu.image} alt={menu.name} />
          </div>
          <div className="nybll-grid__col-xs-12 nybll-grid__col-md-6 nybll-grid__col-md-start-7">
            <div>
              {menu.dishes.map(({ items, category }) => {
                return <WeeklyMenuTabPanelContentList key={category} dishes={items} heading={category} />;
              })}
              {menu.orderLink && (
                <a href={menu.orderLink} className="nybll-button nybll-button--primary nybll-button--large">
                  Order Now
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
