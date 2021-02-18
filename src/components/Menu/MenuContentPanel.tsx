import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { ContentList, Menu } from './Menu.types';
import placeholderImage from '../../assets/images/weekly-menu-image-placeholder.png';
// import { MenuContentList } from './index';
import { categorizeDishesByType } from './Menu.helpers';
import { MenuContentList } from './MenuContentList';

export interface MenuContentPanelProps {
  id: string;
  menu: Menu;
  className?: string;
}

export const MenuContentPanel: React.FC<MenuContentPanelProps> = ({ className, id, menu }) => {
  const { name, image, secondary_image, orderLink, dishes } = menu;
  if (dishes?.length < 1) return <>No dishes available...</>;

  return (
    <div key={id} className={className}>
      <div className="nybll-container padding-l-0 padding-r-0">
        <div className="nybll-grid">
          <div className="nybll-grid__col-xs-12 nybll-grid__col-md-6 nybll-grid__col-md-start-7">
            <p className="font-size-xs margin-t-1">
              * Orders placed today will receive the current menu on the delivery date
            </p>
          </div>
        </div>

        <div className="nybll-grid">
          <div className="nybll-grid__col-xs-12 nybll-grid__col-md-5 align-items-center">
            <div
              className={classNames(`nybll-menu--image`, {
                'nybll-menu--image-has-secondary': !!secondary_image
              })}
            >
              <div className="nybll-menu--image-primary" style={{ backgroundImage: `url(${image})` }}>
                <img src={placeholderImage} alt={`${name} primary`} />
              </div>
              {secondary_image && (
                <div className="nybll-menu--image-secondary" style={{ backgroundImage: `url(${secondary_image})` }}>
                  <img src={placeholderImage} alt={`${name} secondary`} />
                </div>
              )}
            </div>
          </div>
          <div className="nybll-grid__col-xs-12 nybll-grid__col-md-6 nybll-grid__col-md-start-7">
            {categorizeDishesByType(dishes).map(({ heading, dishes }: ContentList) => (
              <MenuContentList heading={heading} dishes={dishes} />
            ))}

            <div>
              {orderLink && (
                <a href={orderLink} className="nybll-button nybll-button--primary nybll-button--large">
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
