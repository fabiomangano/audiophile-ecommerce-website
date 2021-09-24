import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './NavLinks.module.scss';

export const links = [
  {
    to: '/',
    label: 'Home',
  },
  {
    to: '/category/headpones',
    label: 'Headpones',
  },
  {
    to: '/category/speakers',
    label: 'Speakers',
  },
  {
    to: '/category/earpones',
    label: 'Earpones',
  },
];

export const NavLinks = ({ direction }) => {
  let className;

  if (direction === 'horizontal') className = style.links_horizontal;
  if (direction === 'vertical') className = style.links_vertical;

  return (
    <div className={style.container}>
      <ul className={className}>
        {links.map(({ to, label }) => (
          <li key={label}>
            <Link to={to} className={style.link}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

NavLinks.defaultProps = {
  direction: 'horizontal',
};

NavLinks.propTypes = {
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
};

export default NavLinks;
