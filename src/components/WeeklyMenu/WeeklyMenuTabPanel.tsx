import React, { FC } from 'react';
import { WeeklyMenuTabPanelContentList } from './WeeklyMenuTabPanelContentList';
import { Menu } from './WeeklyMenu.types';

export interface WeeklyMenuTabPanelProps {
  id: string;
  menu: Menu;
  className?: string;
}

export const WeeklyMenuTabPanel: FC<WeeklyMenuTabPanelProps> = ({
  className,
  id,
  menu,
}) => {
  const items = menu.items;
  const entrees = items.filter(item => item.type === 'entree');
  const saladAndSoups = items.filter(
    item => item.type === 'soup' || item.type === 'salad'
  );

  return (
    <div key={id} className={className}>
      <div className="nybll-container padding-l-0 padding-r-0">
        <div className="nybll-grid">
          <div className="nybll-grid__col-xs-12 nybll-grid__col-md-5 align-items-center">
            <picture>
              <source srcSet={menu.image.webp} type="image/webp" />
              <source srcSet={menu.image.png} type="image/png" />
              <img src={menu.image.png} alt="panel image goes here" />
            </picture>
          </div>
          <div className="nybll-grid__col-xs-12 nybll-grid__col-md-6 nybll-grid__col-md-start-7">
            <div>
              <WeeklyMenuTabPanelContentList
                dishes={entrees}
                heading="Entrees"
              />
              <WeeklyMenuTabPanelContentList
                dishes={saladAndSoups}
                heading="Salads and Soups"
              />
              <a
                href={menu.orderLink}
                className="nybll-button nybll-button--primary nybll-button--large"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
