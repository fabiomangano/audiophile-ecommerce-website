import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { ReactComponent as Logo } from '../../assets/shared/desktop/logo.svg';
import { MediumOrLargeScreen, LargeScreen } from '../../mediaQueries';
import NavLinks from '../nav-links/NavLinks';
import SocialLinks from '../social-links/SocialLinks';
import Marginer from '../marginer/Marginer';
import style from './Footer.module.scss';

const Footer = () => {
  const isMediumOrLargeScreen = useMediaQuery(MediumOrLargeScreen);
  const isLargeScreen = useMediaQuery(LargeScreen);
  const navLinksDirection = isMediumOrLargeScreen ? 'horizontal' : 'vertical';

  return (
    <footer>
      <div className={style.row} />
      <div className={style.container}>
        <div className={style.logo_navlinks}>
          <Link to="/">
            <Logo />
          </Link>

          {!isLargeScreen ? (
            <Marginer direction="horizontal" margin={3} />
          ) : null}

          <NavLinks direction={navLinksDirection} />
        </div>

        <Marginer direction="horizontal" margin={3} />

        <p className={style.about}>
          Audiophile is an all in one stop to fulfill your audio needs.
          We&#39;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we’re open 7 days a week.
        </p>

        <Marginer direction="horizontal" margin={3} />

        <div className={style.social_links_copyright}>
          <SocialLinks />
          {!isMediumOrLargeScreen ? (
            <Marginer direction="horizontal" margin={3} />
          ) : null}
          <p className={style.copyright}>Copyright 2021. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
