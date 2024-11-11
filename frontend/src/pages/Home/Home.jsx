import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import Fooditem from '../../components/Fooditem/Fooditem';
import AppDownload from '../../components/AppDownload/AppDownload';

function Home() {
  const [category, setCategory] = useState('All');

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      {/* <Fooditem category={category} /> "never add a card here for any website or else it will show an empty card on your wesbsite" */}
      <AppDownload />
    </div>
  );
}

export default Home;