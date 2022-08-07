import React, { useState } from 'react';

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = ['All', 'Meat', 'Vegetaria', 'Grill', 'Spicy', 'Closed'];

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((el, i) => (
          <li onClick={() => onClickCategory(i)} className={activeIndex === i ? 'active' : ''}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
