import { useState } from 'react';
import Sidebar from './components/Sidebar';
import ProductDisplay from './components/Display/ProductDisplay';

import { categoryData } from './Data/categoryData';
import { products } from './Data/products';


const App = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  return (
    <div className="flex">
      <Sidebar categoryData={categoryData} onCategorySelect={setSelectedCategoryId} />
      <ProductDisplay products={products} selectedCategoryId={selectedCategoryId} />
    </div>
  );
};

export default App;
