import React from 'react';
import { useHistory } from 'react-router-dom';
import CategoryCard from '../category-card/CategoryCard';
import style from './CategoryCardGroup.module.scss';

const categories = [
  {
    id: '1',
    category: 'headphones',
    img: '../assets/shared/desktop/image-headphones.png',
  },
  {
    id: '2',
    category: 'speakers',
    img: '../assets/shared/desktop/image-speakers.png',
  },
  {
    id: '3',
    category: 'earphones',
    img: '../assets/shared/desktop/image-earphones.png',
  },
];

const CategoryCardGroup = () => {
  const history = useHistory();

  return (
    <div className={style.container}>
      {categories.map(({ id, category, img }) => (
        <CategoryCard
          key={id}
          category={category}
          url={img}
          onClick={() => history.push(`/category/${category}`)}
        />
      ))}
    </div>
  );
};

export default CategoryCardGroup;
