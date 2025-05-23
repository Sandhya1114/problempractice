import SubcategoryList from './SubcategoryList';

const CategoryItem = ({ category, onCategorySelect }) => (
  <li>
    <div>{category.name}</div>
    {category.subcategories && (
      <SubcategoryList subcategories={category.subcategories} onCategorySelect={onCategorySelect} />
    )}
  </li>
);

export default CategoryItem;
