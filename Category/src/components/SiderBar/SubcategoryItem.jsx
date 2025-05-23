import SubcategoryList from './SubcategoryList';

const SubcategoryItem = ({ subcategory, onCategorySelect }) => (
  <li>
    <div onClick={() => !subcategory.subcategories && onCategorySelect(subcategory.id)}>
      {subcategory.name}
    </div>
    {subcategory.subcategories && (
      <SubcategoryList subcategories={subcategory.subcategories} onCategorySelect={onCategorySelect} />
    )}
  </li>
);

export default SubcategoryItem;