import React from 'react';

const Categories = ({ value, onChangeCategory }) => {
  const categories = ['All', 'Meat', 'Vegetaria', 'Grill', 'Spicy', 'Closed'];

  return (
    <div className="categories">
      <ul>
        {categories.map((el, i) => (
          <li key={i} onClick={() => onChangeCategory(i)} className={value === i ? 'active' : ''}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
