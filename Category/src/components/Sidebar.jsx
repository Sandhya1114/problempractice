
import CategoryList from './SiderBar/CategoryList';

const Sidebar = ({ categoryData, onCategorySelect }) => (
  <div className="w-1/4 p-4">
    <CategoryList categories={categoryData} onCategorySelect={onCategorySelect} />
  </div>
);

export default Sidebar;
