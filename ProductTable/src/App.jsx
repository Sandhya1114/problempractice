
 

import FilterableProductTable from './components/FilterableProductTable';
import PRODUCTS from './data/products';

function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}

export default App;
 /**
   * FilterableProductTable (grey) contains the entire app.
   * SearchBar (blue) receives the user input.
   * ProductTable (lavender) displays and filters the list according to the user input.
   * ProductCategoryRow (green) displays a heading for each category.
   * ProductRow (yellow) displays a row for each product.
   */