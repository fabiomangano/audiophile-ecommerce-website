import React from 'react';
import Icon from '../icon/Icon';
import icons from '../icon/icons';
import style from './SocialLinks.module.scss';

const iconPaths = [icons.FACEBOOK, icons.TWITTER, icons.INSTAGRAM];

const SocialLinks = () => {
  return (
    <div className={style.container}>
      {iconPaths.map((path) => (
        <a key={path} href="/#">
          <Icon key={path} path={path} color="#fff" size={28} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
