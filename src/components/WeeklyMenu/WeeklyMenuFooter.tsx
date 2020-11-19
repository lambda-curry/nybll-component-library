import React from 'react';
// import { ReactComponent as SvgIconGluten } from '../../icons/gluten.svg';
import glutenIcon from '../../icons/gluten.svg';

export const WeeklyMenuFooter = () => (
  <div className="nybll-weekly-menu-footer">
    <div className="nybll-weekly-menu-footer-legend">
      {glutenIcon}
      <p className="font-size-xs margin-0">The dish contains gluten</p>
    </div>
  </div>
);
