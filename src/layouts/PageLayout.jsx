import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import style from './PageLayout.module.scss';

const PageLayout = ({ children, hero }) => (
  <div className={style.container}>
    <header>
      <Navbar />
      {hero}
    </header>
    <main>
      <div className={style.content}>{children}</div>
    </main>
    <Footer />
  </div>
);

PageLayout.defaultProps = {
  hero: null,
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  hero: PropTypes.node,
};

export default PageLayout;
