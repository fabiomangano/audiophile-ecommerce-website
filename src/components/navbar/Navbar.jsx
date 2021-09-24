import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { ReactComponent as Logo } from '../../assets/shared/desktop/logo.svg';
import { MediumOrSmallScreen, is1440orLarger } from '../../mediaQueries';
import IconButton from '../icon-button/IconButton';
import NavLinks from '../nav-links/NavLinks';
import Icon from '../icon/Icon';
import icons from '../icon/icons';
import style from './Navbar.module.scss';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const handleOpenMenu = useCallback(() => {
    setOpenMenu(!openMenu);
  }, [openMenu]);

  const handleOpenCart = useCallback(() => {
    setOpenCart(!openCart);
  }, [openCart]);

  const isMediumOrSmallScreen = useMediaQuery(MediumOrSmallScreen);
  const is1440 = useMediaQuery(is1440orLarger);

  return (
    <div className={style.container}>
      <nav>
        {isMediumOrSmallScreen && (
          <IconButton data-testid="menu-btn" onClick={handleOpenMenu}>
            {openMenu ? (
              <Icon path={icons.X} color="#fff" size={30} />
            ) : (
              <Icon path={icons.MENU} color="#fff" size={30} />
            )}
          </IconButton>
        )}

        <Link to="/">
          <Logo />
        </Link>

        {isMediumOrSmallScreen ? (
          <div
            data-testid="navlinks-container"
            className={openMenu ? style.display : style.hide}
          >
            <NavLinks direction="vertical" />
          </div>
        ) : (
          <NavLinks direction="horizontal" />
        )}

        <span className={is1440 ? style.center : undefined}>
          <IconButton data-testid="cart-btn" onClick={handleOpenCart}>
            <Icon path={icons.CART} color="#fff" />
          </IconButton>
        </span>
      </nav>
    </div>
  );
};

export default Navbar;
