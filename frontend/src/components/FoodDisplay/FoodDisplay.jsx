import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import Fooditem from '../Fooditem/Fooditem';

function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext);

  return (
    <div className='food-display mt-8' id='food-display'>
      <h2 className='text-2xl font-semibold md:text-3xl'>Top dishes near you</h2>
      <div className="food-display-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 mt-8">
        {food_list
          .filter((item) => (category === "All" ? true : item.category === category))
          .map((item) => (
            <Fooditem
              key={item._id}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
      </div>
    </div>
  );
}

export default FoodDisplay;