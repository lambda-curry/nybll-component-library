import React, { FC } from 'react';
import classNames from 'classnames';
import { WeeklyMenuTabPanelContentList } from './WeeklyMenuTabPanelContentList';
import { Menu } from './WeeklyMenu.types';

export interface WeeklyMenuTabPanelProps {
  id: string;
  menu: Menu;
  className?: string;
}

export const WeeklyMenuTabPanel: FC<WeeklyMenuTabPanelProps> = ({ className, id, menu }) => {
  const { name, image, secondary_image, orderLink, dishes } = menu;
  if (menu.dishes?.length < 1) return <>No dishes available...</>;

  return (
    <div key={id} className={className}>
      <div className="nybll-container padding-l-0 padding-r-0">
        <div className="nybll-grid">
          <div className="nybll-grid__col-xs-12 nybll-grid__col-md-5 align-items-center">
            <div
              className={classNames(`nybll-weekly-menu-image`, {
                'nybll-weekly-menu-image-has-secondary': !!secondary_image
              })}
            >
              <img src={image} alt={name} className="nybll-weekly-menu-image-primary" />
              {secondary_image && (
                <img src={secondary_image} alt={name} className="nybll-weekly-menu-image-secondary" />
              )}
            </div>
          </div>
          <div className="nybll-grid__col-xs-12 nybll-grid__col-md-6 nybll-grid__col-md-start-7">
            <div>
              {dishes.map(({ items, category }) => (
                <WeeklyMenuTabPanelContentList key={category} dishes={items} heading={category} />
              ))}

              {orderLink && (
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
