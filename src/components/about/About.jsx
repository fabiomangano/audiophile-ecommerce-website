import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { LargeScreen } from '../../mediaQueries';
import Marginer from '../marginer/Marginer';
import style from './About.module.scss';

const About = () => {
  const isLargeScreen = useMediaQuery(LargeScreen);

  return (
    <div className={style.container}>
      <div className={style.image} />
      <Marginer
        direction={isLargeScreen ? 'vertical' : 'horizontal'}
        margin={isLargeScreen ? 7.8 : 2}
      />
      <div className={style.content}>
        <h4 className={style.heading}>
          Bringing you the <span className={style.brick_word}>best </span>
          audio gear
        </h4>
        <Marginer direction="horizontal" margin={2} />
        <p className={style.about_us}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};

export default About;
