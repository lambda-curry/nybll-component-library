import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

import '../../styles/index.scss';

export interface BaseProps {
  className?: string;
  children: ReactNode;
}

export const Base: FC<BaseProps> = ({ className, ...props }) => (
  <div className={classNames('nybll-typography', className)} {...props} />
);
