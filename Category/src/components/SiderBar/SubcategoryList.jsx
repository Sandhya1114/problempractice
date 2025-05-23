import SubcategoryItem from './SubcategoryItem';

const SubcategoryList = ({ subcategories, onCategorySelect }) => (
  <ul className="pl-4">
    {subcategories.map(sub => (
      <SubcategoryItem key={sub.id} subcategory={sub} onCategorySelect={onCategorySelect} />
    ))}
  </ul>
);

export default SubcategoryList;