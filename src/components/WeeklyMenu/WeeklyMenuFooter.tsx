import React from 'react';
import { ReactComponent as SvgIconGluten } from '../../assets/icons/gluten.svg';

export const WeeklyMenuFooter = () => (
  <div className="nybll-weekly-menu-footer">
    <div className="nybll-weekly-menu-footer-legend">
      <SvgIconGluten />
      <p className="font-size-xs margin-0">The dish contains gluten</p>
    </div>
  </div>
);
