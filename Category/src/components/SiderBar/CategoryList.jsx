import CategoryItem from './CategoryItem';

const CategoryList = ({ categories, onCategorySelect }) => (
  <ul>
    {categories.map(cat => (
      <CategoryItem key={cat.id} category={cat} onCategorySelect={onCategorySelect} />
    ))}
  </ul>
);

export default CategoryList;