import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getResponsiveClasses } from '../../helpers';


const GridItem = ({
  children,
  className = '',
  element: Element = 'div',
  size = '',
  ...rest
}) => {
  const classNames = cx(
    'grid__item',
    {
      [`grid__item--${size}`]: size
    },
    getResponsiveClasses(size, 'grid__item'),
    className
  );

  return (
    <Element className={classNames} {...rest}>
      {children}
    </Element>
  );
};


GridItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  element: PropTypes.oneOf(['li', 'div']),
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.string)
  ])
};


export default GridItem;
