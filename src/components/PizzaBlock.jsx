import React from 'react';

const PizzaBlock = () => {
  return (
    <div class="pizza-block">
      <img
        class="pizza-block__image"
        src="https://dodopizza-a.akamaihd.net/static/Img/Products/7200b744e52642a3b68112689a6546b8_292x292.jpeg"
        alt="Pizza"
      />
      <h4 class="pizza-block__title">Pizza</h4>
      <div class="pizza-block__selector">
        <ul>
          <li class="active">thin</li>
          <li>traditional</li>
        </ul>
        <ul>
          <li class="active">26 cm.</li>
          <li>30 cm.</li>
          <li>40 cm.</li>
        </ul>
      </div>
      <div class="pizza-block__bottom">
        <div class="pizza-block__price">from 25$</div>
        <div class="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Add</span>
          <i>2</i>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;